import { SyntheticEvent } from "react";

export interface ICard {
    id: string,
    title?: string
}

interface ICardProps {
    cardData: ICard,
    deleteCard: (e : SyntheticEvent, cardId : string | number) => void
}

const Card : React.FC<ICardProps> = ({cardData, deleteCard}) =>  {
    return(
        <div style={{width: "30%", height: "150px", display: "flex", position: "relative", backgroundColor: "#faf", padding: "1rem", borderRadius: "2rem"}}>
            <button style={{position: "absolute", top: "1rem", right: "1rem"}} type="button" onClick={(e : SyntheticEvent) => {
                deleteCard(e, cardData.id);
            }}>X</button>
            <h1>{cardData.title}</h1>
        </div>
    )
}

export default Card;