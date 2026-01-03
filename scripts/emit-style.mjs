// scripts/emit-style.mjs
// Ensures a stable CSS entry file exists at dist/style.css
// so consumers can reliably import: `import "@q-ar4er/aura-ui/style.css"`.
//
// Depending on Vite/Rollup settings, the CSS bundle may land in:
// - dist/style.css
// - dist/assets/*.css
// This script normalizes that into dist/style.css.

import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");

if (!fs.existsSync(distDir)) {
  console.error("[emit-style] dist/ not found. Run build first.");
  process.exit(1);
}

const outFile = path.join(distDir, "style.css");

// If Vite already produced dist/style.css, we're done.
if (fs.existsSync(outFile) && fs.statSync(outFile).isFile()) {
  console.log(`[emit-style] ${path.relative(process.cwd(), outFile)} already exists`);
  process.exit(0);
}

// Otherwise, try to locate any emitted CSS bundle.
const candidates = [];

// 1) dist/assets/*.css (most common in library mode)
const assetsDir = path.join(distDir, "assets");
if (fs.existsSync(assetsDir)) {
  for (const f of fs.readdirSync(assetsDir)) {
    if (f.endsWith(".css")) candidates.push(path.join(assetsDir, f));
  }
}

// 2) dist/*.css (fallback if assetFileNames puts css in dist root)
for (const f of fs.readdirSync(distDir)) {
  if (f.endsWith(".css")) candidates.push(path.join(distDir, f));
}

const unique = [...new Set(candidates)].filter((p) => p !== outFile);

if (unique.length === 0) {
  console.error("[emit-style] No CSS files found in dist/ (neither dist/style.css nor dist/assets/*.css).");
  process.exit(1);
}

// Prefer a file that starts with the package name if present (e.g. aura-ui-XXXX.css)
const preferred =
  unique.find((p) => path.basename(p).startsWith("aura-ui-")) ??
  unique.find((p) => path.basename(p).includes("aura-ui")) ??
  unique[0];

fs.copyFileSync(preferred, outFile);
console.log(
  `[emit-style] ${path.relative(process.cwd(), preferred)} -> ${path.relative(process.cwd(), outFile)}`
);
