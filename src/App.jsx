function Header() {
    return <header>
        <h1>JSX и компоненты</h1>
    </header>
}

function Section() {
    return <section>
        <h3>Заголовок</h3>
        <p>Статический текст 1</p>
        <p>Статический текст 1</p>
    </section>
}

function MainContent() {
    return (
        <>
            <main><h2>Основное содержимое страницы</h2></main>
            <Section/>
        </>
    )
}

function Footer() {
    return <footer>2026г.</footer>
}

function App() {
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

export default App