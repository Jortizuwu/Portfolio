import { ReactNode, createContext } from 'react'
import { ConnectDropTarget } from 'react-dnd'

export type Boxes = Record<
  string,
  {
    top: number
    left: number
    component: ReactNode
  }
>

export type DraggableContextProps = {
  fullPage: boolean
  boxes: Boxes | null
  currentId: string
  drop: ConnectDropTarget
  handleFullPage: () => void
  handleSetCurrentId: (id: string) => void
}

export const DraggableContext = createContext<DraggableContextProps | null>(
  null
)
