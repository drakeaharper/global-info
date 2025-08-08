# Global Info - Interactive World Learning App

An interactive world map application built with Bun, TypeScript, React, and Tailwind CSS that helps you learn about countries and their populations.

## Features

- 🗺️ Interactive SVG world map with hover effects
- 🌍 Tab navigation for World view and individual continents
- 📊 Country population tooltips with formatted numbers
- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Fast development with Vite and Bun

## Getting Started

1. Install dependencies:
   ```bash
   bun install
   ```

2. Start the development server:
   ```bash
   bun run dev
   ```

3. Open http://localhost:3001 in your browser

## Tech Stack

- **Runtime**: Bun
- **Language**: TypeScript
- **Framework**: React 19
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Architecture**: Functional programming approach

## Project Structure

```
src/
├── components/          # React components
│   ├── TabNavigation.tsx
│   ├── WorldMap.tsx
│   └── Tooltip.tsx
├── data/               # Country data and utilities
│   └── countries.ts
├── types/              # TypeScript type definitions
│   └── country.ts
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

This project was created using `bun init` and configured with modern web development tools.