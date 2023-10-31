import React from "react";
import "./Login.css";
import axios from "axios";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom"; // Import withRouter

function Login() {
  const nav = useNavigate();
  const [data, setdata] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://prepbytes.onrender.com/login", formData)
      .then((response) => {
        if (response.data.user) {
          const token = response.data.token;
          console.log(token);
          const usersid = response.data.userid;
          localStorage.setItem("token", token);
          localStorage.setItem("userid", usersid);

          const email = response.data.user[0];
          const username = email
            .split("@")[0]
            .match(/[a-zA-Z]+/)[0]
            .split("")[0];


            const fullname = email
            .split("@")[0]
            .match(/[a-zA-Z]+/)[0]
            ;

          console.log(username);
          localStorage.setItem("username", username.toUpperCase());
          localStorage.setItem("firstname", fullname);

          nav("/");
        } else {
          setdata(response.data.msg);
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };
  return (
    <div>
      <div className="signup-container">
        <div className="signup-img-conatiner">
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/illustrated.webp"
            alt=""
          />
        </div>

        <div className="inner-container-signup-detail">
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/logo.webp"
            alt=""
            className="prepbyteslogo"
          />
          <div className="heading-conatiner">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/students.webp"
              alt=""
            />
            <div className="headings">
              <h5>10K+</h5>
              <p>Student Enrolled</p>
            </div>
          </div>
          <div className="heading-conatiner">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/college.webp"
              alt=""
            />
            <div className="headings">
              <h5>10K+</h5>
              <p>Student Enrolled</p>
            </div>
          </div>
          <div className="heading-conatiner">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/learning.webp"
              alt=""
            />
            <div className="headings">
              <h5>10K+</h5>
              <p>Student Enrolled</p>
            </div>
          </div>
          <div className="heading-conatiner">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/social.webp"
              alt=""
            />
            <div className="headings">
              <h5>10K+</h5>
              <p>Student Enrolled</p>
            </div>
          </div>
        </div>

        <div className="sign-form">
          <div className="signup-heading">
            <Link to={"/signup"}>
              {" "}
              <button
                style={{ borderBottom: "2px solid gray", color: "black" }}
              >
                SIGNUP
              </button>
            </Link>
            <Link>
              {" "}
              <button style={{ borderBottom: "2px solid #4b8ce8" }}>
                LOGIN
              </button>
            </Link>
          </div>
          <h4 style={{ textAlign: "center" }}>Create your new account</h4>
          <form action="" onSubmit={handleSubmit}>
            <div className="signup-info">
              <div className="user-info">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="user-info">
                <label htmlFor="pass">Password</label>
                <input
                  type="password"
                  id="pass"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <p
                style={{
                  color: "red",
                  display: "block",
                  margin: "auto",
                  width: "90%",
                }}
              >
                {data}
              </p>

              <div className="user-info1">
                <button>SIGN IN</button>
              </div>
              <div className="user-info1" style={{ marginBottom: "20px" }}>
                <button
                  style={{
                    background: "white",
                    color: "black",
                    border: "1px solid black",
                  }}
                >
                  LOGIN Via OTP
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
