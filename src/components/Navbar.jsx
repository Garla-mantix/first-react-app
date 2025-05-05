import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="z-50">
                <ul className="flex gap-10 p-10 br-10">
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li><Link to="/portfolio">Show projects</Link></li>
                </ul>
            </nav>
        </div>
        
    )
}

export default Navbar;