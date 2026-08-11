export const FormPractice = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log('Форма отправлена')
        console.log('event.currentTarget', event.currentTarget)
            }

    return (
        <>
            <form disabled onSubmit={onSubmitHandler}>
                <button type={"submit"}>Submit</button>
            </form>
        </>
    )
}