# Aura UI (`aura-ui`)

UI-kit (Vue 3) в стиле **glass / aura**: дизайн‑токены, глобальные стили и набор компонентов.

- **Стили**: `aura-ui/style.css`
- **Tailwind preset (опционально)**: `aura-ui/tailwind-preset`
- **Версия токенов** (SemVer отдельно от пакета): см. `TOKENS.md`

---

## Установка в продукт (через GitHub, приватный репозиторий)

Рекомендуемый способ — фиксировать **git tag** (semver), чтобы обновления были контролируемыми.

### SSH

```bash
pnpm add git+ssh://git@github.com/<USER>/aura-ui.git#v0.1.0
```

### HTTPS

```bash
pnpm add git+https://github.com/<USER>/aura-ui.git#v0.1.0
```

> В пакете включён `prepare` (сборка на install), поэтому `dist/` появится автоматически.

---

## Использование

### 1) Подключи стили один раз

В entry-файле приложения (`main.ts`):

```ts
import 'aura-ui/style.css'
```

### 2) Импортируй компоненты

```vue
<script setup lang="ts">
import { AuraButton, AuraTextInput, AuraAlert } from 'aura-ui'
</script>

<template>
  <AuraAlert title="Info">Hello</AuraAlert>
  <AuraTextInput label="Email" placeholder="name@example.com" />
  <AuraButton>Continue</AuraButton>
</template>
```

---

## Темы (dark / light / auto)

Токены живут в `src/assets/theme.css`.

Переключение темы — через `data-theme` на `<html>`:

```ts
document.documentElement.dataset.theme = 'light' // или 'dark'
```

Или через хелпер:

```ts
import { applyAuraTheme, persistAuraTheme, initAuraTheme } from 'aura-ui'

applyAuraTheme('dark')
persistAuraTheme('auto')
initAuraTheme() // применит сохранённую тему или auto
```

Доп. переключатели:

```ts
document.documentElement.dataset.radius = '2xl'  // по умолчанию не задано
document.documentElement.dataset.neo = 'false'   // чтобы убрать neo‑тени
```

---

## Tailwind preset для потребителей (опционально)

Если продукт сам использует Tailwind и ты хочешь, чтобы **утилиты соответствовали токенам Aura**, подключи preset.

`tailwind.config.(js|cjs)`:

```js
module.exports = {
  presets: [require('aura-ui/tailwind-preset')],
  content: ['./index.html', './src/**/*.{vue,ts,js,tsx,jsx}'],
}
```

`tailwind.config.ts`:

```ts
import auraPreset from 'aura-ui/tailwind-preset'

export default {
  presets: [auraPreset],
  content: ['./index.html', './src/**/*.{vue,ts,js,tsx,jsx}'],
}
```

### Важно про preflight

`aura-ui/style.css` уже включает tailwind preflight, поэтому если твой продукт тоже его включает,
можно избежать дубля, отключив preflight в продукте:

```ts
export default {
  presets: [auraPreset],
  corePlugins: { preflight: false },
  content: [...],
}
```

---

## Версионирование токенов

- версия пакета: `package.json#version`
- версия токенов: `package.json#aura.tokensVersion`

Подробнее: `TOKENS.md` и `TOKENS_CHANGELOG.md`.

---

## Storybook

```bash
pnpm storybook
```

Docs‑страницы лежат в `stories/docs/*.mdx`.

---

## Сборка пакета

```bash
pnpm build
```

Артефакты:
- `dist/index.js` — ESM entry
- `dist/style.css` — готовые стили
- `dist/index.d.ts` и остальные `*.d.ts` — типы

---

## Примечание про нейминг


