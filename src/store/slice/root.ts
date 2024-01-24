import { create } from 'zustand'
import { persist, devtools, createJSONStorage } from 'zustand/middleware'

import { DraggableSlice, createDraggableSlice } from './draggable'
import { ThemeSlice, createThemeSlice } from './theme'
import { ActivitySlice, createActivitySlice } from './activities'

const usePersistedStore = create<DraggableSlice & ThemeSlice & ActivitySlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createDraggableSlice(...a),
        ...createThemeSlice(...a),
        ...createActivitySlice(...a)
      }),
      {
        name: 'bound-persisted-store',
        storage: createJSONStorage(() => localStorage)
      }
    )
  )
)

export default usePersistedStore
