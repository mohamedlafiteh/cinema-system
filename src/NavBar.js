import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">Cinema Ticket System</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>| <Link to="/about">About</Link>
        </div>
      </header>
    </div>
  );
}
