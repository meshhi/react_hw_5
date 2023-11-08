import React, { SyntheticEvent, useState, useEffect } from 'react'
import CardList from './CardList/CardList'
import {v4 as uuid} from 'uuid';
import { ICard } from './CardList/Card/Card';
import AddCardForm from './AddCardForm/AddCardForm';

const BASE_URL = 'http://localhost';
const BASE_PORT = 7070;
const API_URL = `${BASE_URL}:${BASE_PORT}`;

export default function Crud() {
  const [cards, setCards] = useState<ICard[]>([]);

  const addCard = async(e : SyntheticEvent, cardData? : string) => {
    try {
      e.preventDefault();
      const newCard: ICard = {
        id: uuid(),
        title: cardData
      }
      const response = await fetch(`${API_URL}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCard),
      });
      setCards([...cards, newCard])
    } catch (error) {
      console.error(error);
    }
  }

  const deleteCard = async(e : SyntheticEvent, cardId : string | number) => {
    try {
      const response = await fetch(`${API_URL}/notes/${cardId}`, {
        method: 'DELETE',
      });
      setCards(prev => prev.filter(card => card.id!== cardId));
    } catch (error) {
      console.error(error);
    }
  }

  const updateCards = async(e? : SyntheticEvent) => {
    try {
      const response = await fetch(`${API_URL}/notes`);
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    updateCards();
  }, []);

  return (
    <div>
      <button type="button" onClick={updateCards}>Update cards</button>
      <AddCardForm addNewCard={addCard}></AddCardForm>
      <CardList cards={cards} deleteCard={deleteCard}></CardList>
    </div>
  )
}
