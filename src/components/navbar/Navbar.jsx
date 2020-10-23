import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="container">
      <div>
          <h2 className="h2"><Link to="/" className="link"><b>meetup</b></Link></h2>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/search" className="link">
              <b>Search</b>
            </Link>
          </li>
          <li>
            <Link to="/reports" className="link">
              <b>Reports</b>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
