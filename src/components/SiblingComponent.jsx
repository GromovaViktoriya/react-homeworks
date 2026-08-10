import {useState} from "react";

export const SiblingComponent = () => {
    const [text, setText] = useState('Plain text')
    const textHandler = () => {
        setText('REDEV')
    }

    return (
        <div>
            <p>{text}</p>
            <button onClick={textHandler}>Изменить текст</button>
        </div>

    )
}