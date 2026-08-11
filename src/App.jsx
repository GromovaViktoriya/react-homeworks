import {ClickPractice} from "./components/ClickPractice.jsx";
import {InputPractice} from "./components/InputPractice.jsx";
import {FormPractice} from "./components/FormPractice.jsx";
import {ActionButton} from "./components/ActionButton.jsx";

function App() {
    const onClickHandler = (event) => {
        if (event.currentTarget.name === 'Сохранить') {
            console.log('Сохранено');
        }
        if (event.currentTarget.name === 'Удалить') {
            console.log('Удалено');
        }
    }


    return (
        <div className="App">
            <ClickPractice/>
            <InputPractice/>
            <FormPractice/>
            <ActionButton name={'Сохранить'} onClickHandler={onClickHandler}/>
            <ActionButton name={'Удалить'} onClickHandler={onClickHandler}/>
        </div>
    )
}

export default App