import React, { SyntheticEvent } from "react"

interface IAddCardFormProps {
    addNewCard: (e : SyntheticEvent, cardData) => void
}

const AddCardForm : React.FC<IAddCardFormProps> = ({addNewCard}) => {
    return(
        <form onSubmit={(e : SyntheticEvent) => addNewCard(e, 'text')}>
            <input type="text" />
            <button type="submit">Add card</button>
        </form>
    )
}

export default AddCardForm;