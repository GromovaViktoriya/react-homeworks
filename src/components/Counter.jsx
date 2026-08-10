import {useState} from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0)
    const onClickHandler = () => {
        setCounter((prev) => prev + 1)
    }

    return (
        <div>
            <h3>Count: {counter}</h3>
            <button onClick={onClickHandler}>Click</button>
        </div>
    )
}