# Portfolio Reskin: 1-bit Dithering + 90s Macintosh Type

## Goal
Reskin the existing portfolio (structure unchanged) with a black/gray/white
animated dithering shader background and 90s Macintosh-flavored typography,
staying minimalistic.

## Decisions
- **Scope:** Keep the Press Start screen, fixed left menu, and screen-switching
  flow in `page.js`. Visual reskin only. (Chosen autonomously — user was AFK;
  lowest-risk reading of "redesign with X effect and Y font".)
- **Dithering shader:** Use `Dithering` from `@paper-design/shaders-react`
  (already a dependency — no new packages). Full-screen fixed background:
  - `colorBack` near-black `#0a0a0a`, `colorFront` off-white `#e8e8e8`
  - `type="8x8"` Bayer, `shape="warp"`, small `size` (~2), slow `speed`
  - Grays are produced perceptually by dither density (true 1-bit look).
  - Replaces `@shadergradient/react` usage in `ShaderBackground.js`. The
    now-unused `@shadergradient/react`, `three`, `@react-three/fiber`,
    `camera-controls`, `three-stdlib` deps are left in package.json
    (removal mentioned to user, not done — out of scope).
- **Fonts:** `Pixelify Sans` via `next/font/google` for display (title,
  headings, menu buttons) — closest Chicago-style pixel font on Google Fonts.
  Body/labels stay `Geist Mono` (Monaco vibe). Remove the Geist sans import.
- **Chrome (globals.css):**
  - Monochrome palette: black `#0a0a0a`, grays, white `#f2f2f2`.
  - Square corners everywhere (no `border-radius: 999px`).
  - Remove glows, text-shadows, backdrop blur.
  - Buttons: 1.5–2px solid border, hard offset shadow (`3px 3px 0`),
    active/hover state inverts to white-bg/black-text (classic Mac).
  - Keep the `▶` cursor motif — reads as classic Mac list selection.
  - Scrim over shader lightened/simplified for text legibility.

## Files touched
- `src/app/components/ShaderBackground.js` — swap shader
- `src/app/layout.js` — font swap
- `src/app/globals.css` — palette + chrome
- `src/app/page.js` — unchanged or minimal class tweaks

## Verification
- `npm run build` passes; visually verify dev server renders dithered
  background, pixel font loads, all four screens legible.

## Error handling
- If `Pixelify Sans` fails to load, `next/font` falls back to the declared
  fallback stack (monospace) — page stays readable.
