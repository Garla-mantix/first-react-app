import Navbar from "../components/Navbar";
import Projects from "./Projects";
import { useState } from "react";

function Home() {

    const [visa, setVisa] = useState(false);
   

    const toggleVisa = () =>  {
        if (visa) {
            setVisa(false)
        }
        else {
            setVisa(true)
        };
    };
    
    return (
        <div>
            <h1>Home</h1>
            <button className="project-btn" onClick={toggleVisa}>Click me</button>
            {visa &&  <Projects  />}
        </div>
      
        
    )
}

export default Home;