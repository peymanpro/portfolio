# Professional Portfolio — Peyman Salimi

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A modular, bilingual, and theme‑aware portfolio showcasing real‑world enterprise projects, software architectures, and engineering decisions.

---

## Overview

This portfolio is a dynamic, single‑page application built to present a curated collection of enterprise‑level projects, architectural diagrams, and technical solutions. It is designed with two primary goals:

- **For technical recruiters and CTOs** — to quickly understand the depth of experience in software architecture, system design, and full‑stack development.
- **For peers and collaborators** — to see the thought process behind architectural decisions and engineering practices.

The project itself demonstrates modular frontend architecture, bilingual support (Persian/English), dark/light theming, and an interactive gallery — all implemented with vanilla JavaScript and SCSS, without framework dependencies.

---

## Key Features

| Feature | Description |
|---------|-------------|
| 🌐 **Bilingual Interface** | Seamless switching between Persian (default) and English with automatic RTL/LTR direction. |
| 🌓 **Dark / Light Themes** | Persistent theme preference stored in `localStorage`. |
| 🖼️ **Interactive Gallery** | Horizontal scrolling gallery with navigation buttons, wheel‑scroll support, and a full‑screen lightbox. |
| 📄 **Expandable Descriptions** | "Show more / Show less" toggle for project details, with auto‑hide when text is short. |
| 📱 **Responsive Design** | Optimised for desktop, tablet, and mobile devices. |
| 🧩 **Modular Architecture** | Clear separation of data, translations, state, and rendering layers using ES Modules. |

---

## Architecture

The application follows a component‑based modular architecture, with each layer responsible for a distinct concern:
┌─────────────────────────────────────────────────┐
│ index.html │
│ (Single entry point) │
└─────────────────────┬───────────────────────────┘
│
┌─────────────────────▼───────────────────────────┐
│ app.js │
│ Orchestrates rendering, controls, and │
│ subscribes to state changes │
└─────────────────────┬───────────────────────────┘
│
┌─────────────────────▼───────────────────────────┐
│ Modules │
├─────────────────────────────────────────────────┤
│ state.js │ Centralised store for theme & │
│ │ language with localStorage │
├──────────────┼──────────────────────────────────┤
│ translations │ All UI strings for fa/en │
├──────────────┼──────────────────────────────────┤
│ Renderer.js │ Dynamic DOM generation for │
│ │ hero, sections, technologies, │
│ │ galleries, and expandable text │
├──────────────┼──────────────────────────────────┤
│ Gallery.js │ Gallery component with scroll │
│ │ buttons, wheel support, and │
│ │ lightbox integration │
├──────────────┼──────────────────────────────────┤
│ Lightbox.js │ Full‑screen image viewer with │
│ │ keyboard (Escape) support │
└──────────────┴──────────────────────────────────┘
│
┌─────────────────────▼───────────────────────────┐
│ Data Layer │
│ projects.js Static project data: │
│ technologies & image items │
└─────────────────────────────────────────────────┘


**Why this architecture?**  
- **Separation of concerns** — each file has a single responsibility.
- **Maintainability** — adding a new project or changing translations requires editing only one file.
- **Testability** — pure functions and isolated modules.
- **No framework lock‑in** — the portfolio is lightweight, fast, and demonstrates core JavaScript proficiency.

---

## Technology Stack

| Category | Technologies |
|----------|--------------|
| **Core** | Vanilla JavaScript (ES Modules), HTML5, SCSS |
| **Icons** | Font Awesome 6 (CDN) |
| **Styling** | SCSS with variables, nesting, and theming |
| **State** | Custom centralised store with localStorage |
| **Build** | Sass compiler (for SCSS → CSS) |
| **Version Control** | Git & GitHub |

---

## Project Structure
.
├── index.html # Entry point, loads Font Awesome CDN and app.js
├── style.scss # Source styles — includes variables for themes,
│ # RTL support, gallery, and responsive design
├── style.css # Compiled output (generated from SCSS)
├── src/
│ ├── app.js # Initialisation, control buttons, render orchestration
│ ├── modules/
│ │ ├── state.js # Centralised state: theme, language, listeners
│ │ ├── translations.js # All UI strings in fa/en (hero, sections, UI labels)
│ │ ├── Renderer.js # DOM renderers: hero, sections, expandable descriptions,
│ │ │ # technologies, galleries
│ │ ├── Gallery.js # Gallery creation with scroll, buttons, and lightbox
│ │ └── Lightbox.js # Full‑screen lightbox with click and Escape support
│ └── data/
│ └── projects.js # Static project data: technologies and image items
└── images/ # Project screenshots and architecture diagrams


---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- [Sass](https://sass-lang.com/install) (to compile SCSS)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo


   # Install Sass globally (if not installed)
npm install -g sass

# Compile and watch for changes
sass style.scss style.css --watch

Key Design Decisions
Why Vanilla JavaScript?
No framework overhead — the portfolio is lightweight, fast, and demonstrates a solid understanding of core JavaScript, DOM manipulation, and modular design without hiding complexity behind a framework.

Why a Centralised State Store?
To maintain consistency across language and theme changes without tightly coupling components. The store acts as a single source of truth and persists preferences in localStorage.

Why SCSS with Variables?
To enable:

Dark/light theming via CSS custom properties and data-theme attribute.

RTL/LTR support using the dir attribute and SCSS nesting.

Maintainable styles with variables for colors, spacing, shadows, and transitions.

Why Expandable Descriptions?
To keep the UI clean while allowing users to read full project details when interested. The toggle auto‑hides when the text is short — a subtle UX touch.

Why a Custom Gallery Instead of a Library?
To avoid dependency bloat and to demonstrate proficiency in building interactive components (scroll, navigation, keyboard support, lightbox) from scratch.

Learning Outcomes / Engineering Highlights
This project reflects the following professional competencies:

Modular Frontend Architecture — Separation of data, state, translation, and rendering layers.

State Management — Centralised store with change listeners and persistence.

Bilingual / RTL UX — Full Persian/English support with automatic direction switching.

Theming — Dark/light modes with smooth transitions.

Interactive Components — Gallery with scrolling, buttons, wheel support, and lightbox.

Accessibility — Keyboard navigation (Enter/Space for lightbox, Escape to close).

Responsive Design — Works seamlessly across devices.

SCSS Mastery — Variables, nesting, theming, and responsive breakpoints.

Future Improvements
Markdown support for project descriptions (to allow richer formatting).

Search / filter projects by technology or domain.

Lazy loading for gallery images beyond the initial viewport.

Unit tests for critical modules (state, renderers).

CI/CD pipeline to automate SCSS compilation and deployment to GitHub Pages.

License
This project is licensed under the MIT License — see the LICENSE file for details.

Author
Peyman Salimi
Enterprise Software Architect & Full‑Stack Developer



