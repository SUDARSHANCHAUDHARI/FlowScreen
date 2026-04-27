import type { ScreenScene } from "../lib/starter-data";

type ScenePickerProps = {
  activeScene: string;
  scenes: ScreenScene[];
  onSelect: (id: string) => void;
};

export function ScenePicker({ activeScene, scenes, onSelect }: ScenePickerProps) {
  return (
    <section className="scenePicker">
      {scenes.map((scene) => (
        <button
          key={scene.id}
          type="button"
          className={scene.id === activeScene ? "sceneTile active" : "sceneTile"}
          onClick={() => onSelect(scene.id)}
        >
          <span className="sceneVenue">{scene.venue}</span>
          <strong>{scene.name}</strong>
          <small>{scene.accent}</small>
        </button>
      ))}
    </section>
  );
}
