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
