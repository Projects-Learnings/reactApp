import React from "react";
import Logo from "../images/react-logo.png"

export function Nav() {
    return (
        <header className="Header">
            <nav className="nav">
                <img src={Logo} alt="react logo" className="logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
