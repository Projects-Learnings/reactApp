import React from "react";

export function Header() {
    return (
        <header className="Header">
            <nav className="nav">
                <img src="/images/react-logo.png" alt="react logo" className="logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
