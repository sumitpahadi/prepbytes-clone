import React from "react";
import "./Signup.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Signup() {
  const [data, setdata] = useState();
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    collegename: "",
    passingyear: "",
  });

  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://prepbytes.onrender.com/register", formData)
      .then((response) => {
        if (response.data.user) {
          setFormData({
            username: "",
            email: "",
            password: "",
            collegename: "",
            passingyear: "",
          });
          nav("/login");
        } else {
          setdata(response.data.msg);
        }
      })
      .catch((error) => {
        console.error("Error registering:", error);
      });
  };
  return (
    <div>
      <div className=" signup-container1">
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
            <button>SIGNUP</button>
            <Link to={"/login"}>
              {" "}
              <button
                style={{ borderBottom: "2px solid gray", color: "black" }}
              >
                LOGIN
              </button>
            </Link>
          </div>
          <h4 style={{ textAlign: "center" }}>Create your new account</h4>
          <form action="" onSubmit={handleSubmit}>
            <div className="signup-info">
              <div className="user-info">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  id="Name"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required />
              </div>
              <div className="user-info">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required />
              </div>
              <div className="user-info">
                <label htmlFor="number">Phone no</label>
                <input type="text" id="number" required />
              </div>
              <div className="user-info">
                <label htmlFor="pass">Password</label>
                <input
                  type="text"
                  name="password"
                  id="pass"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="college-detail">
                <div className="user-info">
                  <label htmlFor="college">College</label>
                  <input
                    type="text"
                    id="college"
                    name="collegename"
                    value={formData.collegename}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="user-info">
                  <label for="passing">Passing Year</label>
                  <input
                    type="text"
                    id="passing"
                    name="passingyear"
                    value={formData.passingyear}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="term">
                <input type="radio" /> I agree to the{" "}
                <p style={{ color: "#4b8ce8" }}>terms and conditions</p>
              </div>
              <p style={{ color: "red",    display: "block",   margin: "auto",width:"90%" }}>{data}</p>

              <div className="user-info1">
                <button type="submit">SIGN UP</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
