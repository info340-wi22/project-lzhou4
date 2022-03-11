import React from "react";
import { Link } from "react-router-dom";

export function AboutNav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <nav className="navbar ">
                    <img className="nav-icon" src="img/yummy_icon-removebg-preview.png" alt="navigation bar brand" width="50"
                        height="50" />
                </nav>
                <Link className="navbar-brand" to="/">Moody Foodies</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <p className="navbar-center pt-4">What Food is your Mood?</p>
                    <ul className="navbar-nav" id="navigationLinks">
                        <li><Link className="nav-link" to="/app">APP</Link></li>
                        <li><Link className="nav-link" to="/AboutPage">ABOUT</Link></li>
                        <li><Link className="nav-link" to="/share">SHARE</Link></li>
                        <li><Link className="nav-link" to="/MyPage">MY PAGE</Link></li>
                        <li><Link className="nav-link" data-toggle="collapse" data-target="#collapseForm" aria-expanded="true" 
                        aria-controls="collapseForm" to="#collapseForm">SIGN IN</Link></li>
                    </ul>
                </div>
            </nav >
        </div>
    )
}
