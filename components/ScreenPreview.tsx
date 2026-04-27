import type { DisplayMode } from "../lib/starter-data";

type ScreenPreviewProps = {
  mode: DisplayMode;
};

export function ScreenPreview({ mode }: ScreenPreviewProps) {
  return (
    <section className={`screen mode-${mode.id}`}>
      <span className="label">Display Preview</span>
      <div className="screenFrame">
        <div className="displayCard large" />
        <div className="displayCard small left" />
        <div className="displayCard small right" />
      </div>
      <div className="screenFooter">
        <span>Current mode</span>
        <strong>{mode.name}</strong>
      </div>
    </section>
  );
}
