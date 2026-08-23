# FlowScreen

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](package.json)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB.svg)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Reactive digital signage prototype for exploring mode-based screen behavior, venue scenes, and browser-first display previews.

> **Status:** Public demo-ready · static build verified · real production needs media upload, scheduling, and screen operations

## Table of Contents

- [Why This Exists](#why-this-exists)
- [Key Technical Decisions](#key-technical-decisions)
- [Features](#features)
- [Run Locally](#run-locally)
- [Deployment](#deployment)
- [Verification](#verification)
- [Known Limits](#known-limits)
- [About](#about)

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

---

## About

I'm Sudarshan Chaudhari, a Senior Quality Engineer, Test Automation specialist, and AI systems builder based in Bangkok, Thailand.

I have 13+ years of experience in software quality engineering, working across SaaS, fintech, gaming, web, mobile, cloud, and digital signage platforms. My background combines hands-on test automation with QA leadership, test strategy, CI/CD, release quality, production investigation, and cross-platform validation.

Alongside my professional QA career, I run [SudarshanTechLabs](https://sudarshantechlabs.com/), my independent engineering and product lab where I design, build, test, and ship software across Android, web, AI, cybersecurity, developer tooling, and cross-platform applications.

### What I work on

- ⚙️ **Quality Engineering & Test Automation** — Playwright, Selenium, Cypress, Appium, API testing, automation frameworks, end-to-end testing, CI/CD, release gates, GitHub Actions, risk-based testing, and production validation
- 🤖 **AI Systems & Automation** — AI agents, multi-agent orchestration, MCP servers, AI-assisted QA, prompt tooling, developer workflows, automation systems, and Claude Code plugins
- 📱 **Mobile & Cross-Platform Applications** — Android applications built with Kotlin and Jetpack Compose, Google Play releases, automated build and publishing pipelines, and cross-platform development spanning iOS, web, Windows, and macOS
- 🌐 **Web Applications & Platforms** — Full-stack applications using Next.js, TypeScript, Firebase, Cloudflare, REST APIs, and modern web infrastructure
- 🛠️ **Developer Tooling & CLI Engineering** — Rust, Python, TypeScript, CLI utilities, multi-repository tooling, build automation, release tooling, and engineering productivity systems
- 🛡️ **Cybersecurity & Observability** — Threat detection, log analysis, security auditing, vulnerability assessment, monitoring, and security-focused developer tools
- 📺 **Digital Signage & Device Platforms** — Content validation, playback testing, device compatibility, production investigation, monitoring, and QA across diverse hardware and operating-system environments

My work sits at the intersection of quality engineering, automation, AI, and software development. I approach products with a QA mindset from the beginning: understanding failure modes, designing for testability, automating repetitive work, and building release confidence into the engineering process.

Through SudarshanTechLabs, I also build products and tools from idea to production, covering architecture, development, testing, CI/CD, release automation, monitoring, and ongoing maintenance.

🌐 [sudarshantechlabs.com](https://sudarshantechlabs.com/) · 💼 [LinkedIn](https://linkedin.com/in/sudarshan-chaudhari) · 🐙 [GitHub](https://github.com/SUDARSHANCHAUDHARI) · ✉️ [sunny.sudarshan@gmail.com](mailto:sunny.sudarshan@gmail.com)
