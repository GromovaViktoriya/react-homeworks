import {useState} from "react";
import {ChildComponent} from "./ChildComponent.jsx";
import {SiblingComponent} from "./SiblingComponent.jsx";

export const ParentComponent = () => {
    const [counter, setCounter] = useState(0)
    const counterHandler = (event) => {
        switch (event.target.name) {
            case 'Увеличить':
                setCounter((prev) => prev + 1)
                break;
            case 'Сбросить': {
                setCounter(0)
                break;
            }
            case 'Уменьшить': {
                setCounter((prev) => prev - 1)
                break;
            }
            case 'Случайное': {
                let randomNum = Math.floor((Math.random() * 10) + 1)
                setCounter(randomNum)
                break;
            }
        }
    }

    return (
        <div onClick={counterHandler}>
            <h3>Счетчик: {counter}</h3>
            <button name={'Увеличить'}>Увеличить</button>
            <button name={'Сбросить'}>Сбросить</button>
            <button name={'Случайное'}>Случайное значение</button>
            <button name={'Уменьшить'}>Уменьшить</button>
            <ChildComponent name={'Вика'} counter={counter}/>
            <SiblingComponent/>
        </div>

    )
}

