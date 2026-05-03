# Brand Guidelines

## The mark

The olive branch with five olives is the Likoudis Ventures brand mark. Each olive represents one division of the house. If a sixth division is added, the mark grows a sixth olive.

The mark is implemented in `src/components/brand/OliveBranchMark.tsx`. It uses `currentColor` so it adapts to context — sky blue on navy, navy on cream, etc.

**Do:**
- Use the mark with the wordmark in the nav and footer
- Use it as a quiet anchor for emphasis sections (philosophy band, passage band)
- Keep the olive count synced with the division count

**Don't:**
- Add color gradients to the mark
- Skew or distort the proportions
- Add additional decoration around it

## Color palette

The v4 palette is in `tailwind.config.ts`. Used hierarchically:

| Color | Use |
|---|---|
| **Navy** (`#0E1B2C`) | Primary ground for hero, intro, inquiry |
| **Sky** (`#8FB8CE`) | Secondary ground for divisions, philosophy |
| **Olive** (`#8FA67D`) | Accents on dark grounds only |
| **Olive Glow** (`#C9D7B8`) | Light olive for italics on navy |
| **Ochre** (`#C8A24A`) | Greek script accents, ochre lives on cream surfaces only |
| **Ochre Deep** (`#A6822E`) | Darker ochre for text on cream |
| **Bone** (`#FAF6EC`) | Crisp white for cards on sky, pop accent |
| **Cream** (`#F2EAD6`) | Warm surface for prose bands and form cards |

**Critical rules:**
- Never put olive on cream — it dies
- Never put ochre on navy — wrong association (terracotta is Italian)
- White/bone only for small surfaces (cards, forms), not large canvases
- Sky blue is a **ground**, not just an accent

## Typography

- **Display:** Cormorant Garamond — for headlines, italics, drop caps, Greek script
- **Body:** Inter — for navigation, eyebrow labels, status tags, UI text

Headlines use `display-xl` (clamps from 48px to 92px depending on viewport).

## Greek script

Greek subtitles appear once per page beneath the English division name. They are always:
- Italic
- Ochre color
- Drawn from real classical or modern Greek (not transliteration)

Used for division names, the heritage signature in the top rule and footer (`ἐκ Κεφαλονιάς` = "from Kefalonia"), and division-specific subtitles. Used **once per page**, never repeated.

## Voice

The brand voice is restrained, family-rooted, plainspoken. Sentences should read like they were written by a person who has read books.

**Avoid:**
- Marketing jargon ("elevate your business," "synergy," "best-in-class")
- Hyperbole ("the most luxurious," "world-class")
- Em dash clusters
- Throat-clearing transitions ("Furthermore," "In conclusion")
- Filler adverbs ("truly," "really," "very")

**Aim for:**
- Concrete nouns over abstract ones
- Asymmetric sentence rhythm
- Periodic sentences that build to a point
- Plain language carrying weight through restraint

The phrase "with our names on the door" appears in multiple places intentionally — it is a brand line.

## House rule

> "Build the thing well, sign your name to it, and the rest takes care of itself."

This appears on the homepage and is the philosophical anchor of the brand. It should be referenced (not necessarily quoted) when writing copy for new sections.
