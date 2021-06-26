import * as React from "react";
import "./topnav.css";
import logo from "../assets/dababy.png";
import Button from "@material-ui/core/Button";
const datopnav = () => {
  return (
    <header className="Header">
      <img
        src={logo}
        alt="Company Logo"
        className="logo"
      />
      <div className="name">Dababymail</div>

      <nav className="right Nav">
        <a href="/">For Rappers</a>
        <a href="/">Sign in</a>
        <a href="/">
          <Button variant="contained" size="large" color="primary">
            Get started
          </Button>
        </a>
      </nav>
    </header>
  );
};
export default datopnav;
