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
  server restart itself.
- The page content is not JSX: `app/**/page.tsx` reads `content/**/*.html` from disk with
  `readFileSync` and injects it via `dangerouslySetInnerHTML`. Editing those HTML files
  changes the page; the JSON-LD comes from the matching `*.schema.json`.
- `allowedDevOrigins` in `next.config.ts` uses `BASE44_PUBLIC_HOST_SUFFIX` (injected by
  compose) so the preview origin can load dev assets/HMR. Restart the service after editing it.
- Only env var is optional `NEXT_PUBLIC_SITE_URL` (`lib/site.ts`); it defaults to the
  production domain, so leave it unset in dev.
- Verify: `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/` → 200.

