export type DisplayMode = {
  id: string;
  name: string;
  summary: string;
  traits: string[];
  tempo: string;
};

export type ScreenScene = {
  id: string;
  name: string;
  venue: string;
  headline: string;
  subheadline: string;
  accent: string;
  chips: string[];
  footerLabel: string;
};

export const displayModes: DisplayMode[] = [
  {
    id: "ripple",
    name: "Ripple Response",
    summary: "Best for playful touch surfaces where movement should spread naturally.",
    traits: ["Wave reaction", "Soft spatial feedback", "Retail-friendly"],
    tempo: "Reactive"
  },
  {
    id: "glow",
    name: "Glow Guidance",
    summary: "A cleaner mode for directing attention toward high-value content zones.",
    traits: ["Focus lighting", "Calm motion", "Premium lobby feel"],
    tempo: "Guided"
  },
  {
    id: "pulse",
    name: "Pulse Mode",
    summary: "Useful when you want ambient motion that keeps the screen feeling alive.",
    traits: ["Timed breathing", "Idle animation", "Event signage mood"],
    tempo: "Ambient"
  }
];

export const screenScenes: ScreenScene[] = [
  {
    id: "retail-launch",
    name: "Retail Launch Wall",
    venue: "Flagship retail",
    headline: "Summer Drop Live",
    subheadline: "Touch the display to reveal product stories, motion cues, and offer layers.",
    accent: "Offer spotlight",
    chips: ["Interactive", "Promo-led", "High dwell time"],
    footerLabel: "Now showing product launch"
  },
  {
    id: "hotel-lobby",
    name: "Hotel Lobby Screen",
    venue: "Lobby experience",
    headline: "Tonight in the Atrium",
    subheadline: "Guide guests toward events, dining, and concierge moments with a quieter mood.",
    accent: "Ambient guidance",
    chips: ["Calm", "Wayfinding", "Premium"],
    footerLabel: "Now showing concierge programming"
  },
  {
    id: "menu-board",
    name: "Interactive Menu Board",
    venue: "Quick service food",
    headline: "Fresh Bowls in 4 Minutes",
    subheadline: "Highlight best sellers and let category panels react when people approach.",
    accent: "Fast decision support",
    chips: ["Menu", "Fast lane", "Upsell-ready"],
    footerLabel: "Now showing lunch service"
  }
];
