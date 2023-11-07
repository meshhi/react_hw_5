import React, { SyntheticEvent, useState } from 'react'
import CardList from './CardList/CardList'
import {v4 as uuid} from 'uuid';
import { ICard } from './CardList/Card/Card';
import AddCardForm from './AddCardForm/AddCardForm';

export default function Crud() {
  const [cards, setCards] = useState([]);

  const addCard = async(e : SyntheticEvent, cardData) => {
    e.preventDefault();
    const newCard: ICard = {
      id: uuid(),
      title: cardData
    }
    setCards([...cards, newCard])
  }

  return (
    <div>
      <AddCardForm addNewCard={addCard}></AddCardForm>
      <CardList cards={cards}></CardList>
    </div>
  )
}
