# Tokens Changelog

This changelog tracks **design token** changes (CSS variables) only.

Token version (SemVer) is stored in:
- `src/assets/theme.css`
- `package.json` → `aura.tokensVersion`

## 0.1.0

- Initial token set (dark + light)
- Surfaces: `--bg`, `--panel`
- Typography tokens: `--font-sans`, `--font-display`, `--font-scale`
- Radius tokens: `--r-xl`, `--r-2xl`, `--radius-active`
- Shadows and glass: `--shadow-*`, `--blur`
- Fields: `--field-*`
- Accent gradients: `--gradient-*`
- Runtime switches: `[data-radius='2xl']`, `[data-neo='false']`
