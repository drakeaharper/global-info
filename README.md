# Global Info - Interactive World Learning App

An interactive world map application built with Bun, TypeScript, React, and Tailwind CSS that helps you learn about countries and their populations.

## 🚀 [Live Demo](https://drakeaharper.github.io/global-info/)

## Features

- 🗺️ Interactive SVG world map with realistic country shapes using Natural Earth data
- 🌍 Tab navigation for World view and individual continents (including Middle East region)
- 📊 Country population tooltips with formatted numbers (195+ countries)
- 🏝️ Missing territories support (Greenland, Puerto Rico, French Guiana, etc.)
- 🔍 Continent-specific zoom views for detailed exploration
- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Fast development with Vite and Bun
- 🚀 Automated deployment to GitHub Pages

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
- **Styling**: Tailwind CSS v3
- **Build Tool**: Vite
- **Maps**: react-simple-maps with Natural Earth data
- **Deployment**: GitHub Pages with GitHub Actions
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