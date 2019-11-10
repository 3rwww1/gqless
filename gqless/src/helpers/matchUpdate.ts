import { getAccessor } from '../Accessor'

/**
 * Updates an accessor, with a compatible Value matching a pattern
 *
 * @example
 * // true for correct matches
 * matchUpdate(query.me, { id: 'Bob' })
 * // => true
 *
 * // returns false for bad matches
 * matchUpdate(query.me, { id: 'no' })
 * // => false
 */
export const matchUpdate = (data: any, pattern: any) => {
  const accessor = getAccessor(data)
  const entry = accessor.cache$.entries$.get(accessor.node$)
  if (!entry) return false

  const match = entry.match$(pattern)
  if (!match) return false

  accessor.updateValue$(match.value)
  return true
}
