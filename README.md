# Likoudis Ventures

A family-held house of considered enterprises. Baltimore, with roots in Kefalonia.

This is the marketing and brand site for Likoudis Ventures, the public-facing DBA of Likoudis Legacy LLC. Distinct from the Likoudis Legacy Foundation.

## Stack

- **Next.js 15** with App Router and React Server Components
- **TypeScript** throughout
- **Tailwind CSS** with custom design tokens (the v4 palette)
- **Resend** for transactional inquiries and newsletter sends via Audiences
- **Vercel** or **DigitalOcean** for deployment

## Local Development

```bash
# Install dependencies
npm install

# Copy env file and add your Resend API key
cp .env.example .env.local

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
src/
├── app/                     # Next.js App Router pages
├── components/
│   ├── brand/              # Olive branch mark, wordmark, Greek subtitles
│   ├── layout/             # Nav, footer, top rule
│   ├── sections/           # Hero, division grid, philosophy band, etc.
│   ├── forms/              # Inquiry, newsletter signup
│   └── ui/                 # Buttons, eyebrows, status tags
├── content/                # All site copy (divisions, about, site config)
├── lib/                    # Resend client, server actions, utilities
└── styles/                 # CSS tokens
```

## Editing Content

All site content lives in `src/content/`:

- `site.ts` — site name, navigation, footer columns
- `divisions.ts` — the six divisions with their copy
- `about.ts` — family bios and philosophy

To add a division, edit `divisions.ts`. The site rebuilds automatically.

## Build Phases

This site was built in 4 phases:

1. **Foundation** ← *currently here* — design system, homepage, layout, components
2. **Divisions** — six division subpages
3. **About + Contact + Newsletter** — supporting pages
4. **Server Actions + Resend** — wire up forms and admin

## Brand

**Design language:** v4. Navy ground, Santorini sky as a section color (not just an accent), olive on dark grounds only, ochre on cream surfaces only, bone-white pop, no orange blocks.

**Mark:** olive branch with one olive per active division.

**Greek subtitles** appear on every division. The script is real Greek, not transliteration. Used once per page, in italic ochre.

**Voice:** restrained, family-rooted, plainspoken. No marketing jargon. No "elevate your business." Sentences should read like they were written by a person who has read books.

## Deployment

Recommended: Vercel.

```bash
npx vercel
```

Alternative: DigitalOcean droplet, Caddy reverse proxy, PM2.

## License

Proprietary. All rights reserved by Likoudis Legacy LLC.
