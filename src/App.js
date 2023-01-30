import myLogo from "./logo.svg";
import "./App.css";
import {SecondNav} from "./components/Navbar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
    var myName = "Mohamed Ahmed";
    return (
        <>
            <Navbar />
            <SecondNav />
            <div className="App">
                Hello react
                <img src={myLogo} alt="test" width={200} />
                <div>{myName}</div>
                <input type="text" />
            </div>
            <span></span>
            <Header />
        </>
    );
}

export default App;
