import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper navbar">
                <div className="container">
                <Link to="/" className="brand-logo">Mohit Sharma</Link>
                    <ul className="right hide-on-med-and-down">
                        <li className="current"><a href="#intro" title="">Home</a></li>
                        <li><a href="#about" title="" >About</a></li>
                        <li><a href="#resume" title="">Resume</a></li>
                        <li><a href="#portfolio" title="">Projects</a></li>
                        <li><a href="#contact" title="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;