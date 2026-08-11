export const InputPractice = () => {

    return (
        <>
            <input type='text'
                   onChange={(e) => console.log('e.target.value', e.target.value)}
                   onFocus={() => console.log('Поле получило фокус')}
                   onBlur={() => console.log('Поле потеряло фокус')}
                   onKeyDown={(event) => event.key === 'Enter' && console.log('Нажат Enter')}
            />
        </>
    )
}