export const ClickPractice = () => {
    const onClickHandler = (event) => {
        // почему event.target может указывать на разные элементы - потому что он указывает на конкретный элемент,
        // по которому сделали клик. Обработчик может быть назначен на родительский элемент, но в event.target будет
        // указан конкретный дочерний элемент, на который кликнули.

        // почему event.currentTarget всегда указывает на button.
        // потому что currentTarget указывает на элемент, на который был назначен обработчик события, в данном примере button.
        console.log('event.target', event.target)
        console.log('event.currentTarget', event.currentTarget)
        console.log('event.target.tagName', event.target.tagName)
        console.log('event.currentTarget.tagName', event.currentTarget.tagName)
    }

    return (
        <>
            <button onClick={onClickHandler}>
                <span>👍</span>
                <span>Поставить лайк</span>
            </button>
        </>
    )
}