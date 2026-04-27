import type { DisplayMode, ScreenScene } from "../lib/starter-data";

type ScreenPreviewProps = {
  mode: DisplayMode;
  scene: ScreenScene;
  autoplay: boolean;
};

export function ScreenPreview({ mode, scene, autoplay }: ScreenPreviewProps) {
  return (
    <section className={`screen mode-${mode.id}`}>
      <div className="screenTop">
        <span className="label">Display Preview</span>
        <span className="screenVenue">{scene.venue}</span>
      </div>

      <div className="screenFrame">
        <div className="screenGlow" />
        <div className="displayHero">
          <p>{scene.accent}</p>
          <h2>{scene.headline}</h2>
          <span>{scene.subheadline}</span>
        </div>

        <div className="displayRail">
          {scene.chips.map((chip) => (
            <span key={chip} className="displayChip">
              {chip}
            </span>
          ))}
        </div>

        <div className="displayCard large">
          <strong>Primary motion zone</strong>
          <p>{mode.summary}</p>
        </div>
        <div className="displayCard small left">
          <strong>Touch cue</strong>
          <p>{mode.traits[0]}</p>
        </div>
        <div className="displayCard small right">
          <strong>Atmosphere</strong>
          <p>{mode.tempo}</p>
        </div>
      </div>

      <div className="screenFooter">
        <span>{scene.footerLabel}</span>
        <strong>{autoplay ? "Autoplay on" : "Autoplay off"}</strong>
      </div>
    </section>
  );
}
