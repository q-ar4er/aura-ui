# Release & GitHub install workflow (no npm publish)

Aura UI is consumed directly from GitHub tags (e.g. `github:q-ar4er/aura-ui#v0.1.2`).

Because consumers install an archive from GitHub, **build artifacts must be present in the repo**:
- `dist/index.js`
- `dist/index.d.ts`
- `dist/style.css`

## One-time setup

1) Ensure `dist/` is **not** ignored by git.
2) Keep `package.json` `files` including `dist/`.
3) Keep `exports` mapping:
- `.` -> `dist/index.js` + `dist/index.d.ts`
- `./style.css` -> `dist/style.css`
- `./tailwind-preset` -> `tailwind.preset.cjs`

## Release steps

```bash
# in aura-ui repo
npm i
npm run build

# commit dist changes
git add dist package.json CHANGELOG.md
git commit -m "chore(release): v0.1.2"
git push

# tag
git tag v0.1.2
git push origin v0.1.2
```

## Consumer update (axioma / any app)

```bash
# change dependency to the new tag
# "@q-ar4er/aura-ui": "github:q-ar4er/aura-ui#v0.1.2"

rm -rf node_modules package-lock.json
npm i
```

## Tailwind preset plugins

`tailwind.preset.cjs` uses `@tailwindcss/forms` and `@tailwindcss/typography` **if installed**.
They are optional peer deps:
- install them in the consumer app if you want the plugins enabled.
