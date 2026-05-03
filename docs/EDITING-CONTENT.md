# Editing Content

All site copy lives in `src/content/`. Three files:

## `src/content/site.ts`

Site-wide config:
- Site name, tagline, founded year
- Top rule banner
- Navigation links
- Footer column structure

Edit anything here and the change applies everywhere.

## `src/content/divisions.ts`

The six divisions. Each division has:
- `slug` — used in the URL (`/divisions/the-studio`)
- `name` — display name
- `greek` — Greek script for the subtitle
- `greekTransliteration` — phonetic spelling
- `tagline` — one-line summary on cards
- `shortDescription` — homepage card copy
- `longDescription` — full subpage copy (paragraphs separated by `\n\n`)
- `offerings` — bullet list of services
- `status` — `active` or `forthcoming`
- `notes` — optional special note for the subpage (Ithaca House uses this for the Likoudis Villas acknowledgment)

To add a new division:
1. Add a new entry to the `divisions` array
2. Increment the olive count on the brand mark — see `src/components/brand/OliveBranchMark.tsx` (default is 5; pass `olives={6}` if needed)
3. The site rebuilds automatically — a new subpage at `/divisions/<slug>` is generated

## `src/content/about.ts`

About page content:
- Hero, origin, philosophy, family, separation sections
- Add or remove family members in the `family.members` array

## Brand mark — adding a sixth olive

If you launch a sixth division and want the olive branch to show six olives, change the default in `src/components/brand/OliveBranchMark.tsx`:

```tsx
export function OliveBranchMark({ size = 30, className, olives = 6 }: OliveBranchMarkProps) {
```

The mark already supports up to six olives — they're pre-positioned along the branch curve.

## Newsletter

Newsletter content is composed at `/admin/branch` after deployment. Type the subject and body in plain text; the system formats it into a branded HTML email and sends it via Resend Broadcasts to all subscribers in your audience.
