export type DisplayMode = {
  id: string;
  name: string;
  summary: string;
  traits: string[];
};

export const displayModes: DisplayMode[] = [
  {
    id: "ripple",
    name: "Ripple Response",
    summary: "Best for playful touch surfaces where movement should spread naturally.",
    traits: ["Wave reaction", "Soft spatial feedback", "Retail-friendly"]
  },
  {
    id: "glow",
    name: "Glow Guidance",
    summary: "A cleaner mode for directing attention toward high-value content zones.",
    traits: ["Focus lighting", "Calm motion", "Premium lobby feel"]
  },
  {
    id: "pulse",
    name: "Pulse Mode",
    summary: "Useful when you want ambient motion that keeps the screen feeling alive.",
    traits: ["Timed breathing", "Idle animation", "Event signage mood"]
  }
];
