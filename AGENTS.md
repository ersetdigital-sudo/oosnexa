<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Base44 dev environment (docker-compose.base44.yml)

Landing page only — no database, no backend API, no external credentials.

- Run: `docker compose -f docker-compose.base44.yml up -d --build` (host port 3000).
- Dependencies install on container start (`npm ci`) into a named volume; the repo is
  bind-mounted, so edits hot-reload. Config changes (`next.config.ts`) make the dev
  server restart itself — do NOT `docker compose restart web` afterwards; killing the
  process makes npm log a harmless but noisy `SIGTERM`/`command failed` block.
- The page content is not JSX: `app/**/page.tsx` reads `content/**/*.html` from disk with
  `readFileSync` at MODULE scope and injects it via `dangerouslySetInnerHTML`. Those reads are
  not in the module graph, so editing `content/**/*.html` (or `*.schema.json`) does NOT hot-reload
  (touching `app/page.tsx` does not help either). To pick such an edit up, force the dev server's
  own clean self-restart: `docker compose -f docker-compose.base44.yml exec -T web sh -c 'touch next.config.ts'`
  then wait ~20s and curl the page. Do NOT use `docker compose restart web` for this — it kills npm
  with SIGTERM and writes an `npm error ... signal SIGTERM` block that trips log-based error checks.
  Editing `app/**/*.tsx` or `app/page.css` DOES hot-reload normally.
- `allowedDevOrigins` in `next.config.ts` uses `BASE44_PUBLIC_HOST_SUFFIX` (injected by
  compose) so the preview origin can load dev assets/HMR. Restart the service after editing it.
- Only env var is optional `NEXT_PUBLIC_SITE_URL` (`lib/site.ts`); it defaults to the
  production domain, so leave it unset in dev.
- Motion/scroll reveal lives in `app/page.css`: `.rv` (+ `.in` from the IntersectionObserver in
  `components/ClientScripts.tsx`) for grid/list children, and a CSS scroll-driven `rvUp`
  animation (`animation-timeline: view()`) for section headers/blocks that have no `.rv`.
  Two traps worth knowing:
  - `body` must use `overflow-x: clip`, NOT `hidden`. `hidden` turns body into a scroll
    container, so every `view()` timeline resolves against a body that never scrolls and the
    animation silently freezes mid-fade.
  - The preview browser reports `prefers-reduced-motion: reduce`, and page.css kills all
    *transitions* in that mode — so the `.rv` reveal is invisible there. The `rvUp` animation
    still runs (animations are not affected by `transition: none`), with `--rv-y: 0` so it is a
    pure fade. Verify reveals with `el.getAnimations()` / computed opacity while scrolling, not
    by eyeballing a screenshot.
- Verify: `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/` → 200.

