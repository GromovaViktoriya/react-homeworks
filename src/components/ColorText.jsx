import {useState} from "react";

export const ColorText = () => {
    const [color, setColor] = useState('red')
    const onClickHandler = () => {
        setColor((prev) => prev === 'red' ? 'green' : 'red')
    }

    return (
        <div>
            <p>Colored text test</p>
            <p style={{color:color}}>Цветной текст</p>
            <button onClick={onClickHandler}>Click</button>
        </div>
    )
}