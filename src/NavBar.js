import React from "react";
import { Link } from "react-router-dom";

export function AboutNav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <nav className="navbar ">
                    <img className="nav-icon" src="img/yummy_icon-removebg-preview.png" alt="navigation bar brand" width="50"
                        height="50" />
                </nav>
                <Link className="navbar-brand" to="/">Moody Foodies</Link>
            </nav >
        </div>
    )
}
