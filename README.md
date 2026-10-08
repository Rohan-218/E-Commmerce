# Fluke (E-Com) — Static UI

This `static-ui` branch contains the static frontend for the Fluke e-commerce project. It includes the React user interface and its static assets and is intended to be deployed as a static website.

There is no backend, API, or database in this branch. The frontend does not provide server-side authentication, order processing, or other backend services; UI flows that would require those services are not connected to a backend.

## Tech stack

- React
- Vite
- JavaScript
- CSS and static assets
- npm

## Project structure

```text
frontend/
├── public/       # Public static files
├── src/
│   ├── assets/   # Images and other frontend assets
│   ├── components/
│   ├── context/
│   └── pages/
├── index.html
├── package.json
└── vite.config.js
```

## Run locally

Requirements: Node.js 18 or later and npm 9 or later.

```bash
cd frontend
npm install
npm run dev
```

Vite prints the local URL when the development server starts (usually http://localhost:5173).

## Available scripts

Run these from the `frontend` directory:

```bash
npm run dev      # Start the development server
npm run build    # Build the static site into frontend/dist
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Deploy

Build the site with `npm run build` from `frontend`, then deploy the generated `frontend/dist` directory to a static hosting provider such as Netlify, Vercel, or GitHub Pages. No backend deployment or API environment variables are required for this branch.

## Live site

Live site: [https://e-commerce-45b1.onrender.com](https://e-commerce-45b1.onrender.com)
