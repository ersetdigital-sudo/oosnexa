type CaseCoverProps = {
  /** Kata besar bergaya outline di background */
  ghost: string;
  /** Label kecil di atas, mis. "Kenapa tanpa tampilan sistem?" */
  label: string;
  /** Chip modul / kapabilitas */
  chips: string[];
  /** Catatan privasi */
  note: string;
};

/**
 * Pengganti visual berbasis screenshot/mock UI untuk project yang datanya
 * bersifat rahasia: menampilkan arsitektur & cakupan modul, bukan isi sistem.
 */
export default function CaseCover({ ghost, label, chips, note }: CaseCoverProps) {
  return (
    <div className="cs-cover reveal">
      <span className="cs-cover-ghost" aria-hidden="true">
        {ghost}
      </span>
      <div className="cs-cover-body">
        <span className="cs-cover-label">{label}</span>
        <div className="cs-cover-chips">
          {chips.map((c) => (
            <em key={c}>{c}</em>
          ))}
        </div>
        <p className="cs-cover-note">{note}</p>
      </div>
    </div>
  );
}
