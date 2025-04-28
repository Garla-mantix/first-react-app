import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="z-50">
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li><Link to="/projects">Show projects</Link></li>
                </ul>
            </nav>
        </div>
        
    )
}

export default Navbar;