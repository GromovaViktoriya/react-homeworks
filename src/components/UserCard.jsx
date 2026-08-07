import {StatusBadge} from "./StatusBadge.jsx";
import {Card} from "./Card.jsx";

export const UserCard = ({
    name,
    role,
    experience,
    location,
    isAvailable,
}) => {
    let years = experience === 1
        ? 'год'
        : experience >= 2 && experience <= 4
            ? 'года'
            : experience === 0 || experience >= 11 && experience <= 20?
                'лет' : 'год'

    return (
        <div className="card">
            <Card>
                <p>{name}</p>
                <p>{role}</p>
                <p>Опыт: {experience} {years}</p>
                <p>{location.city}, {location.country}</p>
            </Card>
            <StatusBadge isAvailable={isAvailable} />
        </div>
    )
}