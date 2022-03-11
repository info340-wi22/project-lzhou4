import React from "react";

export function Footer() {
    return (
        <div>
            <h4>Contact the Team</h4>
            <ul className="nav justify-content-left d-block">
                <li className="nav-item ">
                    <a href="mailto:zhou4@uw.edu">Angel Zhou</a>
                </li>
                <li className="nav-item">
                    <a href="mailto:alya2@uw.edu">Asigiah Aly</a>
                </li>
                <li className="nav-item">
                    <a href="mailto:jennysun@uw.edu">Jenny Sun</a>
                </li>
            </ul>
            <p className="text-center">&copy; Moody Foodies | INFO 340 - Group A2 | 2022 </p>
        </div>
    )
}