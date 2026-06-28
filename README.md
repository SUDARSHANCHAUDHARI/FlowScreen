# FlowScreen

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](package.json)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB.svg)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Reactive digital signage prototype for exploring mode-based screen behavior, venue scenes, and browser-first display previews.

> **Status:** Public demo-ready · static build verified · real production needs media upload, scheduling, and screen operations

## Why This Exists

Digital signage often feels static. FlowScreen explores how screens could respond to environment, mode, and playback intent before building the heavier media-management backend.

## Key Technical Decisions

**Static Next.js output is enough for the first demo.** The current app is an interaction prototype, so it can ship without API routes or persistence.

**Modes and scenes model the product direction.** They communicate signage behavior without requiring real screen hardware.

**Cloudflare Pages is the first deployment target.** The repo already has static output, `_headers`, `.nvmrc`, and ignored `out/`.

## Features

- signage behavior mode picker
- venue scene preview
- playback intent toggle
- responsive browser preview
- Cloudflare Pages demo setup

## Run Locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Deployment

| Setting | Value |
|---|---|
| Release scope | Public demo |
| Framework preset | `Next.js` |
| Build command | `pnpm build` |
| Build output directory | `out` |
| Node version | `20.19.6` |

## Verification

```bash
pnpm build
pnpm exec tsc --noEmit
```

## Known Limits

- No real media upload yet.
- No scheduling or screen fleet operations yet.
- No persistence or production device integration yet.

## Author

Built by **Sudarshan Chaudhari** — SudarshanTechLabs.
