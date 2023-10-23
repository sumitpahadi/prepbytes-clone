import { useState } from "react";
import React from "react";
import "../Style.css";

import { Link } from "react-router-dom";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toogle = () => {
    setMenuOpen(!menuOpen);
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
                  <Link to={"mock_test"}>Mock Test</Link>
                </li>
                <li>
                  <Link to={"/video"}>Video Tutorial</Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul>
            <li class="dropdown dropdown-toggle">
              Course and Program
              <ul class="dropdown-content ">
                <li>
                  <Link to={"/master_comp"}>
                    Master Competitive Programming
                  </Link>
                </li>
                <li>
                  <Link to={"/full_stack"}>Full Stack Program</Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>Practice Coding</li>
          </ul>
          <ul>
            <Link
              to={"/elevation"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <li>Elevation Academy</li>
            </Link>
          </ul>

          <ul>
            <li class="dropdown dropdown-toggle">
              Blog
              <ul class="dropdown-content ">
                <li>
                  <Link to={"html"}>HTML</Link>
                </li>
                <li>
                  <Link to={"/css"}> CSS</Link>
                </li>
                <li>
                  <Link to={"/javascript"}>Javascript</Link>
                </li>
                <li>
                  <Link to={"/reactjs"}>React</Link>
                </li>
                <li>
                  <Link to={"/node"}>Node</Link>
                </li>
                <li>
                  <Link to={"/mongodb"}>Mongodb</Link>
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
        onClick={toogle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {menuOpen ? (
        <div className="menubar2">
          <ul>
            <Link to={"/master_comp"}  style={{ textDecoration: "none", color: "black" }}>
              <li>Master Competitive Programming</li>
            </Link>
          </ul>
          <ul>
            <Link to={"/full_stack"}  style={{ textDecoration: "none", color: "black" }}>
              <li>Full Stack Program</li>
            </Link>
          </ul>
          <ul>
            <Link to={"/elevation"}  style={{ textDecoration: "none", color: "black" }}>
              <li>Elevation Academy</li>
            </Link>
          </ul>

          <ul>
            <Link to={"/mock_test"}  style={{ textDecoration: "none", color: "black" }}>
              <li>Mock Tests</li>
            </Link>
          </ul>
          <ul>
            <Link to={"/video"}  style={{ textDecoration: "none", color: "black" }}>
              <li>Video Tutorial</li>
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
