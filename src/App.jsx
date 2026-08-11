import {List} from "./components/List.jsx";
import {useRef, useState} from "react";

function App() {
    const [data, setData] = useState([
        {id: 1, item: 'milk', price: 660},
        {id: 2, item: 'bread', price: 250},
        {id: 3, item: 'salmon', price: 2900},
        {id: 4, item: 'mascarpone base', price: 2200},
        {id: 5, item: 'sour cream', price: 450}
    ])

    const ref = useRef(null)

    const onClickHandler = () => {
        ref.current.focus();
    }
    const inputHandler = (event) => {
        if (event.key === "Enter") {
            setData([...data, {id: data.length+1, item: ref.current.value, price: 550}]);
        }
    }

    return (
        <div className="App">
            <input type="text" ref={ref} onKeyDown={inputHandler}/>
            <button onClick={onClickHandler}>Фокус</button>
            <List array={data} setData={setData}/>
        </div>
    )
}

export default App