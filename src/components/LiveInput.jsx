import {useState} from "react";

export const LiveInput = () => {
    const [string, setString] = useState('')
    const onChangeHandler = (event) => {
        setString(event.target.value)
    }

    return (
        <div>
            <p>Live input test</p>
            <input type="text" value={string} onChange={onChangeHandler} />
            <p>{string}</p>
        </div>
    )
}