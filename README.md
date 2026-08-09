# AutoGloss

Premium landing page for **AutoGloss** — a mobile deep-cleaning and detailing service for vehicle interiors, upholstered furniture, and ozone odor treatment, based in Smederevo, Serbia.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, and React Three Fiber.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Scripts

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Content

Site copy and structured data (services, before/after pairs, FAQ, etc.) live in [`src/lib/site.ts`](src/lib/site.ts).

## Deployment

Configured for zero-config deployment on [Vercel](https://vercel.com/new). Set `NEXT_PUBLIC_SITE_URL` to the production domain once one is assigned — it feeds the canonical URL, Open Graph tags, and JSON-LD structured data.
