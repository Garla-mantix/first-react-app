import React from "react";
import Card from "../components/card";
import Popup from "../components/Popup";
import { useState } from "react";
import screenshot1 from "../assets/typing-game.png";
import screenshot2 from "../assets/genesis-project.png";
import screenshot3 from "../assets/bank.png";

const Portfolio = () => {
  const [preview, setPreview] = useState(false);
  const [previewBtn, setPreviewBtn] = useState("Show projects");
  const [search, setSearch] = useState("");
  const [popup, setPopup] = useState(false);
  const [popupData, setPopupData] = useState({});

  const projects = [
    {
      title: "Typing game", 
      screenshot: (screenshot1),
      github: "https://github.com/Garla-mantix/js-seventh-assignment.git",
      tech: ["Javascript", "CSS"],
      func: "A fun little game that makes you spell random words against the clock.",
      lesson: "Taught me to use user input to affect the backend and show it back on the screen.",
      challenge: "Randomizing words to create re-playability, creating an up to date score-tracker and timer, putting user input to use.",
    },
    {
      title: "Genesis project",
      screenshot: (screenshot2), 
      github: "https://github.com/Garla-mantix/genesis-portfolio.git",
      tech: ["Javascript", "SCSS"],
      func: "A functional website for a portfolio.",
      lesson: "Taught me to execute a design from Figma and make it into a reality.",
      challenge: "Recreating design from Figma, making a dynamic user experience with responsive design.",
    },
    {
      title: "Bank app",
      screenshot: (screenshot3),
      github: "https://github.com/Garla-mantix/js-fifth-assignment.git", 
      tech: ["Javascript", "HTML"],
      func: "A simple banking app that allows you to deposit and withdraw money from your account.",
      lesson: "Taught me to display the effects of user input.",
      challenge: "Using the most basic tools to create a functioning app with an intuitive user experience.",
    },
  ];

  const changePreview = () => {
    setPreview(!preview);
    if (!preview) {
      setPreviewBtn("Hide projects");
    } else {
      setPreviewBtn("Show projects")
    }
  };

  const showPopup = (index) => {
    setPopup(true);
    setPopupData({
      title: projects[index].title,
      func: projects[index].func,
      tech: projects[index].tech,
    });
  };

  const closePopup = () => {
    setPopup(false);
  };

  return (
  <div>
    <h2 className="text-3xl font-semibold text-center">My Projects</h2>
    <div className="flex justify-center mt-8 max-w-7x1 mx-auto">
      <input type="text" className="border border-gray-300 rounded-lg px-4 py-2" placeholder="Search for tech..." value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
    <div className="flex justify-center mt-8 flex-wrap max-w-7x1 mx-auto">
      {projects.filter((item) => (item.tech.some((tech) => tech.toLowerCase().includes(search.toLowerCase())))).map((item, index) => (
        <Card key={index} 
        title={item.title} 
        tech={item.tech} 
        screenshot={item.screenshot}
        github={item.github}
        func={item.func}
        lesson={item.lesson}
        role={item.role}
        challenge={item.challenge}
          />))}
    </div>
  </div>
  );
};

export default Portfolio;