import React from "react";
import "./Batch.css";
import { useState } from "react";
function Batch() {
  
  const [batch, setbatch] = useState(1);
  const handlebatch = () => {
    setbatch(1);
  };
  const handlerequied = () => {
    setbatch(2);
  };
  const handlecomplte = () => {
    setbatch(3);
  };
  const handleexp = () => {
    setbatch(4);
  };
  const handlecertidied = () => {
    setbatch(5);
  };
  return (
    <div>
      <div className="journey">
        <div className="jouney1">
          <div className="inner-jouney">
            <p onClick={handlebatch } style={{cursor:"pointer"}}>Batch Commencement</p>

            <div className="numer"><h4>1</h4></div>
          </div>

          {/* ---------------------------display hidden------------------------- */}
          <div className="inner-jouney-2 display-hidden-journey">
            <div className="list-inner-jouney-2">
              <p style={{ display: "flex" }}>
                <p
                  style={{
                    color: "orange",
                    fontSize: "18px",
                    fontWeight: "bolder",
                    paddingRight: "5px",
                  }}
                >
                  {" "}
                  <i class="fa-solid fa-greater-than"></i>
                </p>{" "}
                Get access to dashboard & complete plan
              </p>
              <p style={{ display: "flex" }}>
                {" "}
                <p
                  style={{
                    color: "orange",
                    fontSize: "18px",
                    fontWeight: "bolder",
                    paddingRight: "5px",
                  }}
                >
                  {" "}
                  <i class="fa-solid fa-greater-than"></i>
                </p>
                Introduction with lead mentor for this program
              </p>
              <p style={{ display: "flex" }}>
                {" "}
                <p
                  style={{
                    color: "orange",
                    fontSize: "18px",
                    fontWeight: "bolder",
                    paddingRight: "5px",
                  }}
                >
                  {" "}
                  <i class="fa-solid fa-greater-than"></i>
                </p>{" "}
                Access to recorded video lectures
              </p>
            </div>
            <div className="list-inner-jouney-2">
              <p style={{ display: "flex" }}>
                {" "}
                <p
                  style={{
                    color: "orange",
                    fontSize: "18px",
                    fontWeight: "bolder",
                    paddingRight: "5px",
                  }}
                >
                  {" "}
                  <i class="fa-solid fa-greater-than"></i>
                </p>{" "}
                Access to Mock Tests
              </p>
              <p style={{ display: "flex" }}>
                {" "}
                <p
                  style={{
                    color: "orange",
                    fontSize: "18px",
                    fontWeight: "bolder",
                    paddingRight: "5px",
                  }}
                >
                  {" "}
                  <i class="fa-solid fa-greater-than"></i>
                </p>{" "}
                One live session with mentors per week
              </p>
              <p style={{ display: "flex" }}>
                {" "}
                <p
                  style={{
                    color: "orange",
                    fontSize: "18px",
                    fontWeight: "bolder",
                    paddingRight: "5px",
                  }}
                >
                  {" "}
                  <i class="fa-solid fa-greater-than"></i>
                </p>{" "}
                Every live session will be of 2 hours duration
              </p>
            </div>
          </div>

          {/* ----------------------------------------------------------------------------------------------------- */}
          <div className="inner-jouney">
            <p onClick={handlerequied} style={{cursor:"pointer"}}>
              Learn required languages, <br /> framework & tools
            </p>
            <div className="numer"><h4>2</h4></div>
          </div>

          {/* ---------------------------display hidden------------------------- */}
          <div className="inner-jouney-2 display-hidden-journey">
            <div className="list-inner-jouney-2">
              <p style={{ display: "flex" }}>
                <p
                  style={{
                    color: "orange",
                    fontSize: "18px",
                    fontWeight: "bolder",
                    paddingRight: "5px",
                  }}
                >
                  {" "}
                  <i class="fa-solid fa-greater-than"></i>
                </p>{" "}
                Live online classes of Javascript, ReactJs, NodeJs,Express, HTML
                & CSS
              </p>
              <p style={{ display: "flex" }}>
                {" "}
                <p
                  style={{
                    color: "orange",
                    fontSize: "18px",
                    fontWeight: "bolder",
                    paddingRight: "5px",
                  }}
                >
                  {" "}
                  <i class="fa-solid fa-greater-than"></i>
                </p>
                Learn the industry wide used tools like MongoDB, Git & Jira
              </p>
            </div>
          </div>

          {/* ----------------------------------------------------------------------------------------------------- */}

          <div className="inner-jouney">
            <p onClick={handlecomplte} style={{cursor:"pointer"}}>
              Complete awesome real
              <br /> world projects
            </p>
            <div className="numer"><h4>3</h4></div>
          </div>

          {/* ---------------------------display hidden------------------------- */}
          <div className="inner-jouney-2 display-hidden-journey">
            <div className="list-inner-jouney-2">
              <p style={{ display: "flex" }}>
                <p
                  style={{
                    color: "orange",
                    fontSize: "18px",
                    fontWeight: "bolder",
                    paddingRight: "5px",
                  }}
                >
                  {" "}
                  <i class="fa-solid fa-greater-than"></i>
                </p>{" "}
                HTML Blog
              </p>
              <p style={{ display: "flex" }}>
                {" "}
                <p
                  style={{
                    color: "orange",
                    fontSize: "18px",
                    fontWeight: "bolder",
                    paddingRight: "5px",
                  }}
                >
                  {" "}
                  <i class="fa-solid fa-greater-than"></i>
                </p>
                Reminder Clock App
              </p>
              <p style={{ display: "flex" }}>
                {" "}
                <p
                  style={{
                    color: "orange",
                    fontSize: "18px",
                    fontWeight: "bolder",
                    paddingRight: "5px",
                  }}
                >
                  {" "}
                  <i class="fa-solid fa-greater-than"></i>
                </p>{" "}
                Todo App
              </p>
            </div>
            <div className="list-inner-jouney-2">
              <p style={{ display: "flex" }}>
                {" "}
                <p
                  style={{
                    color: "orange",
                    fontSize: "18px",
                    fontWeight: "bolder",
                    paddingRight: "5px",
                  }}
                >
                  {" "}
                  <i class="fa-solid fa-greater-than"></i>
                </p>{" "}
                React Blog
              </p>
              <p style={{ display: "flex" }}>
                {" "}
                <p
                  style={{
                    color: "orange",
                    fontSize: "18px",
                    fontWeight: "bolder",
                    paddingRight: "5px",
                  }}
                >
                  {" "}
                  <i class="fa-solid fa-greater-than"></i>
                </p>{" "}
                Chat App
              </p>
              <p style={{ display: "flex" }}>
                {" "}
                <p
                  style={{
                    color: "orange",
                    fontSize: "18px",
                    fontWeight: "bolder",
                    paddingRight: "5px",
                  }}
                >
                  {" "}
                  <i class="fa-solid fa-greater-than"></i>
                </p>{" "}
                E-commerce Web App
              </p>
            </div>
          </div>

          {/* ----------------------------------------------------------------------------------------------------- */}
          <div className="inner-jouney">
            <p onClick={handleexp} style={{cursor:"pointer"}}>
              Experience the complete <br /> development lifecycle
            </p>
            <div className="numer"><h4>4</h4></div>
          </div>
          {/* ---------------------------display hidden------------------------- */}
          <div className="inner-jouney-2 display-hidden-journey">
            <div className="list-inner-jouney-2">
              <p style={{ display: "flex" }}>
                <p
                  style={{
                    color: "orange",
                    fontSize: "18px",
                    fontWeight: "bolder",
                    paddingRight: "5px",
                  }}
                >
                  {" "}
                  <i class="fa-solid fa-greater-than"></i>
                </p>{" "}
                Learn the Agile Development Methodology
              </p>
              <p style={{ display: "flex" }}>
                {" "}
                <p
                  style={{
                    color: "orange",
                    fontSize: "18px",
                    fontWeight: "bolder",
                    paddingRight: "5px",
                  }}
                >
                  {" "}
                  <i class="fa-solid fa-greater-than"></i>
                </p>
                Real time experience of complete software development lifecycle
                from development to deployment
              </p>
            </div>
          </div>

          {/* ----------------------------------------------------------------------------------------------------- */}
          <div className="inner-jouney">
            <p onClick={handlecertidied} style={{cursor:"pointer"}}>
              Be a certified Full <br /> Stack Developer
            </p>
            <div className="numer"><h4>5</h4></div>
          </div>
        </div>
        {/* ---------------------------display hidden------------------------- */}
        <div className="inner-jouney-2 display-hidden-journey">
          <div className="list-inner-jouney-2">
            <p style={{ display: "flex" }}>
              <p
                style={{
                  color: "orange",
                  fontSize: "18px",
                  fontWeight: "bolder",
                  paddingRight: "5px",
                }}
              >
                {" "}
                <i class="fa-solid fa-greater-than"></i>
              </p>{" "}
              Get certificate of course completion on completing projects,
              assignments &amp; mock tests
            </p>
          </div>
        </div>

        {/* ----------------------------------------------------------------------------------------------------- */}

        {batch === 1 && (
          <div className="jouney2">
            <h2 style={{ textAlign: "center",padding:"20px" }}>Batch Commencement</h2>

            <div className="inner-jouney-2">
              <div className="list-inner-jouney-2">
                <p style={{ display: "flex" }}>
                  <p
                    style={{
                      color: "orange",
                      fontSize: "18px",
                      fontWeight: "bolder",
                      paddingRight: "5px",

                    }}
                  >
                    {" "}
                    <i class="fa-solid fa-greater-than"></i>
                  </p>{" "}
                  Get access to dashboard & complete plan
                </p>
                <p style={{ display: "flex" }}>
                  {" "}
                  <p
                    style={{
                      color: "orange",
                      fontSize: "18px",
                      fontWeight: "bolder",
                      paddingRight: "5px",
                    }}
                  >
                    {" "}
                    <i class="fa-solid fa-greater-than"></i>
                  </p>
                  Access to recorded video lectures
                </p>
                <p style={{ display: "flex" }}>
                  {" "}
                  <p
                    style={{
                      color: "orange",
                      fontSize: "18px",
                      fontWeight: "bolder",
                      paddingRight: "5px",
                    }}
                  >
                    {" "}
                    <i class="fa-solid fa-greater-than"></i>
                  </p>{" "}
                  One live session with mentors per week
                </p>
              </div>
              <div className="list-inner-jouney-2">
                <p style={{ display: "flex" }}>
                  {" "}
                  <p
                    style={{
                      color: "orange",
                      fontSize: "18px",
                      fontWeight: "bolder",
                      paddingRight: "5px",
                    }}
                  >
                    {" "}
                    <i class="fa-solid fa-greater-than"></i>
                  </p>{" "}
                  Introduction with lead mentor for this program
                </p>
                <p style={{ display: "flex" }}>
                  {" "}
                  <p
                    style={{
                      color: "orange",
                      fontSize: "18px",
                      fontWeight: "bolder",
                      paddingRight: "5px",
                    }}
                  >
                    {" "}
                    <i class="fa-solid fa-greater-than"></i>
                  </p>{" "}
                  Access to Mock Tests
                </p>
                <p style={{ display: "flex" }}>
                  {" "}
                  <p
                    style={{
                      color: "orange",
                      fontSize: "18px",
                      fontWeight: "bolder",
                      paddingRight: "5px",
                    }}
                  >
                    {" "}
                    <i class="fa-solid fa-greater-than"></i>
                  </p>{" "}
                  Every live session will be of 2 hours duration
                </p>
              </div>
            </div>
            <img
              src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_batchcommencement.svg"
              alt=""
            />
          </div>
        )}

        {batch === 2 && (
          <div className="jouney2">
            <h2 style={{ textAlign: "center",padding:"20px" }}>
              Learn required languages, framework & tools
            </h2>

            <div className="inner-jouney-2">
              <div className="list-inner-jouney-2">
                <p style={{ display: "flex" }}>
                  <p
                    style={{
                      color: "orange",
                      fontSize: "18px",
                      fontWeight: "bolder",
                      paddingRight: "5px",
                    }}
                  >
                    {" "}
                    <i class="fa-solid fa-greater-than"></i>
                  </p>{" "}
                  Live online classes of Javascript, ReactJs, NodeJs,Express,
                  HTML & CSS
                </p>
              </div>
              <div className="list-inner-jouney-2">
                <p style={{ display: "flex" }}>
                  {" "}
                  <p
                    style={{
                      color: "orange",
                      fontSize: "18px",
                      fontWeight: "bolder",
                      paddingRight: "5px",
                    }}
                  >
                    {" "}
                    <i class="fa-solid fa-greater-than"></i>
                  </p>{" "}
                  Learn the industry wide used tools like MongoDB, Git & Jira
                </p>
              </div>
            </div>
            <img
              src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_language-full+stack.svg"
              alt=""
            />
          </div>
        )}

        {batch === 3 && (
          <div className="jouney2">
            <h2 style={{ textAlign: "center",padding:"20px" }}>
              Complete awesome real world projects
            </h2>

            <div className="inner-jouney-2">
              <div className="list-inner-jouney-2">
                <p style={{ display: "flex" }}>
                  <p
                    style={{
                      color: "orange",
                      fontSize: "18px",
                      fontWeight: "bolder",
                      paddingRight: "5px",
                    }}
                  >
                    {" "}
                    <i class="fa-solid fa-greater-than"></i>
                  </p>{" "}
                  HTML Blog Page
                </p>
                <p style={{ display: "flex" }}>
                  {" "}
                  <p
                    style={{
                      color: "orange",
                      fontSize: "18px",
                      fontWeight: "bolder",
                      paddingRight: "5px",
                    }}
                  >
                    {" "}
                    <i class="fa-solid fa-greater-than"></i>
                  </p>
                  Todo App
                </p>
                <p style={{ display: "flex" }}>
                  {" "}
                  <p
                    style={{
                      color: "orange",
                      fontSize: "18px",
                      fontWeight: "bolder",
                      paddingRight: "5px",
                    }}
                  >
                    {" "}
                    <i class="fa-solid fa-greater-than"></i>
                  </p>{" "}
                  Chat App
                </p>
              </div>
              <div className="list-inner-jouney-2">
                <p style={{ display: "flex" }}>
                  {" "}
                  <p
                    style={{
                      color: "orange",
                      fontSize: "18px",
                      fontWeight: "bolder",
                      paddingRight: "5px",
                    }}
                  >
                    {" "}
                    <i class="fa-solid fa-greater-than"></i>
                  </p>{" "}
                  Reminder Clock App
                </p>
                <p style={{ display: "flex" }}>
                  {" "}
                  <p
                    style={{
                      color: "orange",
                      fontSize: "18px",
                      fontWeight: "bolder",
                      paddingRight: "5px",
                    }}
                  >
                    {" "}
                    <i class="fa-solid fa-greater-than"></i>
                  </p>{" "}
                  React Blog
                </p>
                <p style={{ display: "flex" }}>
                  {" "}
                  <p
                    style={{
                      color: "orange",
                      fontSize: "18px",
                      fontWeight: "bolder",
                      paddingRight: "5px",
                    }}
                  >
                    {" "}
                    <i class="fa-solid fa-greater-than"></i>
                  </p>{" "}
                  E-commerce Web App
                </p>
              </div>
            </div>
            <img
              src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_projects.svg"
              alt=""
            />
          </div>
        )}

        {batch ===
          4 && (
            <div className="jouney2">
              <h2 style={{ textAlign: "center",padding:"20px" }}>
                Experience the complete development lifecycle
              </h2>

              <div className="inner-jouney-2">
                <div className="list-inner-jouney-2">
                  <p style={{ display: "flex" }}>
                    <p
                      style={{
                        color: "orange",
                        fontSize: "18px",
                        fontWeight: "bolder",
                        paddingRight: "5px",
                      }}
                    >
                      {" "}
                      <i class="fa-solid fa-greater-than"></i>
                    </p>{" "}
                    Learn the Agile Development Methodology
                  </p>
                </div>
                <div className="list-inner-jouney-2">
                  <p style={{ display: "flex" }}>
                    {" "}
                    <p
                      style={{
                        color: "orange",
                        fontSize: "18px",
                        fontWeight: "bolder",
                        paddingRight: "5px",
                      }}
                    >
                      {" "}
                      <i class="fa-solid fa-greater-than"></i>
                    </p>{" "}
                    Real time experience of complete software development
                    lifecycle from development to deployment
                  </p>
                </div>
              </div>
              <img
                src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_lifecycle.svg"
                alt=""
              />
            </div>
          )}
        {batch === 5 && (
          <div className="jouney2">
            <h2 style={{ textAlign: "center",padding:"20px" }}>
              Be a certified Full Stack Developer
            </h2>

            <div className="inner-jouney-2">
              <div className="list-inner-jouney-2">
                <p style={{ display: "flex" }}>
                  <p
                    style={{
                      color: "orange",
                      fontSize: "18px",
                      fontWeight: "bolder",
                      paddingRight: "5px",
                    }}
                  >
                    {" "}
                    <i class="fa-solid fa-greater-than"></i>
                  </p>{" "}
                  Get certificate of course completion on completing projects,
                  assignments & mock tests
                </p>
              </div>
            </div>
            <img
              src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_getcertified.svg"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Batch;
