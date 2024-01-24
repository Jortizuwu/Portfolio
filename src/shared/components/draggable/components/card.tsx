import type { CSSProperties, FC } from 'react'
import { memo } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Typography } from '../..'
import usePersistedStore from '@/store'

const ItemTypes = {
  CARD: 'card'
}

const style: CSSProperties = {
  // border: ,
  // marginBottom: '.5rem',
  // cursor: 'move'
}

export interface CardProps {
  id: string
  componentName: string
  text: string
  img: string
  moveCard: (id: string, to: number) => void
  findCard: (id: string) => { index: number }
}

interface Item {
  id: string
  originalIndex: number
}

export const Card: FC<CardProps> = memo(function Card({
  id,
  text,
  img,
  moveCard,
  findCard,
  componentName
}) {
  const { addComponent } = usePersistedStore()

  const originalIndex = findCard(id).index
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item
        const didDrop = monitor.didDrop()
        if (!didDrop) {
          moveCard(droppedId, originalIndex)
        }
      }
    }),
    [id, originalIndex, moveCard]
  )

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CARD,
      hover({ id: draggedId }: Item) {
        if (draggedId !== id) {
          const { index: overIndex } = findCard(id)
          moveCard(draggedId, overIndex)
        }
      }
    }),
    [findCard, moveCard]
  )

  return (
    <div
      onDoubleClick={() => addComponent(componentName)}
      ref={(node) => drag(drop(node))}
      style={{
        ...style,
        ...(isDragging && { border: '1px dashed #fff' })
      }}
      className='mb-5 h-20 w-20 rounded-lg flex items-center justify-center flex-col hover:cursor-pointer hover:bg-white/10 transition-all'
    >
      <figure>
        <img src={img} className='h-10 w-10' />
      </figure>
      <Typography variant='h6' className='font-bold'>
        {text}
      </Typography>
    </div>
  )
})
