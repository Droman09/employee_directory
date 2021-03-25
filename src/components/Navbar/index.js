import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Employee Directory</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link" to="/main">Main <span className="sr-only">(current)</span></Link>
      <Link className="nav-item nav-link" to="/directory">Directory</Link>
      <Link className="nav-item nav-link" to="/search">Search</Link>
      
    </div>
  </div>
</nav>
    )
}


export default Navbar