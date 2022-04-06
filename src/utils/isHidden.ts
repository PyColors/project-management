import { DragItem } from "../DragItem";

/**
 * Compares the type and id of the currently dragged item 
 * @param draggedItem 
 * @param itemType 
 * @param id 
 * @param isPreview
 * @returns 
 */

 export const isHidden = (
  draggedItem: DragItem | null,
  itemType: string,
  id: string,
  isPreview?: boolean
): boolean => {
  return Boolean(
    !isPreview &&
      draggedItem &&
      draggedItem.type === itemType &&
      draggedItem.id === id
  )
}
