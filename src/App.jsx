import {UserProfile} from "./components/UserProfile.jsx";
import {TaskList} from "./components/TaskList.jsx";
import {ItemCart} from "./components/ItemCart.jsx";

function App() {
    return (
        <div className="App">
            <UserProfile/>
            <TaskList/>
            <ItemCart/>
        </div>
    )
}

export default App