import { DragItem } from "../DragItem";

/**
 * Compares the type and id of the currently dragged item 
 * @param draggedItem 
 * @param itemType 
 * @param id 
 * @returns 
 */

export const isHidden = (
  draggedItem: DragItem | null,
  itemType: string,
  id: string
): boolean => {
  return Boolean(
    draggedItem &&
      draggedItem.type === itemType &&
      draggedItem.id === id
  )
}
