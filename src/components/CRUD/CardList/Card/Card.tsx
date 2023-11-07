export interface ICard {
    id: string,
    title: string
}

interface ICardProps {
    cardData: ICard
}

const Card : React.FC<ICardProps> = ({cardData}) =>  {
    return(
        <div>
            <h1>{cardData.title}</h1>
        </div>
    )
}

export default Card;