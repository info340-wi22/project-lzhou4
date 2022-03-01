import React from "react";

export function Footer() {
    return (
        <div>
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <a className="nav-link" href="#">App</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sign In</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Share</a>
                </li>
            </ul>
            <p className="text-center">&copy; 2022 Moody Foodies</p>
        </div>
    )
}