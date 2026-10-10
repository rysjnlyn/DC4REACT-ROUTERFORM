function Skills() {
    const skills = ["HTML", "CSS", "JavaScript"];
    return (
        <div>
            <h1>Skills(I know {skills.length} skills)</h1>
            <ul>
                <li>{skills[0]}</li>
                <li>{skills[1]}</li>
                <li>{skills[2]}</li>
            </ul>
        </div>
    )
}
export default Skills