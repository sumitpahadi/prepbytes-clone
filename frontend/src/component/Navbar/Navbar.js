import { useState } from "react";
import React from "react";
import "../Style.css";

import { Link } from "react-router-dom";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg"
          alt="click here"
        />
      </div>
      <div className="nav">
        <div className="auth">
          <button className="login">Login</button>
          <button className="signup">Signup</button>
        </div>

        <div className="menubar">
          <ul class="menu">
            <li class="dropdown dropdown-toggle">
              Study Material
              <ul class="dropdown-content ">
                <li>
                  <Link to={"mock_test"} onClick={closeMenu}>Mock Test</Link>
                </li>
                <li>
                  <Link to={"/video"} onClick={closeMenu}>Video Tutorial</Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul>
            <li class="dropdown dropdown-toggle">
              Course and Program
              <ul class="dropdown-content ">
                <li>
                  <Link to={"/master_comp"} onClick={closeMenu}>
                    Master Competitive Programming
                  </Link>
                </li>
                <li>
                  <Link to={"/full_stack"} onClick={closeMenu}>Full Stack Program</Link>
                </li>
              </ul>
            </li>
          </ul>
       
          <ul>
            <Link
              to={"/elevation"}
              style={{ textDecoration: "none", color: "black" }}
              onClick={closeMenu}>
              <li>Elevation Academy</li>
            </Link>
          </ul>

          <ul>
            <li class="dropdown dropdown-toggle">
              Project
              <ul class="dropdown-content ">
                <li>
                  <Link to={"html"} onClick={closeMenu}>HTML</Link>
                </li>
                <li>
                  <Link to={"/css"} onClick={closeMenu}> CSS</Link>
                </li>
                <li>
                  <Link to={"/javascript"} onClick={closeMenu}>Javascript</Link>
                </li>
                <li>
                  <Link to={"/reactjs"} onClick={closeMenu}>React</Link>
                </li>
                <li>
                  <Link to={"/node"} onClick={closeMenu}>Node</Link>
                </li>
                <li>
                  <Link to={"/mongodb"} onClick={closeMenu}>Mongodb</Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>User</li>
          </ul>
        </div>
      </div>

      {/* ------------second nav--------------- */}
      <button
        className="navbar-toggler hamburger"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(!menuOpen)} 
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {menuOpen ? (
        <div className="menubar2">
          <ul>
            <Link to={"/master_comp"}  style={{ textDecoration: "none", color: "black" }}>
              <li onClick={closeMenu}>Master Competitive Programming</li>
            </Link>
          </ul>
          <ul>
            <Link to={"/full_stack"}  style={{ textDecoration: "none", color: "black" }}>
              <li onClick={closeMenu}>Full Stack Program</li>
            </Link>
          </ul>
          <ul>
            <Link to={"/elevation"}  style={{ textDecoration: "none", color: "black" }}>
              <li onClick={closeMenu}>Elevation Academy</li>
            </Link>
          </ul>

          <ul>
            <Link to={"/mock_test"}  style={{ textDecoration: "none", color: "black" }}>
              <li onClick={closeMenu}>Mock Tests</li>
            </Link>
          </ul>
          <ul>
            <Link to={"/video"}  style={{ textDecoration: "none", color: "black" }}>
              <li onClick={closeMenu}>Video Tutorial</li>
            </Link>
          </ul>

          <ul style={{ color: "#ff219f" }}>
            <li>Login/signup</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
