import { StateCreator } from 'zustand'

export interface ActivitySlice {
  isActivityOpen: boolean
  setActivity: () => void
}

export const createActivitySlice: StateCreator<
  ActivitySlice,
  [],
  [],
  ActivitySlice
> = (set) => ({
  isActivityOpen: false,
  setActivity: () =>
    set(({ isActivityOpen }) => ({
      isActivityOpen: !isActivityOpen
    }))
})
