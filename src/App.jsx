import {ToggleText} from "./components/ToggleText.jsx";
import {LiveInput} from "./components/LiveInput.jsx";
import {ColorText} from "./components/ColorText.jsx";
import {Counter} from "./components/Counter.jsx";

function App() {
    return (
        <div className="App">
            <Counter/>
            <ToggleText/>
            <LiveInput/>
            <ColorText/>
        </div>
    )
}

export default App