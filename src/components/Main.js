import React from "react";
// import ReactLogoB from "../images/reactjs-icon 2.png"
export function MainContent() {
    return (
        <div className="MainContent">
            <h1>Fun facts about React</h1>
            {/*<nav className="SubContent">*/}
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
                {/*<img src={ReactLogoB} alt="React logo"/>*/}
            {/*</nav>*/}
            {/*<otherDetails>*/}
            {/*    <details>*/}
            {/*        <summary>I have keys but no doors. I have space but no room. You can enter but can’t leave. What am I?</summary>*/}
            {/*        A keyboard. and very many other things that should be included in this story such as some items and other items plus some more stories which I will not speak about becuase things are difficult and I do not understand*/}
            {/*    </details>*/}
            {/*    <details>*/}
            {/*        <summary>My story</summary>*/}
            {/*        More information*/}
            {/*    </details>*/}
            {/*</otherDetails>*/}


        </div>
    )
}
