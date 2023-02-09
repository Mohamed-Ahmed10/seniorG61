import {Route, Routes} from "react-router-dom";
import "./App.scss";
import About from "./views/About";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Error from "./views/Error";
import SiteNav from "./components/SiteNav";
import HomeTwo from "./views/HomeTwo";
function App() {
    return (
        <div>
            <SiteNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home2" element={<HomeTwo />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
