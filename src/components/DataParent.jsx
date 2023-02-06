import React, {Component} from "react";
import DataView from "./DataView";
import Button from "react-bootstrap/Button";

export default class DataParent extends Component {
    state = {
        valid: false
    };

    changeValidation = () => {
        this.setState({valid: !this.state.valid});
    };
    render() {
        return (
            <div>
                <h2>Data parent</h2>
                <Button variant="danger" onClick={this.changeValidation}>
                    {this.state.valid ? "Hide" : "Show"}
                </Button>

                {this.state.valid && <DataView /> }

            </div>
        );
    }
}
