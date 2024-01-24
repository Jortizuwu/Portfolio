import { useEffect, type CSSProperties, type FC, type ReactNode } from 'react'

import { useDraggingContext } from '@/shared/hooks/useDragging'
import { useDrag } from 'react-dnd'
import HeaderPage from './header'
import usePersistedStore from '@/store'

const ItemTypes = {
  BOX: 'box'
}

const style: CSSProperties = {
  position: 'absolute'
  // cursor: 'move'
}

export interface BoxProps {
  id: string
  left: number
  top: number
  hideSourceOnDrag?: boolean
  children?: ReactNode
  onClick: () => void
}

export const Box: FC<BoxProps> = ({ id, left, top, children, onClick }) => {
  const { fullPage } = useDraggingContext()
  const { isActivityOpen, setActivity } = usePersistedStore()

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }),
    [id, left, top]
  )
  useEffect(() => {
    if (isActivityOpen && isDragging) {
      setActivity()
    }
  }, [isActivityOpen, setActivity, isDragging])

  if (isDragging) {
    return <div ref={drag} />
  }

  return (
    <div
      className={`${fullPage ? 'h-full w-full' : 'w-1/2 h-1/2'}`}
      onClick={onClick}
      ref={drag}
      style={{
        ...style,
        left: fullPage ? 0 : left,
        top: fullPage ? 0 : top
      }}
      data-testid='box'
    >
      <HeaderPage id={id} />
      {children}
    </div>
  )
}
