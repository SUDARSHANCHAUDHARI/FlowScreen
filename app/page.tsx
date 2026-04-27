"use client";

import { useMemo, useState } from "react";
import { DisplayModePicker } from "../components/DisplayModePicker";
import { ScenePicker } from "../components/ScenePicker";
import { ScreenPreview } from "../components/ScreenPreview";
import { displayModes, screenScenes } from "../lib/starter-data";

export default function HomePage() {
  const [activeMode, setActiveMode] = useState(displayModes[0].id);
  const [activeScene, setActiveScene] = useState(screenScenes[0].id);
  const [autoplay, setAutoplay] = useState(true);

  const selectedMode = useMemo(
    () => displayModes.find((mode) => mode.id === activeMode) ?? displayModes[0],
    [activeMode]
  );

  const selectedScene = useMemo(
    () => screenScenes.find((scene) => scene.id === activeScene) ?? screenScenes[0],
    [activeScene]
  );

  return (
    <main className="shell">
      <section className="heroBlock">
        <section className="hero">
          <p className="eyebrow">Living Interfaces</p>
          <h1>FlowScreen</h1>
          <p className="lede">
            A browser-first prototype for reactive signage. Shape how a display
            behaves, pick a venue-specific scene, and preview the emotional tone
            before adding hardware and deployment layers.
          </p>
        </section>

        <aside className="heroCard">
          <span className="label">Control intent</span>
          <h2>{selectedMode.name}</h2>
          <p>{selectedMode.summary}</p>
        </aside>
      </section>

      <DisplayModePicker
        activeMode={activeMode}
        modes={displayModes}
        onSelect={setActiveMode}
      />

      <ScenePicker
        activeScene={activeScene}
        scenes={screenScenes}
        onSelect={setActiveScene}
      />

      <section className="layout">
        <ScreenPreview mode={selectedMode} scene={selectedScene} autoplay={autoplay} />

        <aside className="inspector">
          <span className="label">Program Controls</span>
          <h2>{selectedScene.name}</h2>
          <p>{selectedScene.subheadline}</p>

          <div className="controlStack">
            <div className="controlCard">
              <span>Playback</span>
              <strong>{autoplay ? "Autoplay enabled" : "Manual pacing"}</strong>
              <button type="button" onClick={() => setAutoplay((value) => !value)}>
                Toggle autoplay
              </button>
            </div>

            <div className="controlCard">
              <span>Venue fit</span>
              <strong>{selectedScene.venue}</strong>
              <ul>
                {selectedMode.traits.map((trait) => (
                  <li key={trait}>{trait}</li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
