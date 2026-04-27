type DisplayModePickerProps = {
  activeMode: string;
  onSelect: (id: string) => void;
};

const options = [
  { id: "ripple", label: "Ripple" },
  { id: "glow", label: "Glow" },
  { id: "pulse", label: "Pulse" }
];

export function DisplayModePicker({ activeMode, onSelect }: DisplayModePickerProps) {
  return (
    <section className="modes">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          className={option.id === activeMode ? "active" : ""}
          onClick={() => onSelect(option.id)}
        >
          {option.label}
        </button>
      ))}
    </section>
  );
}
