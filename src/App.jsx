import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";

function App() {

  return (
    <BrowserRouter>
     <Navbar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
   </Routes>
    </BrowserRouter>
   
  )
}

export default App
