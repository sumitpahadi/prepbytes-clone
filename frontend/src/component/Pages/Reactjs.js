import React, { useState, useEffect } from "react";
import axios from "axios";
import "./loader.css";
import loader from "../../component/logo.avif";
import { Link } from "react-router-dom";

function Reactjs() {
  const [apidata, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://prepbytes.onrender.com/project")
      .then((response) => {
        setdata(response.data.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Update loading in case of error
      });
  }, []);

  return (
    <div className="project-container">
      <div className="header-of-project">
        <h1>Project Explanation </h1>
        <p>Here is the explanation of HTML</p>
      </div>
      {loading ? ( // If loading, show the loader
        <div className="prepbytes-loader">
          <img src={loader} alt="" />
        </div>
      ) : (
        apidata
          .filter((item) => item.id === 3)
          .map((item, index) => (
            <div className="inner-part" key={index}>
              <div className="inner-project">
                <img src={item.img} alt="click here" />
                <div className="inner-project-heading">
                  <h1>{item.name}</h1>
                  <p>{item.definition}</p>
                </div>
                <div className="detail-explain">
                  <ul>
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
                  </ul>
                </div>
              </div>

              <div className="topics">
                <div className="heading-topics">
                  <h2>Most Important Topics of React js</h2>
                </div>
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
                <iframe
                  width="949"
                  height="534"
                  src="https://www.youtube.com/embed/FxgM9k1rg0Q"
                  title="Complete React course with projects | part 1"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <Link to={"https://react-blog-by-sumitrawat.netlify.app/"}>
                  {" "}
                  <h1>Click Here To See Project </h1>
                </Link>
              </div>
            </div>
          ))
      )}
    </div>
  );
}

export default Reactjs;
