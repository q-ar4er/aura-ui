type PlainObject = Record<string, unknown>;
/**
 * Deep merge objects in a predictable way.
 *
 * - Arrays are replaced (not concatenated)
 * - Plain objects are merged recursively
 * - Primitive values override
 */
export declare const deepMerge: <T extends PlainObject, U extends PlainObject>(target: T, source: U) => T & U;
export {};
