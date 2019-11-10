import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div>
        <header className="App-header">
          <h1 className="App-title">Cinema Ticket System</h1>

          <div className="nav-links">
            <Link to="/">Home</Link>| <Link to="/about">About</Link>
          </div>
        </header>
      </div>
      <div>
        <img
          className="App-logo"
          src="https://cdn.pixabay.com/photo/2016/12/13/14/56/stars-1904262_960_720.png"
        />
      </div>
    </div>
  );
}
