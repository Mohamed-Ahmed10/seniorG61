import React, {Component} from "react";
import {Col, Container, Row, Form, Button} from "react-bootstrap";

export default class HomeTwo extends Component {
    state = {
        username: "",
        show: false
    };
    handleUsername = (ev) => {
        this.setState({username: ev.target.value});
    };
    sayHello = () => {
        this.setState({show: true});
    };
    render() {
        return (
            <div className="m-5">
                <Container>
                    <Row>
                        {this.state.show ? (
                            <Col>Hello {this.state.username}</Col>
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
                                            onChange={this.handleUsername}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Button
                                        variant="primary"
                                        onClick={this.sayHello}
                                    >
                                        Say hello
                                    </Button>
                                </Col>
                            </>
                        )}
                    </Row>
                </Container>
            </div>
        );
    }
}
