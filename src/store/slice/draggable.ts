import { StateCreator } from 'zustand'

export interface DraggableSlice {
  components: string[]
  addComponent: (id: string) => void
  removeComponent: (id: string) => void
}

export const createDraggableSlice: StateCreator<
  DraggableSlice,
  [],
  [],
  DraggableSlice
> = (set) => ({
  components: [],
  addComponent: (id) =>
    set(({ components }) => {
      if (components.includes(id)) return { components }

      return {
        components: [...components, id]
      }
    }),
  removeComponent: (id) =>
    set(({ components }) => {
      return { components: components.filter((val) => val !== id) }
    })
})
