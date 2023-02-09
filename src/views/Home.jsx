import {useState} from "react";
import {Col, Container, Row, Form, Button} from "react-bootstrap";

const Home = () => {
    var [username, setUsername] = useState("");
    var [show, setShow] = useState(false);

    var handleUsername = (ev) => {
        setUsername(ev.target.value);
    };
    var sayHello = () => {
        setShow(true);
    };
    return (
        <div className="m-5">
            <Container>
                <Row>
                    {show ? (
                        <Col>
                            <h2>Hello {username}</h2>
                        </Col>
                    ) : (
                        <>
                            <Col md={9}>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Please enter your name"
                                        autoComplete="off"
                                        onChange={handleUsername}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Button variant="primary" onClick={sayHello}>
                                    Say hello
                                </Button>
                            </Col>
                        </>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default Home;
