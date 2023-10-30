import React, { useState, useEffect } from "react";
import "./Login-signup.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Login_toogle() {
  const [verified, setVerified] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
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
          setVerified(false);
        });
    } else {
      setVerified(false);
    }
  }, [token]);

  return (
    <>
      {token ? (
        verified ? (
          <div className="auth">
            {/* Content for authenticated user */}
          </div>
        ) : (
          <div className="auth">
             <Link to={"/login"}>
            <button className="login">Login</button>
          </Link>
          <Link to={"/signup"}>
            <button className="signup">Signup</button>
          </Link>
          </div>
        )
      ) : (
        <div className="auth">
             <Link to={"/login"}>
            <button className="login">Login</button>
          </Link>
          <Link to={"/signup"}>
            <button className="signup">Signup</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Login_toogle;
