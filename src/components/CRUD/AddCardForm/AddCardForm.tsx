import React, { SyntheticEvent, useRef } from "react"

interface IAddCardFormProps {
    addNewCard: (e : SyntheticEvent, cardData? : string) => void
}

const AddCardForm : React.FC<IAddCardFormProps> = ({addNewCard}) => {
    const titleRef : React.RefObject<HTMLInputElement> = useRef(null);
    return(
        <form onSubmit={(e : SyntheticEvent) => addNewCard(e, titleRef.current?.value)}>
            <input type="text" ref={titleRef}/>
            <button type="submit">Add card</button>
        </form>
    )
}

export default AddCardForm;