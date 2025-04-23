
import '../Portfolioproject.css';

function Portfolioproject(props) {
    let name = "project title";
    let github = "project github";
    let tech = "project tech";
    let func = "This is what the project does";
    let lesson = "This is what I learned";
    let role = "This was my role during the project";
    let challenge = "I overcame the following challenges";

    return (
        <div className="project">
             <h2 className="project-title">{props.name}</h2>
            <img src="{screenshot}" alt="a screenshot" className="project-screenshot" />
            <p className="project-github">{props.github}</p>
            <p className="project-tech">{props.tech}</p>
            <ul className="project-info">
                <li className="project-info__function">{props.func}</li>
                <li className="project-info__lessons">{props.lesson}</li>
                <li className="project-info__role">{props.role}</li>
                <li className="project-info__challenges">{props.challenge}</li>
            </ul>
        </div>
    );
}

export default Portfolioproject;