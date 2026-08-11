export const List = ({array, setData}) => {

    const onClickHandler = (id) => {
        setData(array.map(item => item.id === id
            ? {...item, item: '!!!' + item.item}
            : item)
        )
    }

    return (
        <ul>
            {array.map((item) => {
                return <li key={item.id}>
                    <p>{item.item}</p>
                    <p>{item.price}</p>
                    <button onClick={() => {onClickHandler(item.id)}}>add importance</button>
                </li>
            })}
        </ul>
    )
}