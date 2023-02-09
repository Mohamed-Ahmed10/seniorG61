import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";

function SiteNav() {
    return (
        <Navbar bg="dark" variant="dark" className="site_nav">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="ms-auto">
                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-link" to="/home2">
                        Home two
                    </NavLink>
                    <NavLink className="nav-link" to="/about">
                        About
                    </NavLink>
                    <NavLink className="nav-link" to="/contact">
                        Contact
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default SiteNav;
