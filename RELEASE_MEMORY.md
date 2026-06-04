# Release Memory: FlowScreen
_Last updated: 2026-06-04_

## Current Status

FlowScreen is a static Next.js prototype for reactive digital signage behavior. It has mode and scene controls but does not yet include real media upload, scheduling, or screen operations.

Known verification: `pnpm build` and `pnpm exec tsc --noEmit` passed on 2026-06-04. The latest `pnpm build` also confirmed static output with `out/index.html` and `out/_headers`.

## Release Target

Public demo release.

## Success Criteria

- Production build passes.
- Mode picker, scene picker, and preview behavior work.
- Demo copy is clear that this is a prototype.
- Mobile layout is acceptable.
- Live URL is added after deployment.

## Ordered Plan

1. Run `pnpm build`.
2. Remove generated `out/` from git consideration unless intentionally deploying static output.
3. Verify mode switching and scene preview behavior.
4. Add a small deployment note or README update if needed.
5. Deploy as a Cloudflare Pages demo.
6. Add live URL to README.

## Risks

- Current product is conceptual; real production needs media upload, scheduling, and screen-management features.
- Generated `out/` folder exists locally from prior build checks.

## First Task

Deploy demo after a quick browser smoke check.

## Latest Prep Notes

- Added README release-scope note clarifying demo status.
- Added Cloudflare Pages setup: `.nvmrc`, README deployment values, and static `_headers`.
- Added `out` to `.gitignore`.
- Standalone `next lint` is not configured and prompts interactively; use build/typecheck as current release gate until ESLint is migrated.
- Polished README with public-demo status, technical decisions, deployment settings, verification, known limits, and author section.
