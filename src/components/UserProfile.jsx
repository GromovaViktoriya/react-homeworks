import {useState} from "react";

export const UserProfile = () => {
    const [user, setUser] = useState({
        name: "Иван",
        age: 25,
        isActive: true,
    });

    const onClickHandler = (event) => {
        event.target.name === 'Сменить имя'
            ? setUser((prevUser) => ({...prevUser, name: 'Чародей'}))
            : event.target.name === 'Увеличить возраст'
                ? setUser((prevUser) => ({...prevUser, age: prevUser.age + 1}))
                : setUser((prevUser) => ({...prevUser, isActive: !prevUser.isActive}))

    }

    return (
        <div onClick={onClickHandler}>
            <h3>Профиль пользователя</h3>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>Активен: {user.isActive? 'Да': 'Нет'}</p>
            <button name={'Сменить имя'}>Сменить имя</button>
            <button name={'Увеличить возраст'}>Увеличить возраст</button>
            <button name={'Переключить активность'}>Переключить активность</button>
        </div>
    )
}