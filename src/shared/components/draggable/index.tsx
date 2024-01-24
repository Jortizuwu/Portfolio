import { useCallback, useEffect, useState } from 'react'
import { Container } from './components/container'
import { Boxes, DraggableContext } from './context'
import usePersistedStore from '@/store'

import update from 'immutability-helper'
import type { XYCoord } from 'react-dnd'
import { useDrop } from 'react-dnd'
import { componentsList } from '@/shared/components-list'

export interface DragItem {
  type: string
  id: string
  top: number
  left: number
}

const ItemTypes = {
  BOX: 'box'
}

const Draggable = () => {
  const [fullPage, setfullPage] = useState(false)
  const [currentId, setCurrentId] = useState<string>('')
  const [boxes, setBoxes] = useState<null | Boxes>(null)
  const { isActivityOpen, setActivity, components } = usePersistedStore()

  const handleFullPage = () => {
    setfullPage((state) => !state)
  }

  const handleSetCurrentId = (id: string) => {
    setCurrentId(id)
  }

  useEffect(() => {
    const value = Object.fromEntries(
      Object.entries(componentsList).filter(([key]) => components.includes(key))
    )
    setBoxes(value)
  }, [components])

  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top }
          }
        })
      )
    },

    [setBoxes, boxes]
  )

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
        const left = Math.round(item.left + delta.x)
        const top = Math.round(item.top + delta.y)
        moveBox(item.id, left, top)
        return undefined
      }
    }),
    [moveBox]
  )

  return (
    <DraggableContext.Provider
      value={{
        fullPage,
        boxes,
        currentId,
        drop,
        handleFullPage,
        handleSetCurrentId
      }}
    >
      <div
        onClick={() => {
          if (isActivityOpen) {
            setActivity()
          }
        }}
        className={
          isActivityOpen
            ? 'p-28 w-full h-full rounded-2xl transition-all'
            : 'w-full h-full transition-all'
        }
      >
        <div
          className="bg-[url('/img/wallpaper.webp')] w-full h-full max-w-[98wv] overflow-hidden max-h-[98hv] bg-no-repeat bg-cover"
          style={{
            ...(isActivityOpen && {
              borderRadius: 20
            })
          }}
        >
          <Container />
        </div>
      </div>
    </DraggableContext.Provider>
  )
}

export default Draggable
