import screenshot1 from "../assets/typing-game.png";
import screenshot2 from "../assets/genesis-project.png";
import screenshot3 from "../assets/bank.png";
import '../Portfolioproject.css';

function Portfolioproject(props) {

    return (
        <div className="project">
             <h2 className="project-title">{props.name}</h2>
            <img src={props.screenshot} alt="a screenshot" className="project-screenshot" />
            <a href={props.github} className="project-github">{props.github}</a>
            <p className="project-tech">{props.tech}</p>
            <ul className="project-info">
                <li className="project-info__item">{props.func}</li>
                <li className="project-info__item">{props.lesson}</li>
                <li className="project-info__item">{props.role}</li>
                <li className="project-info__item">{props.challenge}</li>
            </ul>
        </div>
    );
}

export default Portfolioproject;