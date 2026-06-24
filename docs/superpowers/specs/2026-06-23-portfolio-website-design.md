# Personal Portfolio Website — Design Spec

**Date:** 2026-06-23
**Owner:** 邹贤杰 (Zou Xianjie)
**Stack:** React 19 + Vite + CSS (no UI library)
**Target:** PC desktop, max-width 1700px

---

## Brand Identity
- **Persona:** Visual Designer / AI Designer / Brand Designer
- **Tone:** Premium, restrained, technology-forward, not template-like
- **Palette:** `#000000` background, `#FAFAFA` text, gray-scale layers, accent `#3B82F6` used sparingly
- **Typography:** System default sans-serif stack (`-apple-system, "Helvetica Neue", sans-serif`). No external fonts.
- **Interaction:** Ghost buttons (border + hover fill), subtle hover lift on cards, blue glow on focus

---

## Page Structure (5 sections, single-page scroll)

### 1. Hero — Fullscreen 100vh
- **Background:** Dark abstract static image with CSS Ken Burns slow zoom (≈20s cycle). Semi-transparent black overlay for text legibility.
- **Navbar:** Fixed top, transparent initially → dark background on scroll. Logo "ZXJ" + anchor links (项目/经历/优势/联系).
- **Content:** Large name "邹贤杰", subtitle "AI 应用开发 / 视觉设计 / 品牌设计", CTA button bottom-right (ghost style).

### 2. About / Experience — Full-height
- **Layout:** Two-column: left = big name + short bio line; right = 3 data anchors (项目数/技术方向/教育) with large numerals + blue accent.
- **Below:** Contact info row: phone / email / location with SVG icons.
- **Education:** Minimal timeline entry for university.

### 3. Featured Projects — Three large cards
- **Projects:** OfficeTool, PersonalChief, NoteExam
- **Card:** Dark gradient placeholder image + project initial letter, project name, tech stack tags, short description.
- **Material:** Glass-like dark gray border, hover: subtle lift + blue glow on border.
- **Layout:** Horizontal 3-column within 1700px container.

### 4. Strengths — Card grid
- **Items:** Full-stack Dev / AI Agent / RAG Systems / Multimodal / System Design / Docker Orchestration (extracted from resume)
- **Card:** SVG icon + title + one-line description.
- **Layout:** 3-column grid, generous spacing.

### 5. Contact Footer — Fullscreen 100vh closer
- **Background:** Solid black or subtle gradient.
- **Content:** Large heading "保持联系", centered large email + phone, blog link below.
- **Tone:** Calm closing statement.

---

## Technical Decisions
- **No external images:** All visuals generated via CSS gradients, SVG inline, or geometric shapes. No CDN dependencies.
- **No UI library:** Pure CSS with CSS custom properties for theming.
- **Smooth scroll:** CSS `scroll-behavior: smooth` + Intersection Observer for scroll-triggered animations.
- **Ken Burns:** CSS `@keyframes scale` on background container, no JS.
- **Glass cards:** `backdrop-filter: blur()` + semi-transparent borders.

## File Structure
```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css               # Global styles + CSS custom properties
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── StrengthsSection.jsx
│   │   └── ContactSection.jsx
│   └── assets/               # SVG icons inline
```

## What This Version Does NOT Include
- Video background (placeholder image used)
- Responsive mobile layout (PC only)
- Real project screenshots
- Animation library (pure CSS only)
