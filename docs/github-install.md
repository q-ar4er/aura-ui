# Using Aura UI from GitHub (without publishing to npm)

This repo is designed to be installed **directly from GitHub** as an npm dependency.

## What must be in this repo

- `src/` — sources
- `vite.config.ts` — library build
- `scripts/emit-style.mjs` — guarantees a stable `dist/style.css`
- `tailwind.preset.cjs` + `tailwind.preset.d.ts` — Tailwind preset export
- `package.json`:
  - `exports` for:
    - `.` → `dist/index.js` (+ types)
    - `./style.css` → `dist/style.css`
    - `./tailwind-preset` → preset files
  - `prepare: "npm run build"` so GitHub installs build automatically
  - `peerDependencies` for `vue` (and optional peers like `echarts`, etc.)

**Do not commit `dist/`** (recommended). GitHub installs will run `prepare` and build it.

## Install in a consumer project

Use a tag (recommended for reproducibility):

```bash
npm i github:q-ar4er/aura-ui#v0.1.1
```

Then in `main.ts`:

```ts
import "@q-ar4er/aura-ui/style.css";
import { initAuraTheme } from "@q-ar4er/aura-ui";

initAuraTheme();
```

Tailwind:

```js
import auraPreset from "@q-ar4er/aura-ui/tailwind-preset";

export default {
  presets: [auraPreset],
};
```

## How to release & update consumers

1) **In aura-ui repo**
- Make changes
- `npm run build` (locally) and smoke-test
- Bump version in `package.json`
- Update `CHANGELOG.md`
- Create and push a git tag:

```bash
git tag v0.1.1
git push origin v0.1.1
```

2) **In each consumer repo**
- Update dependency to the new tag:
  - `github:q-ar4er/aura-ui#v0.1.1`
- Reinstall:

```bash
rm -rf node_modules
npm i
```

## Fast iteration (optional)

For a quick test without tagging a release, you can install from a branch:

```bash
npm i github:q-ar4er/aura-ui#main
```

But tags are preferred for stable builds and repeatable deployments.
