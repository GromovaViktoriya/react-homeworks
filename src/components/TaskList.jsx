import {useState} from "react";


export const TaskList = () => {
    const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);

    const addRandomStringHandler = () => {
        const abc = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
        let rs = "";
        while (rs.length < 10) {
            rs += abc[Math.floor(Math.random() * abc.length)];
        }
        setTasks([...tasks, rs]);
    }

    const removeLastItemHandler = () => {
        setTasks(tasks.filter((task, index, array) => task[index] !== task[array.length - 1]));
    }

    return (
        <div>
            <h3>Список задач</h3>
            <ul>
                {tasks.map((task, index) => {
                    return <li key={index}>{task}</li>
                })}
            </ul>
            <button onClick={addRandomStringHandler}>Добавить задачу</button>
            <button onClick={removeLastItemHandler}>Удалить последнюю задачу</button>
        </div>
    )
}