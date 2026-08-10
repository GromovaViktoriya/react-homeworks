import {useState} from "react";

export const ToggleText = () => {
    const [toggle, setToggle] = useState(false)
    const onClickHandler = () => {
        setToggle((prev) => !prev)
    }

    return (
        <div>
            <p>Toggled text can be shown by clicking the button</p>
            {toggle && <h3>ToggledText shown</h3>}
            <button onClick={onClickHandler}>Click</button>
        </div>
    )
}