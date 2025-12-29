# Storybook

## Run

```bash
pnpm install
pnpm storybook
```

## Build (static)

```bash
pnpm build-storybook
```

```bash
npm i
npm run build
npm run storybook
```

Notes:
- Global styles are loaded from `src/style.css` in `.storybook/preview.ts`.
- Stories live in `stories/` (kept outside `src/` so `vue-tsc` app type-check stays clean).
