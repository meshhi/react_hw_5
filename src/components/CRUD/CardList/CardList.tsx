import React from 'react'
import {v4 as uuid} from 'uuid';
import { ICard } from './Card/Card';
import Card from './Card/Card';

interface ICardListProps {
    cards: Array<ICard>
}

const CardList : React.FC<ICardListProps> = ({cards}) =>  {
  return (
    <div>
        {cards.map(card => <Card key={card.id} cardData={card}></Card>)}
    </div>
  )
}

export default CardList;