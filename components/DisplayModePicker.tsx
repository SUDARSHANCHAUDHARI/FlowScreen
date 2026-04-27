import type { DisplayMode } from "../lib/starter-data";

type DisplayModePickerProps = {
  activeMode: string;
  modes: DisplayMode[];
  onSelect: (id: string) => void;
};

export function DisplayModePicker({ activeMode, modes, onSelect }: DisplayModePickerProps) {
  return (
    <section className="modes">
      {modes.map((option) => (
        <button
          key={option.id}
          type="button"
          className={option.id === activeMode ? "active" : ""}
          onClick={() => onSelect(option.id)}
        >
          <span>{option.name}</span>
          <small>{option.tempo}</small>
        </button>
      ))}
    </section>
  );
}
