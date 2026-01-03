type PlainObject = Record<string, unknown>

const isPlainObject = (value: unknown): value is PlainObject => {
  if (!value || typeof value !== 'object') return false
  const proto = Object.getPrototypeOf(value)
  return proto === Object.prototype || proto === null
}

/**
 * Deep merge objects in a predictable way.
 *
 * - Arrays are replaced (not concatenated)
 * - Plain objects are merged recursively
 * - Primitive values override
 */
export const deepMerge = <T extends PlainObject, U extends PlainObject>(target: T, source: U): T & U => {
  const out: PlainObject = { ...target }

  for (const [key, value] of Object.entries(source)) {
    const cur = out[key]

    if (Array.isArray(value)) {
      out[key] = value
      continue
    }

    if (isPlainObject(cur) && isPlainObject(value)) {
      out[key] = deepMerge(cur, value)
      continue
    }

    out[key] = value
  }

  return out as T & U
}
