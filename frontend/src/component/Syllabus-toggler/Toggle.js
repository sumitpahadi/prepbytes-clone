import React from "react";
import { useState, useEffect } from "react";
import "./Toggle.css";

function Toggle() {
  const [html, sethtml] = useState(false);
  const handle_html = () => {
    sethtml(!html);
  };
  const [js, setjs] = useState(false);
  const handle_js = () => {
    setjs(!js);
  };
  const [react, setreact] = useState(false);
  const handle_react = () => {
    setreact(!react);
  };
  const [node, setnode] = useState(false);
  const handle_node = () => {
    setnode(!node);
  };
  const [code, setcode] = useState(false);
  const handle_code = () => {
    setcode(!code);
  };
  const [db, setdb] = useState(false);
  const handle_db = () => {
    setdb(!db);
  };
  const [project, setproject] = useState(false);
  const handle_project = () => {
    setproject(!project);
  };
  return (
    <div>
      <div className="heading-project">
        <div className="inner-heading-project1">
          <h1>Program Syllabus & Projects</h1>
          <p>
            We have reverse engineered our syllabus by talking to the best
            companies and understanding <br /> what skills the industry needs the most
            right now.
          </p>
        </div>
        <div className="inner-heading-project2">
          <button>Download Syllabus</button>
        </div>
      </div>
      <div className="syllabus">
        <div className="syllabus1 syllabus2">
          <h2>Web Development Basics - HTML, CSS, BootStrap</h2>
          <p>
            Get to learn how websites work. Start your web development journey
            with the basics of HTML and learn <br /> how to create impressive
            websites using HTML, CSS, and Bootstrap.
          </p>
        </div>

        <div className="syllabus-detail">
          <div className="inner-syllabus">
            <h2>Course Content</h2>

            <p class="d-inline-flex gap-1">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={handle_html}
              >
                {html ? "View Detail" : "hide"}
              </button>
            </p>
          </div>

          <div className={`collapse1 ${html ? 'open' : ''}`}>
            <div className="card card-body">
              {html && (
                <div className="orderlist">
                  <ol>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      How websites work
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      HTML Introduction
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      HTML Tags{" "}
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Lists, Forms, Tables
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      HTML Divs
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Inline vs Internal vs External styling
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      CSS Font Styling, background, margin, padding
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      FontAwesome
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Styling button
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Bootstrap containers
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Bootstrap Alerts, Buttons
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Bootstrap Corousel
                    </li>
                  </ol>
                </div>
              )}

              {html && (
                <div className="orderlis2">
                  <ol>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Web Development Overview - Advantages
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Structure of Webpage
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Texts, Images, Videos
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Links, Anchor tags
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      CSS Introduction
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      CSS Display
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Styling Lists, Tables, Forms
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Transitionals, Transformations, Animations
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Tool tip, Box Sizing, Flex, Grid
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Bootstrap Tables,Images, Colors
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Bootstrap Spinners, Cards, Pagination, Drop Down
                    </li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="syllabus1 syllabus3">
          <h2>Javascript</h2>
          <p>
            Deep dive into the world of Javascript, one of the commonly used
            languages for web development. <br /> Explore the basics of JS,
            promises, closures, and complete Javascript.
          </p>
          <p></p>
        </div>
        <div className="syllabus-detail">
          <div className="inner-syllabus">
            <h2>Course Content</h2>

            <p class="d-inline-flex gap-1">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={handle_js}
              >
                {js ? "View Detail" : "hide"}
              </button>
            </p>
          </div>

          <div className={`collapse2 ${js ? 'open' : ''}`}>
            <div className="card card-body">
              {js && (
                <div className="orderlist">
                  <ol>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Introduction to Javascript
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Strings and Numbers
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      HTML Tags{" "}
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Functions
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Data Structures - List, Stack, Queues, Maps
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Understanding and working with DOM
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Prototypes
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Browser Local Storage
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Eventloop in Javascrip
                    </li>
                  </ol>
                </div>
              )}

              {js && (
                <div className="orderlis2">
                  <ol>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Variables, scoping, Data type
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Operators and loops
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Arrays and Objects
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Hashing
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Developer tools in Browsers
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Closures
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Jquery, Ajax
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      ES5 vs ES6 vs ES7
                    </li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="syllabus1 syllabus4">
          <h2>ReactJS</h2>
          <p>
            Most of the websites getting built nowadays are using React, so why
            should you stay behind. Learn all <br /> the components of React,
            understand how React is better, and don't just learn, build amazing
            web apps <br /> using react.
          </p>
        </div>
        <div className="syllabus-detail">
          <div className="inner-syllabus">
            <h2>Course Content</h2>

            <p class="d-inline-flex gap-1">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={handle_react}
              >
                {react ? "View Detail" : "hide"}
              </button>
            </p>
          </div>

          <div className={`collapse3 ${react ? 'open' : ''}`}>
            <div className="card card-body">
              {react && (
                <div className="orderlist">
                  <ol>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      React Intro
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Create an app using create-react-app
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      React Lifecycle{" "}
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Event handling, props
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Routes
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Pure Components
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Controlled vs Uncontrolled components
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Babel, Webpack
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      SASS overview
                    </li>
                  </ol>
                </div>
              )}

              {react && (
                <div className="orderlis2">
                  <ol>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Node installation
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Understanding basics of react app
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Understanding virtual DOMS , Single page apps
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      States, class components vs functional components
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Building forms in React
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Conditional Rendering
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      High order components
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Redux
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Axios, Creating a mock server
                    </li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="syllabus1 syllabus5">
          <h2>NodeJs</h2>
          <p>
            Always thinking about how to build servers? Its time to build one.
            Learn about express, security, <br /> authentication, restricting
            routes, hashing passwords, and JWT’s, and much more.
          </p>
        </div>
        <div className="syllabus-detail">
          <div className="inner-syllabus">
            <h2>Course Content</h2>

            <p class="d-inline-flex gap-1">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={handle_node}
              >
                {node ? "View Detail" : "hide"}
              </button>
            </p>
          </div>

          <div className={`collapse4 ${node ? 'open' : ''}`}>
            <div className="card card-body">
              {node && (
                <div className="orderlist">
                  <ol>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Creating a Simple Server
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Routing
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Intergrate Frontend and Backend{" "}
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Express Middleware
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      JWT Token, Passport.js
                    </li>
                  </ol>
                </div>
              )}

              {node && (
                <div className="orderlis2">
                  <ol>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Response types - HTML, JSON
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Express Introduction
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Express Params and Query String
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      API Authentication
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Socket Programming
                    </li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="syllabus1 syllabus6">
          <h2>Databases - MongoDB</h2>
          <p>
            Want to know how companies manage all their Data and how on a click
            of a button all the data is <br /> there? Don't just learn, master
            the concepts of Databases. Be a pro in managing data using MongoDB.
          </p>
        </div>
        <div className="syllabus-detail">
          <div className="inner-syllabus">
            <h2>Course Content</h2>

            <p class="d-inline-flex gap-1">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={handle_db}
              >
                {db ? "View Detail" : "hide"}
              </button>
            </p>
          </div>

          <div className={`collapse5 ${db ? 'open' : ''}`}>
            <div className="card card-body">
              {db && (
                <div className="orderlist">
                  <ol>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      SQL vs NOSQL
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Installing MongoDB
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Deleting and updating Data{" "}
                    </li>
                  </ol>
                </div>
              )}

              {db && (
                <div className="orderlis2">
                  <ol>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      MongoDB overview
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Connecting and Inserting Data
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-greater-than"
                        style={{ color: "orange", paddingRight: "9px" }}
                      ></i>
                      Understanding CRUD operations
                    </li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="syllabus1 syllabus7">
          <h2>Code Review + Deployment</h2>
          <p></p>
        </div>

        <div className="inner-syllabus">
          <h2>Course Content</h2>

          <p class="d-inline-flex gap-1">
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={handle_code}
            >
              {code ? "View Detail" : "hide"}
            </button>
          </p>
        </div>

        <div className={`collapse6 ${code ? 'open' : ''}`}>
          <div className="card card-body">
            {code && (
              <div className="orderlist">
                <ol>
                  <li>
                    <i
                      class="fa-solid fa-greater-than"
                      style={{ color: "orange", paddingRight: "9px" }}
                    ></i>
                    Tools for Code review
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-greater-than"
                      style={{ color: "orange", paddingRight: "9px" }}
                    ></i>
                    Understanding Firebase
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-greater-than"
                      style={{ color: "orange", paddingRight: "9px" }}
                    ></i>
                    Deploy using Netlify and Github{" "}
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-greater-than"
                      style={{ color: "orange", paddingRight: "9px" }}
                    ></i>
                    Deploy all the projects
                  </li>
                </ol>
              </div>
            )}

            {code && (
              <div className="orderlis2">
                <ol>
                  <li>
                    <i
                      class="fa-solid fa-greater-than"
                      style={{ color: "orange", paddingRight: "9px" }}
                    ></i>
                    Understand Review Board
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-greater-than"
                      style={{ color: "orange", paddingRight: "9px" }}
                    ></i>
                    Github
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-greater-than"
                      style={{ color: "orange", paddingRight: "9px" }}
                    ></i>
                    Get code review by Software Developers
                  </li>
                </ol>
              </div>
            )}
          </div>
        </div>

        <div className="syllabus1 syllabus8">
          <h2>Projects</h2>{" "}
          <p>
            You will build 6+ projects during the whole program. Starting from
            building basic apps to bring your <br /> learning to the
            application, to building a real-world website that you can add in
            your resume or start <br /> your own business, you will do it all.
            The projects are carefully chosen by software developers for you.
          </p>
        </div>
        <div className="syllabus-detail">
          <div className="inner-syllabus">
            <h2>Course Content</h2>

            <p class="d-inline-flex gap-1">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={handle_project}
              >
                {project ? "View Detail" : "hide"}
              </button>
            </p>
          </div>

          <div cclassName={`collapse7 ${project ? 'open' : ''}`}>
            <div className="card card-body">
              {project && (
                <div className="porject-cart">
                  <div className="project1">
                    <img
                      src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/HTML_HTML.svg"
                      alt=""
                    />
                    <h2>HTML Blog Page</h2>
                    <p>
                      Start your web development by making a simple blog page
                      using HTML.
                    </p>
                  </div>
                  <div className="project1">
                    <img
                      src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/Clock.svg"
                      alt=""
                    />
                    <h2>Reminder Clock App</h2>
                    <p>
                      Want to build an app to keep your reminders? Build your
                      own Digital Reminder Clock App using HTML, CSS and JS
                    </p>
                  </div>
                  <div className="project1">
                    <img
                      src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/app_todo.svg"
                      alt=""
                    />
                    <h2>ToDo App</h2>
                    <p>
                      This will be a basic project to make your understanding of
                      HTML and CSS clear but you can use it to keep your ToDos
                      as well.
                    </p>
                  </div>
                  <div className="project1">
                    <img
                      src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/app_blog.svg"
                      alt=""
                    />
                    <h2>React Blog App </h2>
                    <p>
                      Create your own Medium website. Through the project you
                      will understand how React , Node and MongoDB work together
                      to create magic.
                    </p>
                  </div>
                  <div className="project1">
                    <img
                      src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/app_shopping.svg"
                      alt=""
                    />
                    <h2>E-commerce Web App</h2>
                    <p>
                      This will be one of the major projects of the program. It
                      will be a full-fledged working website. Just add some
                      products and you will be ready to sell online and take
                      payments.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toggle;
