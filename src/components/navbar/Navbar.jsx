import React from 'react';
import './navbar.css'

export default function Navbar() {
    return (
        <div className="container">
            <div>
                <h2 className="h2">meetup</h2>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        Search
                    </li>
                    <li>
                        Reports
                    </li>
                </ul>
            </nav>
        </div>
    )
}
