import { describe, it, expect } from "vitest";
import { selectById } from "./selectById";

type Item = { id: string; name: string };

const items: Item[] = [
  { id: "a", name: "Alpha" },
  { id: "b", name: "Beta" },
  { id: "c", name: "Gamma" },
];

const fallback: Item = { id: "fallback", name: "Fallback" };

describe("selectById", () => {
  it("returns the matching item", () => {
    expect(selectById(items, "b", fallback)).toEqual(items[1]);
  });

  it("returns the fallback when no item matches", () => {
    expect(selectById(items, "missing", fallback)).toBe(fallback);
  });

  it("returns the fallback for an empty list", () => {
    expect(selectById([], "a", fallback)).toBe(fallback);
  });

  it("returns the fallback for an empty id when no item has an empty id", () => {
    expect(selectById(items, "", fallback)).toBe(fallback);
  });

  it("returns the first match when multiple items share an id (defensive)", () => {
    const dups: Item[] = [
      { id: "x", name: "First" },
      { id: "x", name: "Second" },
    ];
    expect(selectById(dups, "x", fallback).name).toBe("First");
  });
});

describe("starter-data integrity", () => {
  it("displayModes and screenScenes have unique IDs (regression guard)", async () => {
    const { displayModes, screenScenes } = await import("./starter-data");
    const modeIds = displayModes.map((m) => m.id);
    const sceneIds = screenScenes.map((s) => s.id);
    expect(new Set(modeIds).size).toBe(modeIds.length);
    expect(new Set(sceneIds).size).toBe(sceneIds.length);
  });
});
