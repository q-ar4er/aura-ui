// scripts/emit-style.mjs
// Copies the generated CSS bundle from dist/assets/*.css into dist/style.css
// so consumers can reliably import: `import "aura-ui/style.css"`.
import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");
const assetsDir = path.join(distDir, "assets");

if (!fs.existsSync(distDir)) {
  console.error("[emit-style] dist/ not found. Run build first.");
  process.exit(1);
}

if (!fs.existsSync(assetsDir)) {
  console.error("[emit-style] dist/assets/ not found. Vite did not emit assets.");
  process.exit(1);
}

const files = fs.readdirSync(assetsDir);
const cssFiles = files.filter((f) => f.endsWith(".css"));

if (cssFiles.length === 0) {
  console.error("[emit-style] No CSS files found in dist/assets/.");
  process.exit(1);
}

// Prefer a file that starts with the package name if present (e.g. aura-ui-XXXX.css)
const preferred = cssFiles.find((f) => f.startsWith("aura-ui-")) ?? cssFiles[0];
const srcFile = path.join(assetsDir, preferred);
const outFile = path.join(distDir, "style.css");

fs.copyFileSync(srcFile, outFile);
console.log(`[emit-style] ${path.relative(process.cwd(), srcFile)} -> ${path.relative(process.cwd(), outFile)}`);
