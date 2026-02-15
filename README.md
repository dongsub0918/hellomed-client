# HELLOMED Web App (client-dev)

Public-facing website and admin dashboard for HELLOMED urgent care in Ann Arbor. Built with Next.js App Router and shared UI components, with pages for services, appointments, check-in, and clinic management.

## Tech Stack

- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS + CSS Modules, Framer Motion
- shadcn/ui + Radix UI, Lucide icons
- NextAuth (admin auth), Socket.io (real-time), Sentry

## Key Routes

- Public: `/`, `/make-appointment`, `/check-in`, `/urgent-care/*`, `/primary-care/*`, `/immigration-medical-exam`, `/contact`
- Admin: `/admin/*` (protected)

## Project Structure

- `src/app/(public)` public pages and layouts
- `src/app/admin` admin dashboard
- `src/app/api` API routes (NextAuth)
- `src/ui` shared UI components
- `src/apis` client API wrappers
- `src/lib` hooks, types, and content

## Scripts

```bash
npm run dev    # start dev server
npm run build  # production build
npm run start  # run production server
npm run lint   # lint
```

## Notes

- Environment variables are required for auth/third-party services.
- Images and structured data are optimized for SEO.
