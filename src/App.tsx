import * as React from "react";
import logo from "./assets/dababy.png";
import "./App.css";
import Datopnav from "./components/topnav";
import GlobalStyle from "./Global";

function App() {
  return (
    <div className="App">
      <Datopnav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <GlobalStyle />
    </div>
  );
}

export default App;
