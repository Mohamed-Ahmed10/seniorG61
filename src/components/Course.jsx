function Course(props, {courseName, track}) {
    return (
        <div>
            <h2>This is my course : {courseName} </h2>
            <h3>{track}</h3>
            {console.log(props)}
        </div>
    );
}

export default Course;
