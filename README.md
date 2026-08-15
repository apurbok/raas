# RASS Associates Website

Modern, high-performance corporate website for RASS Associates Ltd — built with Next.js 15 (static export), TypeScript, and Tailwind CSS v4.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server |
| `npm run build` | Build static site to `out/` folder |
| `npm run start` | Serve production build (after build) |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
  app/           → Pages (App Router)
  components/    → Reusable UI components
  content/       → Company data (developer-maintained)
  lib/           → Utilities
```

## Content Updates

All content lives in `src/content/` as TypeScript files. Edit these directly to update text, services, projects, and team members — no CMS required.

## Deployment

The site is configured for static export (`output: 'export'`). After `npm run build`, deploy the `out/` folder to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages) at zero cost.

## Contact Form

Replace `YOUR_WEB3FORMS_KEY` in `src/app/contact/page.tsx` with a free key from [web3forms.com](https://web3forms.com), or wire up another form provider.

## Brand Assets

When logo and project photos are available, add them to `public/images/` and update content references.
