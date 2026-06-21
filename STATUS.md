# Status — FlowScreen

**Last updated:** 2026-06-21
**Maturity:** 🟠 `status-prototype` (single-page demo)

## What's done

- Single-page Next.js 15 reactive-signage UI
- Three display modes: Ripple Response, Glow Guidance, Pulse Mode (with traits and tempo metadata)
- Five venue scenes: Retail Launch Wall, etc. — each with venue, headline, subheadline, accent color, chips, footer
- Mode picker + scene picker UI
- Screen preview with mode + scene composition
- Autoplay toggle in inspector
- Extracted pure helper `lib/selectById.ts` (used by both useMemo lookups in the page — behavior-preserving refactor)
- ESLint configured, 0 errors / 0 warnings
- 6 Vitest tests: 5 for `selectById` (match, missing, empty, empty id, defensive first-of-duplicates) + 1 regression guard on `displayModes` / `screenScenes` having unique IDs
- Build, lint, typecheck, tests all green

## What's left

This is a **prototype, not a product.** Real product would need:

- **Real screen sync** — currently a single browser tab showing canned scenes; no hardware integration, no display protocol (HDMI matrix, signage CMS, etc.)
- **Media library** — scenes are hardcoded in `lib/starter-data.ts`
- **Schedule editor** — no time-of-day or event-driven scene switching
- **Multi-screen support** — assumes one screen
- **Persistence** — no settings storage
- **Product spec** — does this target retail, corporate signage, hospitality? Which screens / players / CMS does it integrate with?

## Quality gates

| Gate | Status |
|---|---|
| Build | ✅ |
| Lint | ✅ 0 errors |
| Typecheck | ✅ |
| Tests | ✅ 6 / 1 suite |

## Deployment

Not yet deployed. Self-hosted on your own domain when ready.

## File-by-file checklist

### App shell
- [x] `app/layout.tsx` — root layout
- [x] `app/page.tsx` — picker UI (uses extracted `selectById` helper)
- [x] `app/globals.css` — base styles

### Components
- [x] `components/DisplayModePicker.tsx` — mode chips
- [x] `components/ScenePicker.tsx` — scene tiles
- [x] `components/ScreenPreview.tsx` — composed preview

### Lib
- [x] `lib/starter-data.ts` — 3 display modes + 5 scenes (typed)
- [x] `lib/selectById.ts` — pure find-by-id helper (extracted)

### Tests
- [x] `lib/selectById.test.ts` — 6 tests (5 selectById + 1 starter-data uniqueness guard)

### Quality + scaffolding
- [x] ESLint configured (0 errors, 0 warnings)
- [x] `typecheck` + `test` scripts
- [x] Build + lint + typecheck green

### Not done (product gaps — need spec)
- [ ] Real screen sync (no hardware integration, no display protocol)
- [ ] Media library (scenes are hardcoded in `lib/starter-data.ts`)
- [ ] Schedule editor (no time-of-day or event-driven scene switching)
- [ ] Multi-screen support (assumes one screen)
- [ ] Persistence (no settings storage)
- [ ] Product spec answering: retail / corporate / hospitality? Which signage CMS targets?
