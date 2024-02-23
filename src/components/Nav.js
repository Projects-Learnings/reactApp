import React from "react";
import Logo from "../images/react-logo.png"

export function Nav() {
    return (
        <header className="Header">
            <nav className="nav">
                <div className="logoBox">
                    <img src={Logo} alt="react logo" className="logo"/>
                    <h3 className="reactFacts">ReactFacts</h3>
                </div>

               <h4>React Course - Project 1</h4>
            </nav>
        </header>
    )
}
