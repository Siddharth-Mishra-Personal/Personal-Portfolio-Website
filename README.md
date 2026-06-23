# Siddharth Mishra — Portfolio

Built with **Next.js 14** (App Router) + **Tailwind CSS** + **TypeScript**.  
Deployed on **Vercel** (free tier).

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build
```

## Project structure

```
app/
  layout.tsx              ← Root layout, fonts, nav, footer
  page.tsx                ← Home / landing page
  globals.css             ← Design tokens, animations
  about/page.tsx          ← About, skills, education
  experience/page.tsx     ← Work experience + leadership
  projects/page.tsx       ← Technical projects
  case-competitions/      ← Case competition wins
  contact/page.tsx        ← Contact form + links
  api/contact/route.ts    ← Contact form API (wire up Resend)
components/
  Nav.tsx                 ← Responsive navigation
  ContactForm.tsx         ← Client-side contact form
```

## Deployment to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard:
# RESEND_API_KEY = re_xxxxxxxxxxxx  (if using Resend for contact form)
```

## Adding your resume PDF

Place your resume at:
```
public/resume.pdf
```

The nav "Resume ↗" button and the contact page download link will pick it up automatically.

## Wiring up the contact form

### Option A — Resend (recommended, free up to 100 emails/day)
1. Sign up at resend.com and verify your domain
2. `npm install resend`
3. Uncomment the Resend block in `app/api/contact/route.ts`
4. Add `RESEND_API_KEY` to Vercel environment variables

### Option B — Formspree (zero-code)
1. Sign up at formspree.io
2. Create a form and copy your endpoint URL
3. In `components/ContactForm.tsx`, replace the `fetch("/api/contact", ...)` call with:
   ```ts
   fetch("https://formspree.io/f/YOUR_ID", { method: "POST", ... })
   ```

## Customisation checklist

- [ ] Replace `public/resume.pdf` with your actual resume
- [ ] Update LinkedIn and GitHub URLs in `app/layout.tsx` and `components/Nav.tsx`
- [ ] Update email in `app/layout.tsx`, `app/contact/page.tsx`, `app/api/contact/route.ts`
- [ ] Wire up the contact form (Resend or Formspree)
- [ ] Add `og:image` to `app/layout.tsx` metadata for social sharing
- [ ] Add your domain to Vercel and update metadata `metadataBase`

## Design tokens

| Token       | Value     | Usage                          |
|-------------|-----------|-------------------------------|
| `bg`        | `#0D0D0D` | Page background                |
| `surface`   | `#1A1A1A` | Cards, nav drawer              |
| `border`    | `#2A2A2A` | All borders                    |
| `cream`     | `#F5F0E8` | Primary text                   |
| `muted`     | `#8A8578` | Secondary text                 |
| `subtle`    | `#4A4640` | Tertiary text, tech tags       |
| `gold`      | `#E8C547` | Accent — links, highlights     |
| `gold-dim`  | `#B89A30` | Hover state on gold elements   |

## Fonts

- **Display** — Playfair Display 700/900 (headings, logo)
- **Body** — DM Sans 300/400/500 (everything else)

Both loaded via `next/font/google` — zero layout shift, self-hosted by Vercel.
