// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
import {Nav} from "./Nav";
import {MainContent} from "./Main";
import {Footer} from "./Footer";
//import React from "@types/react";

export function App() {
    return (
        <div>
            <Nav />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App;