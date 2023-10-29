import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
function Dashboard() {
  const username = localStorage.getItem("username");
  const userfirstname = localStorage.getItem("firstname");
  const data = JSON.parse(localStorage.getItem("cartData"));
  console.log(data);
  return (
    <div>
      <div className="dash-navbar">
        <div className="logo-of-prepbytes">
          <Link to={"/"}>
            {" "}
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

      <div className="dashboard-detail">
        {data.map((item, index) => {
          return (
            <div key={index} className="img-dashboard">
              <div className="prep">
                <img src={item.log} alt="" />
                <hr />
                <div className="date-time">
                  <div className="date-course">
                    <img src={item.cal} alt="" />
                    <p>
                      {item.startdate}
                      <br />
                      {item.date}
                    </p>
                  </div>
                  <div className="time-course">
                    <img src={item.time} alt="" />
                    <p>
                      {item.lastdate} <br />
                      {item.last}
                    </p>
                  </div>
                </div>
              </div>
              <img
                src={item.img || item.backimg}
                className="backgroundimage"
                alt=""
              />
              <p>{item.name}</p>
              <button>Go to Course</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
