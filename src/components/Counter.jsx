import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
export default class Counter extends Component {
    state = {
        count: 0
    };
    increase = () => {
        this.setState({count: this.state.count + 1});
    };
    decrease = () => {
        this.setState({count: this.state.count - 1});
    };
    render() {
        return (
            <div>
                <h2>This is counter component</h2>
                <div>{this.state.count}</div>
                <button onClick={this.increase}>+</button>
                <Button onClick={this.decrease}  variant="primary">Primary</Button>
            </div>
        );
    }
}
