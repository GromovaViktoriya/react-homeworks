export const ChildComponent = ({name, counter}) => {
    return (
        <div>
            <p>Привет, {name}! Текущий счётчик: {counter}</p>
        </div>
    )
}