import "./App.scss";
import Counter from "./components/Counter";
import DataParent from "./components/DataParent";
import Frontend from "./components/Frontend";
import SiteNav from "./components/SiteNav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
    return (
        <div>
            <SiteNav />
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        1 of 3
                    </Col>
                    <Col xs={6}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
            <Frontend />
            <hr />
            <Counter />
            <hr />
            <DataParent />
        </div>
    );
}

export default App;
