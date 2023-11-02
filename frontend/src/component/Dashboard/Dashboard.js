import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import {useState} from "react"

function Dashboard() {
  const username = localStorage.getItem("username");
  const userfirstname = localStorage.getItem("firstname");
  const data = JSON.parse(localStorage.getItem("cartData"));
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  

  console.log(data);
  return (
    <div>
      <div className="dash-navbar">
        <div className={expanded ? "hamburger1 expanded" : "hamburger1"} onClick={handleToggle}>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div className="logo-of-prepbytes">
          <Link to={"/"}>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="username-of-client">
          <h2>{username}</h2>
          <p>{userfirstname}</p>
        </div>
      </div>

      <div className="dashboard-toogle">
        <div className={expanded ? "inner-dashboard-detail expanded" : "inner-dashboard-detail"}>
        {expanded &&  <h1> <i class="fa-solid fa-book"></i>   Course</h1>}
        </div>

        {data && data.length > 0 ? (
          <div className="dashboard-top-container">
            {data
              .filter((item) => item.id === 22 || item.id === 23)
              .map((item, index) => {
                return (
                  <div key={index} className="courses-of-dash">
                    <div className="prepbytes-log">
                      <img src={item.log} alt="" />
                      <div className="timing">
                        <div className="starting">
                          <img src={item.cal} alt="" />
                          <p>
                            Start Date <br /> 2 Mar 2023
                          </p>
                        </div>
                        <div className="lastdate">
                          <img src={item.time} alt="" />
                          <p>
                            Last Date <br /> 2 Oct 2023
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="name-button">
                      <p>{item.name}</p>
                      <button>Go To Course</button>
                    </div>
                    <img src={item.backimg} className="backimage" alt="" />
                  </div>
                );
              })}

            {data
              .filter((item) => item.id >= 1 && item.id <= 20)
              .map((item, index) => {
                return (
                  <div key={index} className="test-conatiner">
                    <div className="iamge-cont-for-test">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="name-button">
                      <p>{item.name}</p>
                      <button>Go To Test</button>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <h1 className="dashboard-empty">Empty data</h1>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
