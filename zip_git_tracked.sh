  #!/usr/bin/env bash
set -euo pipefail

# Переходим в корень git-репозитория
ROOT_DIR="$(git rev-parse --show-toplevel 2>/dev/null || { echo "Не git-репозиторий"; exit 1; })"
cd "$ROOT_DIR"

# Имя архива: <имя_репо>-tracked.zip или то, что передано первым аргументом
REPO_NAME="$(basename "$ROOT_DIR")"
ZIP_NAME="${1:-${REPO_NAME}-tracked.zip}"

# Удаляем старый архив, если есть
rm -f "$ZIP_NAME"

# Получаем список файлов, отслеживаемых git.
# --recurse-submodules включит содержимое сабмодулей при поддерживаемой версии git.
if git ls-files --recurse-submodules >/dev/null 2>&1; then
  FILE_LIST_CMD=(git ls-files --recurse-submodules)
else
  FILE_LIST_CMD=(git ls-files)
fi

# Формируем архив из списка (по строкам). Предполагаем, что имена файлов не содержат переводов строк.
# -q — тихий режим, -X — без лишних атрибутов, -9 — максимальное сжатие, -@ — читать список из stdin.
mapfile -t FILES < <("${FILE_LIST_CMD[@]}")
if [ "${#FILES[@]}" -eq 0 ]; then
  echo "В репозитории нет отслеживаемых файлов."
  exit 0
fi

printf '%s\n' "${FILES[@]}" | zip -q -X -9 "$ZIP_NAME" -@

echo "Готово: $ZIP_NAME (${#FILES[@]} файлов)"
