import React, {Component} from "react";

export default class Frontend extends Component {
    // constructor(props) {
    //     super(props);

    //     this.handleUsername = this.handleUsername.bind(this);
    // }
    state = {
        username: "Mohamed Ahmed"
    };

    handleUsername = () => {
        // this.state.username = "Ali"; ERROR

        this.setState({username: "Ali"});
        console.log(this);
    };

    render() {
        return (
            <div>
                <h2>Frontend</h2>
                <div>{this.state.username}</div>
                <button onClick={this.handleUsername}>Change</button>
            </div>
        );
    }
}
