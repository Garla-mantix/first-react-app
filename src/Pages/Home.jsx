import Navbar from "../components/Navbar";
import Projects from "./Projects";
import { useState } from "react";
import Hero from "../components/Hero";

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
            <Hero />
            {visa &&  <Projects  />}
        </div>
    )
}

export default Home;