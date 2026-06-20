/**
 * Find an item by its `id` field, falling back to a provided default when
 * nothing matches. Used by the picker UI to keep the selected mode/scene
 * stable when the active id is reset or unknown.
 */
export function selectById<T extends { id: string }>(
  items: T[],
  id: string,
  fallback: T
): T {
  return items.find((item) => item.id === id) ?? fallback;
}
