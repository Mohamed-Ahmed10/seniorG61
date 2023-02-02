import React, {Component} from "react";

export default class Frontend extends Component {
    state = {
        courses: [
            {courseName: "HTML", order: 1, finish: true},
            {courseName: "JS", order: 3, finish: true},
            {courseName: "React", order: 7, finish: false}
        ]
    };

    render() {
        return (
            <div>
                <h2>Frontend</h2>
                {this.state.courses.map((course, index) => (
                    <div key={index}>
                        <h3>{course.courseName}</h3>
                        <h4>{course.order}</h4>
                        <hr />
                    </div>
                ))}
            </div>
        );
    }
}
