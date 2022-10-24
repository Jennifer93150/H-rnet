import { React } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
        <header className="home-header">
        
            <Link className="home-link fs-3 text" to="/">HRnet</Link>
            <Link className="home-link fs-3 text" to="/employees">View Current Employees</Link>
            
        </header>
    </div>
  )
}
