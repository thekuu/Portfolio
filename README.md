# Zekaryas Geremew — Software Engineer

A refined, modern, and high-performance personal portfolio website built to showcase software engineering principles, robust component architecture, and pixel-perfect design.

## Tech Stack

- **Framework:** React 18 with Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (`motion/react`)
- **Icons:** Lucide React
- **Routing:** React Router v6

## Key Features

- **Performance First:** Engineered for speed, featuring optimized chunking and layout stability.
- **Flawless Theme Engine:** Custom light/dark mode implementation with an inline `<head>` script to completely prevent the Flash of Unstyled Content (FOUC).
- **Aggressive Browser Compatibility:** Includes deep DOM `<meta>` tag overrides (`color-scheme: only light`) specifically engineered to prevent Samsung Internet and Android heuristic engines from forcefully breaking custom light themes.
- **Fluid Animations:** Smooth page transitions, exit animations, and complex layout orchestrations powered by Framer Motion.
- **Interactive UI Components:** Includes dynamic "under the hood" visualizers, animated SVG performance metric rings, and custom-styled code editor blocks.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository (if applicable) or navigate to the project directory.

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Core Project Structure

- `/src/components` - Reusable UI components including the application Layout, ThemeToggle, and page-specific widgets (like `BuiltNotJustDesigned`).
- `/src/pages` - Main route views (`Home`, `About`, `Stack`, `Notes`, `Contact`, `ProjectDetail`).
- `/index.html` - Main HTML entry point containing critical FOUC-prevention scripts and CSP headers.
- `/src/index.css` - Global Tailwind CSS configuration, custom noise overlays, and `color-scheme` definitions.

## License

Designed and developed by Zekaryas Geremew. All rights reserved.
