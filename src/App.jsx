import {UserCard} from "./components/UserCard.jsx";

function App() {
    return (
        <div>
            <UserCard
                name="Павел"
                role="Frontend-разработчик"
                experience={3}
                location={{ city: "Минск", country: "Беларусь" }}
                isAvailable={true}
            />
            <UserCard
                name="Вика"
                role="Frontend-разработчик"
                experience={0}
                location={{ city: "Алматы", country: "Казахстан" }}
                isAvailable={true}
            />
            <UserCard
                name="Андрей"
                role="Data-инженер"
                experience={3}
                location={{ city: "Алматы", country: "Казахстан" }}
                isAvailable={false}
            />
        </div>
    )
}

export default App