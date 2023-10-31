import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Javascript() {
  const [apidata, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://prepbytes.onrender.com/project")
      .then((response) => {
        setdata(response.data.data);
        console.log(response);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="project-container">
     
      {apidata
        .filter((item) => item.id === 2)
        .map((item, index) => {
          return (
            <div className="inner-part" key={index}>
              <div className="inner-project">
                <img src={item.img} alt="click here" />
                <div className="inner-project-heading">
                  <h1>{item.name}</h1>
                  <p>{item.definition}</p>
                </div>
              </div>
              <div className="heading-topics">
                <h2>Most Important Topics of Javascript</h2>
              </div>
              <div className="topics">
                <ol>
                  <li>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    {item.topics1}
                  </li>
                  <li>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    {item.topics2}
                  </li>
                  <li>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    {item.topics3}
                  </li>
                  <li>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    {item.topics4}
                  </li>
                  <li>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    {item.topics5}
                  </li>
                  <li>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    {item.topics6}
                  </li>
                  <li>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    {item.topics7}
                  </li>
                  <li>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    {item.topics8}
                  </li>
                  <li>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    {item.topics9}
                  </li>
                  <li>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    {item.topics10}
                  </li>
                </ol>
              </div>
              <hr />
              <div className="detail-explain">
                <ol>
                  <li>{item.detail1}</li>
                  <li>{item.detail2}</li>
                  <li>{item.detail3}</li>
                  <li>{item.detail4}</li>
                  <li>{item.detail5}</li>
                  <li>{item.detail6}</li>
                  <li>{item.detail7}</li>
                  <li>{item.detail8}</li>
                  <li>{item.detail9}</li>
                  <li>{item.detail10}</li>
                </ol>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Javascript;
