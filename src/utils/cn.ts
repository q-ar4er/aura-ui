export type ClassValue =
  | string
  | undefined
  | null
  | false
  | ClassValue[]
  | Record<string, boolean>

const normalize = (value: ClassValue, target: string[]) => {
  if (!value) {
    return
  }

  if (typeof value === 'string') {
    target.push(value)
    return
  }

  if (Array.isArray(value)) {
    for (const entry of value) {
      normalize(entry, target)
    }
    return
  }

  for (const [key, enabled] of Object.entries(value)) {
    if (enabled) {
      target.push(key)
    }
  }
}

export const cn = (...values: ClassValue[]) => {
  const acc: string[] = []

  for (const value of values) {
    normalize(value, acc)
  }

  return acc.join(' ').trim()
}

export default cn
