import { CSSProperties } from 'react'

import { Box } from './box'
import { Icons } from './icons'
import { useDraggingContext } from '@/shared/hooks/useDragging'
import usePersistedStore from '@/store'

export interface DragItem {
  type: string
  id: string
  top: number
  left: number
}

const styles: CSSProperties = {
  position: 'relative'
}

export const Container = () => {
  const { drop, boxes, currentId, handleSetCurrentId } = useDraggingContext()
  const { theme } = usePersistedStore()
  return (
    <div ref={drop} style={styles} className='h-full w-full'>
      <Icons />
      {boxes &&
        Object.keys(boxes).map((key) => {
          const { left, top, component } = boxes[key] as {
            top: number
            left: number
            component: React.ReactNode
          }
          return (
            <Box
              key={key}
              id={key}
              left={left}
              top={top}
              hideSourceOnDrag
              onClick={() => handleSetCurrentId(key)}
            >
              <div
                className='w-full h-full mx-auto absolute transition-all z-10'
                style={{
                  zIndex: key === currentId ? 999 : 10
                }}
              >
                <div
                  className='h-full rounded-b-lg'
                  style={{
                    background: theme.background.primary
                  }}
                >
                  {component}
                </div>
              </div>
            </Box>
          )
        })}
    </div>
  )
}
