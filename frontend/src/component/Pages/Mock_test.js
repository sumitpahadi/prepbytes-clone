import React from "react";
import axios from "axios";
import "./Page.css";
import { useEffect, useState } from "react";
function Mock_test() {
  const [apidata, setdata] = useState([]);
  const [topic, settopic] = useState([]);
  console.log("topic", topic);

  useEffect(() => {
    axios
      .get("https://prepbytes.onrender.com/mock")
      .then((response) => {
        setdata(response.data.mockdata);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    axios
      .get("https://prepbytes.onrender.com/topic")
      .then((response) => {
        settopic(response.data.data);
        console.log("response of topics ", response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="mock-container">
        <h2>Mock Tests</h2>
        <p>
          Technical and Aptitude Test is a very important process of most of the
          placement tests. Crack your next placement with series of PrepBytes
          practice and mock tests. Practice subject-wise and company-wise tests.
          Take real-time mock tests with other students and test your
          preparation.
        </p>
      </div>

      <div className="mock-feature">
        <div className="mock-head">
          <h2>Featured Mock Tests</h2>
        </div>
        <div className="inner-feature">
          <hr />
          <h2>PAST MOCK TESTS</h2>
          <hr />
        </div>
      </div>
      <div className="container-for-mock">
        {apidata.map((item, index) => {
          return (
            <div className="inner-mock" key={index}>
              <img src={item.img} alt="" />
              <h4>{item.name}</h4>

              <div className="inner-test">
                <p>
                  {" "}
                  {item.date}
                  <br />
                  Date
                </p>

                <p>
                  {" "}
                  {item.participants}
                  <br />
                  participants
                </p>

                <p>
                  {" "}
                  {item.time}
                  <br />
                  Time
                </p>
              </div>
              <button>Test Know</button>
            </div>
          );
        })}
      </div>

      <div className="mock-feature">
        <div className="mock-head">
          <h2>Practice Test</h2>
        </div>
        <div className="inner-feature">
          <hr />
          <h2>TOPIC WISE</h2>
          <hr />
        </div>
      </div>
      <div className="container-for-mock">
        {topic.map((item, index) => {
          return (
            <div className="inner-mock1" key={index}>
              <img src={item.img} alt="" />
              <h4>{item.name}</h4>
              <button>Test Know</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Mock_test;
