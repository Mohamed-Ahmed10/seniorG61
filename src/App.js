import "./App.css";
import Header from "./components/Header";
import SiteLogo from "./assets/logo.svg";
import Course from "./components/Course";
import Frontend from "./components/Frontend";
function App() {
    return (
        <div>
            Hello session three
            <Header />
            <img src={SiteLogo} alt="This is " width="200" />
            <hr />
            <Course courseName="JS" track="frontend" />
            <Course courseName="PHP" track="backend" />
            <Course courseName="React" track="frontend" />

            <Frontend />

        </div>
    );
}

export default App;
