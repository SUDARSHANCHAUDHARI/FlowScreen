"use client";

import { useMemo, useState } from "react";
import { DisplayModePicker } from "../components/DisplayModePicker";
import { ScreenPreview } from "../components/ScreenPreview";
import { displayModes } from "../lib/starter-data";

export default function HomePage() {
  const [activeMode, setActiveMode] = useState(displayModes[0].id);
  const selected = useMemo(
    () => displayModes.find((mode) => mode.id === activeMode) ?? displayModes[0],
    [activeMode]
  );

  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Living Interfaces</p>
        <h1>FlowScreen</h1>
        <p className="lede">
          A browser-first starter for interactive signage concepts. The goal is to
          validate how content reacts before we wire up deployment and hardware.
        </p>
      </section>

      <DisplayModePicker activeMode={activeMode} onSelect={setActiveMode} />

      <section className="layout">
        <ScreenPreview mode={selected} />

        <aside className="inspector">
          <span className="label">Mode Summary</span>
          <h2>{selected.name}</h2>
          <p>{selected.summary}</p>
          <ul>
            {selected.traits.map((trait) => (
              <li key={trait}>{trait}</li>
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}
