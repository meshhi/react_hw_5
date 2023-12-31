import React, { SyntheticEvent } from 'react'
import { ICard } from './Card/Card';
import Card from './Card/Card';

interface ICardListProps {
    cards: Array<ICard>,
    deleteCard: (e : SyntheticEvent, cardId : string | number) => void
}

const CardList : React.FC<ICardListProps> = ({cards, deleteCard}) =>  {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem"}}>
        {cards.map(card => <Card key={card.id} cardData={card} deleteCard={deleteCard}></Card>)}
    </div>
  )
}

export default CardList;