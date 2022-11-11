import { React } from "react";
import { Link } from "react-router-dom";

/** styles */
import "../style/navbar.css";

export default function Navbar() {
  return (
    <div>
        <header className="header">
          <Link className="link" to="/">HRnet</Link>
          <Link className="link" to="/employees">View Current Employees</Link>
        </header>
    </div>
  )
}
