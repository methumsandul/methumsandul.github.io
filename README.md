# Methum Sandul Portfolio

Single-page portfolio focused on cybersecurity, networking, Linux, and project delivery.

## Stack

- React 18
- Vite 5
- Tailwind CSS
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

If PowerShell blocks npm scripts on your machine, run:

```bash
npm.cmd run dev
npm.cmd run build
```

## Build and preview

```bash
npm run build
npm run preview
```

## Content map

- Hero: src/components/Hero.jsx
- About: src/components/About.jsx
- Skills: src/components/Skills.jsx
- Projects: src/components/Projects.jsx
- Education: src/components/Education.jsx
- Certifications: src/components/Certifications.jsx
- Contact: src/components/Contact.jsx
- Navigation: src/components/Navbar.jsx
- Global styles and color variables: src/index.css

## Assets expected in public

- cv.pdf
- profile-photo.jpg
- images/projects/*
- images/education/*

The UI includes graceful fallbacks for missing project screenshots, education logos, and profile photo.

## SEO and social metadata

- Core metadata is in index.html.
- Open Graph and Twitter tags are included.
- Canonical URL and og:url are set to the current page URL at runtime.

## Deployment notes

- vite.config.js uses base: './' for flexible static hosting paths.
- You can deploy the dist output to Vercel, Netlify, GitHub Pages, or any static host.
