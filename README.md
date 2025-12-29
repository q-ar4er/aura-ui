# Aura UI

UI-kit (design system) в стиле *glass/soft* для семейства независимых продуктов.
Цель: единый визуальный язык, компоненты и токены, которые можно подключать в разные проекты без копипасты.

## Что внутри

- UI-компоненты (atoms/molecules/organisms)
- Design tokens (CSS variables): цвета, поверхности, тени, радиусы, blur
- Готовые базовые стили (forms/surfaces/typography helpers)
- Storybook-витрина для разработки и регресса

---

## Установка (без npm/организаций)

Подключай как git dependency по **тегу** (semver), чтобы обновления были контролируемыми.

### Вариант 1: SSH (рекомендуется)
`package.json` в продукте:

```json
{
  "dependencies": {
    "aura-ui": "git+ssh://git@github.com:<YOUR_GITHUB_USERNAME>/aura-ui.git#v0.1.0"
  }
}
````

### Вариант 2: HTTPS

```json
{
  "dependencies": {
    "aura-ui": "git+https://github.com/<YOUR_GITHUB_USERNAME>/aura-ui.git#v0.1.0"
  }
}
```

После этого:

```bash
npm i
# или
pnpm i
# или
yarn
```

> Важно: всегда фиксируй версию через `#vX.Y.Z`, не используй `#main`.

---

## Подключение стилей

Aura UI поставляет общий CSS-слой (токены + базовые классы).
В точке входа приложения (например `main.ts`) подключи:

```ts
import "aura-ui/styles.css";
```

Если твой проект использует Tailwind/другие стили — это не мешает. Токены будут доступны через CSS variables.

---

## Темы (light / dark / auto)

Тема переключается через `data-theme` на `<html>`:

* `light`
* `dark`
* `auto` (использует `prefers-color-scheme`)

### Пример переключения

```ts
export type AuraTheme = "light" | "dark" | "auto";

export function setAuraTheme(theme: AuraTheme) {
  document.documentElement.dataset.theme = theme;
}
```

#### Типовой UX (рекомендуется)

* По умолчанию: `auto`
* Пользователь меняет в настройках → сохраняешь в localStorage/профиле
* При старте приложения применяешь тему до рендера (чтобы не было “мигания”)

Пример:

```ts
const saved = (localStorage.getItem("theme") as "light" | "dark" | "auto") || "auto";
document.documentElement.dataset.theme = saved;
```

---

## Использование компонентов

Импортируй компоненты из публичного entrypoint:

```ts
import { AuraButton, AuraInput } from "aura-ui";
```

> Примечание: если в проекте пока используются имена `Neo*` — можно оставить их внутри библиотеки как есть.
> Главное — чтобы наружу экспортировался стабильный API. Позже переименуем без спешки (через алиасы/дедупликацию экспортов).

---

## Storybook

### Запуск локально в UI-kit репозитории

```bash
npm i
npm run storybook
```

Обычно поднимается на:

* `http://localhost:6006`

### Сборка Storybook

```bash
npm run build-storybook
```

---

## Разработка

### Команды (примерно)

```bash
npm run lint
npm run test
npm run build
```

Если сборка библиотеки идёт через Vite/TS — проверь, что:

* `styles.css` реально попадает в дистрибутив
* публичные экспорты зафиксированы (чтобы продукты не импортировали “внутренности”)

---

## Версионирование и релизы

Используем semver:

* `PATCH` (`0.1.1`) — багфиксы, без изменения API
* `MINOR` (`0.2.0`) — новые компоненты/опции, совместимо
* `MAJOR` (`1.0.0`) — breaking changes (переименования экспортов/изменения контрактов)

### Как выпускать релиз

1. Обнови версию (если ведёшь её в `package.json`)
2. Коммит
3. Создай git tag:

```bash
git tag v0.1.0
git push origin v0.1.0
```

После этого продукты могут перейти на новую версию, поменяв только `#v0.1.0` → `#v0.1.1`.

---

## Рекомендации по интеграции в продукты

* Не импортируй `aura-ui/src/...` напрямую. Только публичные экспорты.
* Все строки (тексты) держи в приложении (i18n в продукте), UI-kit — через props/slots.
* Любая доменная логика (api, stores, routing) — только в продукте, не в UI-kit.

---

## Лицензия

Private / internal use (по умолчанию).

```