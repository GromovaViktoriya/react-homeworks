export const ActionButton = ({name,onClickHandler}) => {

    return (
        <div>
            <button onClick={onClickHandler} name={name}>{name}</button>
        </div>
    )
}