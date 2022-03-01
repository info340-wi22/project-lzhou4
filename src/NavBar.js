import React from "react";

export function AboutNav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <nav className="navbar ">
                    <img className="nav-icon" src="img/yummy_icon-removebg-preview.png" alt="navigation bar brand" width="50"
                        height="50" />
                </nav>
                <a className="navbar-brand" href="#">Moody Foodies</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" id="navigationLinks">
                        <li><a className="nav-link" href="#">APP</a></li>
                        <li><a className="nav-link" href="#">SHARE</a></li>
                        <li><a className="nav-link" href="#">MY PAGE</a></li>
                        <li><a className="nav-link" data-toggle="collapse" data-target="#collapseForm" aria-expanded="true" 
                        aria-controls="collapseForm" href="#collapseForm">SIGN IN</a></li>
                    </ul>
                </div>
            </nav >
        </div>
    )
}
