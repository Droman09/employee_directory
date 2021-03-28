import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link" to="/main">Main <span className="sr-only">(current)</span></Link>
      <Link className="nav-item nav-link" to="/search">Search</Link>
      
    </div>
  </div>
</nav>
    )
}


export default Navbar