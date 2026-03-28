# Code&Craft - Digital Studio & Lab

Code&Craft is a landing page for a digital studio that combines technical precision with creative vision. The site showcases services like landing pages, web development, publicity scripts, campaigns, and product development, along with a team section and a contact form.

## Tech Stack

- **[Astro](https://astro.build/)** v4 - Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** v3 - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Google Fonts](https://fonts.google.com/)** - Manrope (headlines) & Inter (body)
- **[Material Symbols](https://fonts.google.com/icons)** - Icon set

## Project Structure

```
estudio_virtual_landingpage/
├── public/
│   ├── team/
│   │   ├── aldo-herrera.jpg
│   │   └── pamela-orozco.jpg
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── organisms/
│   │       ├── Navbar.astro        # Fixed navbar with dark mode toggle & mobile menu
│   │       ├── Hero.astro          # Hero section with animated background blobs
│   │       ├── Services.astro      # Service cards grid (5 services)
│   │       ├── About.astro         # Philosophy section, stats & team members
│   │       ├── Contact.astro       # Contact form
│   │       └── Footer.astro        # Footer with colorful divider
│   ├── layouts/
│   │   └── Layout.astro            # Base HTML layout with scroll reveal logic
│   ├── pages/
│   │   └── index.astro             # Main page composing all sections
│   ├── styles/
│   │   └── global.css              # Global styles, animations & utilities
│   └── env.d.ts
├── astro.config.mjs
├── tailwind.config.mjs             # Custom colors, fonts & theme config
├── tsconfig.json
├── package.json
└── package-lock.json
```

## Features

- **Dark / Light mode** with localStorage persistence
- **Scroll reveal animations** (fade up, slide left/right, scale)
- **Floating & pulsing animations** on decorative elements
- **Colorful minimalist design** with 8+ accent colors
- **Responsive layout** with mobile hamburger menu
- **Team section** with real photos
- **Contact form** with styled inputs

## Getting Started

### Prerequisites

- Node.js >= 20.0.0

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens a local dev server at `http://localhost:4321`.

### Build

```bash
npm run build
```

Outputs the production site to `./dist/`.

### Preview

```bash
npm run preview
```

Previews the production build locally before deploying.
