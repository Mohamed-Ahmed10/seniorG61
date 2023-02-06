import React, {Component} from "react";

export default class DataView extends Component {
    state = {
        courseName: "React course"
    };

    handleCourse = (event) => {
        this.setState({courseName: event.target.value});
    };
    componentDidMount() {
        console.log("Rendered");
    }
    componentDidUpdate() {
        console.log("updated");
    }
    componentWillUnmount() {
        console.log("Removed");
    }
    render() {
        return (
            <div className="dataContainer">
                <input
                    type="text"
                    value={this.state.courseName}
                    onChange={this.handleCourse}
                    className="dataInput"
                />
                <div>{this.state.courseName}</div>
            </div>
        );
    }
}
