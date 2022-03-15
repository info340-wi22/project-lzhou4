import React from "react";

export function Footer() {
    return (
        <div className='footer-page'>
            <h2>Contact the Team</h2>
            {/* <div class="material-icons" aria-label="email icon">email</div> */}
            <ul className="nav justify-content-left d-block">
                <li className="name ">
                    <a href="mailto:zhou4@uw.edu">Angel Zhou</a>
                </li>
                <li className="name">
                    <a href="mailto:alya2@uw.edu">Asigiah Aly</a>
                </li>
                <li className="name">
                    <a href="mailto:jennysun@uw.edu">Jenny Sun</a>
                </li>
            </ul>
            <p className="text-center">&copy; Moody Foodies | INFO 340 - Group A2 | 2022 </p>
        </div>
    )
}