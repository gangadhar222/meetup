import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="container">
      <div>
          <h2 className="h2"><Link to="/" className="link">meetup</Link></h2>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/search" className="link">
              Search
            </Link>
          </li>
          <li>
            <Link to="/reports" className="link">
              Reports
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
