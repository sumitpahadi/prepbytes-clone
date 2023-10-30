import React from "react";
import "../Style.css";
import axios from "axios";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [verified, setVerified] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const username = localStorage.getItem("username");
  const userfirstname = localStorage.getItem("firstname");
  const userid = localStorage.getItem("userid");

  const handletoken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("cartData");
    localStorage.removeItem("firstname");
    localStorage.removeItem("username");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token); // Update token state

    if (token) {
      axios
        .get("https://prepbytes.onrender.com/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setVerified(true);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      setVerified(false);
    }
  }, [token]);
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
        {username ? (
          <div className="auth"></div>
        ) : (
          <div className="auth">
            <Link to={"/login"}>
              {" "}
              <button className="login">Login</button>
            </Link>
            <Link to={"/signup"}>
              {" "}
              <button className="signup">Signup</button>
            </Link>
          </div>
        )}

        <div className="menubar">
          <ul class="menu">
            <li class="dropdown dropdown-toggle">
              Study Material
              <ul class="dropdown-content " style={{backgroundColor:"white",fontWeight:"bold"}} >
                <li>
                  <Link to={"mock_test"} onClick={closeMenu} style={{ color:"#929292",fontSize:"13px"}}>
                    Mock Test
                  </Link>
                </li>
                <li>
                  <Link to={"/video"} onClick={closeMenu} style={{ color:"#929292",fontSize:"13px"}}>
                    Video Tutorial
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul >
            <li class="dropdown dropdown-toggle">
              Course and Program
              <ul class="dropdown-content " style={{backgroundColor:"white",fontWeight:"bold"}}>
                <li>
                  <Link to={"/master_comp"} onClick={closeMenu} style={{ color:"#929292",fontSize:"13px",}}>
                    Master Competitive Programming
                  </Link>
                </li>
                <li>
                  <Link to={"/full_stack"} onClick={closeMenu} style={{ color:"#929292",fontSize:"13px"}}>
                    Full Stack Program
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul>
            <Link
              to={"/elevation"}
              style={{ textDecoration: "none", color: "black" }}
              onClick={closeMenu}
            >
              <li>Elevation Academy</li>
            </Link>
          </ul>

          <ul>
            <li class="dropdown dropdown-toggle">
              Project
              <ul class="dropdown-content project-we-create" style={{ color:"#929292",fontSize:"13px",backgroundColor:"white",fontWeight:"bold"}}>
                <li>
                  <Link to={"html"} onClick={closeMenu} style={{ color:"#929292",fontSize:"13px"}}>
                    HTML
                  </Link>
                </li>
                <li>
                  <Link to={"/css"} onClick={closeMenu} style={{ color:"#929292",fontSize:"13px"}}>
                    {" "}
                    CSS
                  </Link>
                </li>
                <li>
                  <Link to={"/javascript"} onClick={closeMenu} style={{ color:"#929292",fontSize:"13px"}}>
                    Javascript
                  </Link>
                </li>
                <li>
                  <Link to={"/reactjs"} onClick={closeMenu} style={{ color:"#929292",fontSize:"13px"}}>
                    React
                  </Link>
                </li>
                <li>
                  <Link to={"/node"} onClick={closeMenu} style={{ color:"#929292",fontSize:"13px"}}>
                    Node
                  </Link>
                </li>
                <li>
                  <Link to={"/mongodb"} onClick={closeMenu} style={{ color:"#929292",fontSize:"13px"}}>
                    Mongodb
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              <div class="dropdown" dropdown-toggle>
                {username ? (
                  <>
                    <div
                      className="username  "
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <h4>{username}</h4>
                      <p>Hi {userfirstname}</p>
                    </div>
                    <ul class="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          href="#"
                          to={"/dashboard"}
                          style={{ color:"#929292",fontSize:"13px",fontWeight:"bold"}}>
                          <img
                            style={{ paddingRight: "10px" }}
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4yMjMiIGhlaWdodD0iMjIuODg4IiB2aWV3Qm94PSIwIDAgMTkuMjIzIDIyLjg4OCI+CiAgPGcgaWQ9InJlYWRpbmctYm9vayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQwLjk5NCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMSIgZGF0YS1uYW1lPSJQYXRoIDEiIGQ9Ik02MC4yMTcsMTQuNzUyYTIuMjM5LDIuMjM5LDAsMCwwLTEuNzg4LTIuMTlWMTAuMTQ4YS42NzEuNjcxLDAsMCwwLS45MDYtLjYyOGwtMS4yOC40OGE3LjgxOCw3LjgxOCwwLDAsMC0yLjk4MS0xLjkzNiw0LjQ3LDQuNDcsMCwxLDAtNS4zMTIsMEE3LjgxOCw3LjgxOCwwLDAsMCw0NC45NjgsMTBsLTEuMjgtLjQ4YS42NzEuNjcxLDAsMCwwLS45MDYuNjI4djIuNDE0YTIuMjM1LDIuMjM1LDAsMCwwLDAsNC4zOHYyLjU5M2EuNjcxLjY3MSwwLDAsMCwuNDM1LjYyOGw3LjE1MywyLjY4MmEuNjc4LjY3OCwwLDAsMCwuNDcxLDBsNy4xNTMtMi42ODJhLjY3MS42NzEsMCwwLDAsLjQzNS0uNjI4VjE2Ljk0MkEyLjIzOSwyLjIzOSwwLDAsMCw2MC4yMTcsMTQuNzUyWk00Ny40NzYsNC40N0EzLjEyOSwzLjEyOSwwLDEsMSw1MC42MDUsNy42LDMuMTMzLDMuMTMzLDAsMCwxLDQ3LjQ3Niw0LjQ3Wm0zLjEyOSw0LjQ3YTYuNDcyLDYuNDcyLDAsMCwxLDQuMjQyLDEuNTgybC00LjI0MiwxLjU5MS00LjI0Mi0xLjU5MUE2LjQ3Miw2LjQ3MiwwLDAsMSw1MC42MDUsOC45NDFabS04LjI3LDUuODExYS45LjksMCwwLDEsLjg5NC0uODk0aC40NDd2MS43ODhoLS40NDdBLjkuOSwwLDAsMSw0Mi4zMzUsMTQuNzUyWm0xLjc4OCwyLjIxM2ExLjEyLDEuMTIsMCwwLDAsLjg5NC0xLjFWMTMuNjM1YTEuMTIsMS4xMiwwLDAsMC0uODk0LTEuMVYxMS4xMTVsNS44MTEsMi4xNzlWMjEuMjVsLTUuODExLTIuMTc5Wm03LjE1Myw0LjI4NVYxMy4yOTVsNS44MTEtMi4xNzlWMTIuNTRhMS4xMiwxLjEyLDAsMCwwLS44OTQsMS4xVjE1Ljg3YTEuMTIsMS4xMiwwLDAsMCwuODk0LDEuMXYyLjEwNlptNi43MDYtNS42aC0uNDQ3VjEzLjg1OGguNDQ3YS44OTQuODk0LDAsMCwxLDAsMS43ODhaIiBmaWxsPSIjMDM2Ii8+CiAgPC9nPgo8L3N2Zz4K"
                            alt=""
                          />
                          MY Dashboard
                        </Link>
                        <hr />
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          {" "}
                          {token ? ( // Check if token is in local storage
                            <Link
                              onClick={handletoken}
                              style={{
                                textDecoration: "none",
                                color: "#ff8787",
                              }}
                            >
                              Logout
                            </Link>
                          ) : null}
                        </Link>
                      </li>
                    </ul>
                  </>
                ) : (
                  <li>User</li>
                )}
              </div>
            </li>
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
          {username ? (
            <div>
              <ul>
                <Link
                  to={"/master_comp"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    display: "flex",
                  }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8cGF0aCBpZD0idXNlciIgZD0iTTEwLjUsOEExMC41LDEwLjUsMCwxLDAsMjEsMTguNSwxMC41LDEwLjUsMCwwLDAsMTAuNSw4Wm0wLDQuMDY1QTMuNzI2LDMuNzI2LDAsMSwxLDYuNzc0LDE1Ljc5LDMuNzI2LDMuNzI2LDAsMCwxLDEwLjUsMTIuMDY1Wm0wLDE0LjU2NWE4LjExMyw4LjExMywwLDAsMS02LjItMi44ODgsNC43MjEsNC43MjEsMCwwLDEsNC4xNy0yLjUzMiwxLjAzNiwxLjAzNiwwLDAsMSwuMy4wNDcsNS42MDYsNS42MDYsMCwwLDAsMS43MzIuMjkyLDUuNTg0LDUuNTg0LDAsMCwwLDEuNzMyLS4yOTIsMS4wMzYsMS4wMzYsMCwwLDEsLjMtLjA0Nyw0LjcyMSw0LjcyMSwwLDAsMSw0LjE3LDIuNTMyQTguMTEzLDguMTEzLDAsMCwxLDEwLjUsMjYuNjI5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtOCkiIGZpbGw9IiMwMzYiLz4KPC9zdmc+Cg=="
                    alt=""
                  />
                  <li onClick={closeMenu} style={{ paddingLeft: "10px" }}>
                    user
                  </li>
                </Link>
              </ul>
              <ul>
                <Link
                  to={"/master_comp"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    display: "flex",
                  }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4yMjMiIGhlaWdodD0iMjIuODg4IiB2aWV3Qm94PSIwIDAgMTkuMjIzIDIyLjg4OCI+CiAgPGcgaWQ9InJlYWRpbmctYm9vayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQwLjk5NCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMSIgZGF0YS1uYW1lPSJQYXRoIDEiIGQ9Ik02MC4yMTcsMTQuNzUyYTIuMjM5LDIuMjM5LDAsMCwwLTEuNzg4LTIuMTlWMTAuMTQ4YS42NzEuNjcxLDAsMCwwLS45MDYtLjYyOGwtMS4yOC40OGE3LjgxOCw3LjgxOCwwLDAsMC0yLjk4MS0xLjkzNiw0LjQ3LDQuNDcsMCwxLDAtNS4zMTIsMEE3LjgxOCw3LjgxOCwwLDAsMCw0NC45NjgsMTBsLTEuMjgtLjQ4YS42NzEuNjcxLDAsMCwwLS45MDYuNjI4djIuNDE0YTIuMjM1LDIuMjM1LDAsMCwwLDAsNC4zOHYyLjU5M2EuNjcxLjY3MSwwLDAsMCwuNDM1LjYyOGw3LjE1MywyLjY4MmEuNjc4LjY3OCwwLDAsMCwuNDcxLDBsNy4xNTMtMi42ODJhLjY3MS42NzEsMCwwLDAsLjQzNS0uNjI4VjE2Ljk0MkEyLjIzOSwyLjIzOSwwLDAsMCw2MC4yMTcsMTQuNzUyWk00Ny40NzYsNC40N0EzLjEyOSwzLjEyOSwwLDEsMSw1MC42MDUsNy42LDMuMTMzLDMuMTMzLDAsMCwxLDQ3LjQ3Niw0LjQ3Wm0zLjEyOSw0LjQ3YTYuNDcyLDYuNDcyLDAsMCwxLDQuMjQyLDEuNTgybC00LjI0MiwxLjU5MS00LjI0Mi0xLjU5MUE2LjQ3Miw2LjQ3MiwwLDAsMSw1MC42MDUsOC45NDFabS04LjI3LDUuODExYS45LjksMCwwLDEsLjg5NC0uODk0aC40NDd2MS43ODhoLS40NDdBLjkuOSwwLDAsMSw0Mi4zMzUsMTQuNzUyWm0xLjc4OCwyLjIxM2ExLjEyLDEuMTIsMCwwLDAsLjg5NC0xLjFWMTMuNjM1YTEuMTIsMS4xMiwwLDAsMC0uODk0LTEuMVYxMS4xMTVsNS44MTEsMi4xNzlWMjEuMjVsLTUuODExLTIuMTc5Wm03LjE1Myw0LjI4NVYxMy4yOTVsNS44MTEtMi4xNzlWMTIuNTRhMS4xMiwxLjEyLDAsMCwwLS44OTQsMS4xVjE1Ljg3YTEuMTIsMS4xMiwwLDAsMCwuODk0LDEuMXYyLjEwNlptNi43MDYtNS42aC0uNDQ3VjEzLjg1OGguNDQ3YS44OTQuODk0LDAsMCwxLDAsMS43ODhaIiBmaWxsPSIjMDM2Ii8+CiAgPC9nPgo8L3N2Zz4K"
                    alt=""
                  />
                  <Link
                    to={"/dashboard"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    <li onClick={closeMenu} style={{ paddingLeft: "10px" }}>
                      My Dashboard
                    </li>
                  </Link>
                </Link>
              </ul>
            </div>
          ) : null}

          <ul>
            <Link
              to={"/master_comp"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <li onClick={closeMenu}>Master Competitive Programming</li>
            </Link>
          </ul>
          <ul>
            <Link
              to={"/full_stack"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <li onClick={closeMenu}>Full Stack Program</li>
            </Link>
          </ul>
          <ul>
            <Link
              to={"/elevation"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <li onClick={closeMenu}>Elevation Academy</li>
            </Link>
          </ul>

          <ul>
            <Link
              to={"/mock_test"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <li onClick={closeMenu}>Mock Tests</li>
            </Link>
          </ul>
          <ul>
            <Link
              to={"/video"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <li onClick={closeMenu}>Video Tutorial</li>
            </Link>
          </ul>

          <ul style={{ color: "#ff219f" }}>
            <li>
              {" "}
              {token ? ( // Check if token is in local storage
                <Link
                  onClick={handletoken}
                  style={{ textDecoration: "none", color: "#ff8787" }}
                >
                  Logout
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={closeMenu}
                  style={{ textDecoration: "none", color: "#ff8787" }}
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
