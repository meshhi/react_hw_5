import { SyntheticEvent } from "react";

export interface ICard {
    id: string,
    title: string
}

interface ICardProps {
    cardData: ICard,
    deleteCard: (e : SyntheticEvent, cardId : string | number) => void
}

const Card : React.FC<ICardProps> = ({cardData, deleteCard}) =>  {
    return(
        <div>
            <button type="button" onClick={(e : SyntheticEvent) => {
                deleteCard(e, cardData.id);
            }}>X</button>
            <h1>{cardData.title}</h1>
        </div>
    )
}

export default Card;