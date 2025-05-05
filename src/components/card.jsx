import '../card.css';
import { useState } from "react";
import Pop from "./Popup";

function Card(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [popupInfo, setPopupInfo] = useState({ title: "", info: "" });
  
    const handleOpen = () => {
      setPopupInfo({
        title: props.title,
        info: props.func,
      });
      setIsOpen(true);
    };
  
    return (
      <div className="project relative">
        <div onClick={handleOpen} className="cursor-pointer">
          <h2 className="project-title">{props.title}</h2>
          <img src={props.screenshot} alt="a screenshot" className="project-screenshot" />
        </div>
        <a href={props.github} className="project-github">{props.github}</a>
        <ul className="project-tech flex gap-2">{props.tech.map((item, index) => (<li key={index}>#{item}</li>))}</ul>
        <ul className="project-info">
          <li className="project-info__item fun">{props.func}</li>
          {props.lesson && <li className="project-info__item"><span>Lesson learned: </span>{props.lesson}</li>}
          <li className="project-info__item">{props.role}</li>
          {props.challenge && <li className="project-info__item"><span>Challenges overcome: </span>{props.challenge}</li>}
        </ul>
        {isOpen && (<Pop onClose={() => setIsOpen(false)} popupInfo={popupInfo} />)}
      </div>
    );
  }
  
export default Card;








