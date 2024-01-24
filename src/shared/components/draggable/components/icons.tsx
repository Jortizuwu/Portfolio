import update from 'immutability-helper'
import type { FC } from 'react'
import { memo, useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'
import { Card } from './card'

const style = {
  width: 400
}

const ItemTypes = {
  CARD: 'card'
}

const ITEMS = [
  {
    id: 1,
    text: 'cv.pdf',
    img: '/img/pdf.jpeg',
    componentName: 'Pdf'
  },
  {
    id: 2,
    text: 'Hola',
    img: '/img/pdf.jpeg',
    componentName: 'Hola'
  },
  {
    id: 3,
    text: 'README',
    img: '/img/pdf.jpeg',
    componentName: 'Readme'
  }
]

export const Icons: FC = memo(function Icons() {
  const [cards, setCards] = useState(ITEMS)

  const findCard = useCallback(
    (id: string) => {
      const card = cards.filter((c) => `${c.id}` === id)[0] as {
        id: number
        text: string
        img: string
        componentName: string
      }
      return {
        card,
        index: cards.indexOf(card)
      }
    },
    [cards]
  )

  const moveCard = useCallback(
    (id: string, atIndex: number) => {
      const { card, index } = findCard(id)
      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card]
          ]
        })
      )
    },
    [findCard, cards, setCards]
  )

  const [, drop] = useDrop(() => ({ accept: ItemTypes.CARD }))
  return (
    <div ref={drop} style={style} className='p-2'>
      {cards.map((card) => (
        <Card
          componentName={card.componentName}
          key={card.id}
          id={`${card.id}`}
          text={String(card.text)}
          img={card.img}
          moveCard={moveCard}
          findCard={findCard}
        />
      ))}
    </div>
  )
})
