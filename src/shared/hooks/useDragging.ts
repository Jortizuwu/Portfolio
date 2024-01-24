import { useContext } from 'react'
import { DraggableContext } from '../components/draggable/context'

export const useDraggingContext = () => {
  const context = useContext(DraggableContext)
  if (!context) {
    throw new Error('Error in creating the context')
  }
  return context
}
