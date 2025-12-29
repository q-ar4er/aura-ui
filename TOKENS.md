# Aura Design Tokens

Aura UI uses CSS variables as the **single source of truth** for visual primitives:
colors, surfaces, shadows, radius, blur and typography.

Tokens live in:
- `src/assets/theme.css`

## Themes

- **Dark** is default (`:root`)
- **Light** is activated via `[data-theme='light']`

Switch theme in a consumer app:

```ts
document.documentElement.dataset.theme = 'light' // or 'dark'
```

If you use the helpers:

```ts
import { applyAuraTheme } from 'aura-ui'
applyAuraTheme('auto') // auto | light | dark
```

## Token versioning (SemVer)

Tokens are versioned **independently** of component implementation.
The current tokens version is:
- **0.1.0**

You can also see it in DevTools via:
- `--aura-tokens-version` on `:root`

### What is considered a breaking change

A token change is a **breaking change (MAJOR)** when any of the following happens:

- a token is **removed**
- a token is **renamed**
- a token **changes meaning** (e.g. `--text` stops being primary text color)
- a token change predictably causes accessibility regressions (contrast/legibility) across the kit

### Minor / patch changes

- **MINOR**: add new tokens (no removals/renames), add new theme hooks (`[data-radius]`, etc.)
- **PATCH**: adjust values with the same meaning (bugfix), e.g. correct opacity, tweak ring alpha

### How to bump the tokens version

1) Update the version in `src/assets/theme.css` header and `--aura-tokens-version`.
2) Update `package.json` field `aura.tokensVersion`.
3) Add an entry to `TOKENS_CHANGELOG.md`.

> Tip: keep `package.json` version and tokens version aligned early on. Later they may diverge.

## Customization in consumer apps

Tokens are meant to be overridden at the app level.
Recommended patterns:

### Per-app overrides

```css
:root {
  --accent: #5f9ff5;
  --radius-active: 20px;
}
```

### Feature flags / runtime switches

Aura supports a couple of optional runtime switches:

- `[data-radius='2xl']` to increase radius
- `[data-neo='false']` to disable neomorphic shadows

Example:

```ts
document.documentElement.dataset.radius = '2xl'
document.documentElement.dataset.neo = 'false'
```

## Naming conventions

Keep tokens:
- short
- semantic (meaning, not implementation)
- stable

Prefer:
- `--bg`, `--panel`, `--text`, `--muted`
- `--field-bg-*`, `--field-border-*`

Avoid:
- `--blue-500`, `--shadow-12`

