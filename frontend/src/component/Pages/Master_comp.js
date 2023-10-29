import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Page.css";
import Curriculum from "../Curriculum/Curriculum";
import Slider from "../Multi layer silder/Slider";
import { addtocart } from "../Slice/Createslice";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";
function Master_comp() {
  const dispatch = useDispatch();
  const selelct = useSelector((state) => state.cart.data);

  console.log(selelct);

  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    axios
      .get("http://localhost:4000/dashboard", {
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
  }, []);

  const makepayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51O1PDfSDn9Jvh8C8qUZncvrWSZahMESF3FeF4obkKuNq1rplszqkwgM38wkPeSTU2BAqUI1IoMD23sszROBAeWoU00ZTXXLMoJ"
    );

    const body = {
      products: [
        {
          id: 22,
          name: "Master Competittive Program",
          price: 10000,
          quantity: 1,
        },
      ],
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "https://prepbytes.onrender.com/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };

  const handleClick = (item) => {
    const userid = localStorage.getItem("userid");
    console.log(userid);

    if (verified) {
      dispatch(
        addtocart({
          id: 22,
          name: "Master Competittive Program",
          price: 10000,
          quantity: 1,
        })
      );
    }
  };

  return (
    <div>
      <div className="master-comp">
        <div className="heading-para">
          <h1>MASTER COMPETITIVE PROGRAMMING</h1>
          <p>
            Master Competitive Programming Fom Zero And Become A Top-Rated Coder
            <b> Under The Guidance Of Top Competitive Programmers</b>
          </p>

          {verified ? (
            <button
              onClick={() => {
                makepayment();
                handleClick();
              }}
            >
              Enroll Now
            </button>
          ) : (
            <button>
              <Link
                to={"/login"}
                style={{ color: "white", textDecoration: "none" }}
              >
                Register
              </Link>
            </button>
          )}
        </div>
        <div className="company-logo">
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-header-image.webp"
            alt=""
          />
        </div>
      </div>

      {/* ----------layers---------------------------- */}

      <div className="layers">
        <div className="layer1 layer3">
          <p>
            {" "}
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-one.webp"
              alt=""
            />
            9 months intensive bootcamp
          </p>
        </div>
        <div className="layer1 layer4">
          <p>
            {" "}
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-two.webp"
              alt=""
            />
            Quick doubt resolution
          </p>
        </div>
        <div className="layer1 layer5">
          <p>
            {" "}
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-three.webp"
              alt=""
            />
            Live coding sessions with top-rated coders
          </p>
        </div>
        <div className="layer1 layer6">
          <p>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-four.webp"
              alt=""
            />
            Get certificate on course completion
          </p>
        </div>
      </div>

      {/* -------------------------Leading Mentors..................... */}

      <div className="leading-mentors">
        <h2>Get Guidance From Industry Leading Mentors</h2>
        <h3>Other Mentors You Will Be Interacting With</h3>
        <div className="inner-leading-mentors">
          <div className="founder">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Mamta.webp"
              alt=""
              className="imgofmentor"
            />{" "}
            <div className="inner-founder">
              <h4>Mamta </h4>
              <p>Co-founder,Prepbytes</p>
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Mentor-Company1.webp"
                alt=""
              />
            </div>
          </div>
          <div className="founder">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Kushdeep.webp"
              alt=""
              className="imgofmentor"
            />
            <div className="inner-founder">
              <h4>Kushdeep</h4>
              <p>SDE,Sharechat</p>
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/logo-01.webp"
                alt=""
              />
            </div>
          </div>
          <div className="founder">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Aveek.webp"
              alt=""
              className="imgofmentor"
            />
            <div className="inner-founder">
              <h4>Aveek</h4>
              <p>Mentors,Prepbytes</p>
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/logo-02.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* -----------------------------detail of circulam--------------------------------------------- */}
      <h2
        style={{
          textAlign: "center",
          paddingBottom: "50px",
          paddingTop: "20px",
        }}
      >
        Master Competitive Programming With Us
      </h2>
      <div className="program1">
        <div className="list-of-program">
          <ol>
            <li>
              <div className="inner-program inner-program1">
                <div className="inner-inner-program">
                  <h2>Personalised Program</h2>
                  <p>
                    Master your skills from where you are, with India's only
                    personalised program
                  </p>
                </div>
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div className="inner-program inner-program1">
                <div className="inner-inner-program">
                  <h2>Quick Doubt Support</h2>
                  <p>
                    Get your doubts cleared by coding experts and have a smooth
                    learning
                  </p>
                </div>
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Quick+Doubt+Support.webp"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div className="inner-program inner-program1">
                <div className="inner-inner-program">
                  <h2>250+ Coding Questions</h2>
                  <p>
                    Best way to master a language is by coding in the language
                  </p>
                </div>
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_250+Coding+Questions.webp"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div className="inner-program inner-program1">
                <div className="inner-inner-program">
                  <h2>50+ Hours of Videos</h2>
                  <p>
                    Recorded video lectures by experts to help you understand
                    the concepts easily
                  </p>
                </div>
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_80+Hours+of+Videos.webp"
                  alt=""
                />
              </div>
            </li>
          </ol>
        </div>

        <div className="list-img">
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Vector.svg"
            alt=""
          />
        </div>

        <div className="list-of-program">
          <ol>
            <li>
              <div className="inner-program ">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Expert+Mentors.webp"
                  alt=""
                />
                <div className="inner-inner-program">
                  <h2>Expert Mentors</h2>
                  <p>
                    Get career guidance, mentorship, time management strategies
                    from industry experts
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="inner-program">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Get+certificate-01.webp"
                  alt=""
                />
                <div className="inner-inner-program">
                  <h2>Get Certified</h2>
                  <p>
                    Get recognized on course completion with highly reputed
                    PrepBytes certificates
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="inner-program">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_20+Live+Coding+Sessions.webp"
                  alt=""
                />
                <div className="inner-inner-program">
                  <h2>20+ Live Coding Sessions</h2>
                  <p>
                    Best way to master a language is by coding in the language
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="inner-program">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_80+Tech-Apti+MCQ+Tests.webp"
                  alt=""
                />
                <div className="inner-inner-program">
                  <h2>40+ Coding quizes</h2>
                  <p>
                    Small quizzes after every topic to give you a quick check on
                    your understandings
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/* --------------------------------------------------------------new section----------------------------- */}
      <div className="hori">
        <hr />
      </div>
      <div className="student-enrolled">
        <div className="inner-std">
          <h1>10K+</h1>
          <h4>Students Enrolled</h4>
        </div>
        <div className="inner-std">
          <h1>1000K+</h1>
          <h4>Doubts Solved</h4>
        </div>
        <div className="inner-std">
          <h1>2k+ hrs</h1>
          <h4>Mentor Interaction</h4>
        </div>
      </div>
      <div className="hori">
        <hr />
      </div>

      {/* ---------------------------------------coding context---------------------------------------------------- */}

      <div className="coding-context">
        <h1>Crack Reputed Coding Contests</h1>
        <img
          src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/MCP-company-new.webp"
          alt=""
        />
      </div>

      {/* -------------------------------curculium-------------------------------------------------------- */}
      <Curriculum />

      {/* ------------------------------------------------new section for batch------------------------------------------------------------ */}

      <div className="batch">
        <div className="select">
          <h4>SELECT BATCH</h4>
        </div>
        <div className="enrllment">
          <h5>
            1st May <br /> Enrolment Started
          </h5>
        </div>
        <div className="enrollment2">
          <h5>
            15th May <br /> Enrolment Started
          </h5>
        </div>
        <div className="fees">
          <h4>₹ 25000</h4>
          <button>Enroll Now</button>
        </div>
      </div>
      <hr style={{ background: "black", height: "4px" }} />

      {/* ----------------------------------------------------reviews--------------------------------------------------------------------- */}
      <Slider />

      {/* --------------------------------------end of this course----------------------------------------------- */}
      <div className="end-course">
        <div className="layers layess">
          <div className="layer1 layer3">
            <p>
              {" "}
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/1.webp"
                alt=""
              />
              4 star and above in CodeChef
            </p>
          </div>
          <div className="layer1 layer4">
            <p>
              {" "}
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/2.webp"
                alt=""
              />
              Crack contests like Facebook Hacker Cup, Google Kickstart, ACM
              ICPC
            </p>
          </div>
          <div className="layer1 layer5">
            <p>
              {" "}
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/3.webp"
                alt=""
              />
              Candidate master and above in CodeForces
            </p>
          </div>
          <div className="layer1 layer6">
            <p>
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/4.webp"
                alt=""
              />
              Specialist and above in SPOJ.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Master_comp;
