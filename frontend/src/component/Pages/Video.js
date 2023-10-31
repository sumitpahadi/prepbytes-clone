import React, { useEffect, useState } from "react";
import "./Page.css";
import loader from "../../component/logo.avif";
import axios from "axios";

function Video() {
  const [apidata, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://prepbytes.onrender.com/video")
      .then((response) => {
        setdata(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="video">
        <div className="video-cont">
          <div className="video-heading">
            <h3>Prepbytes Video Library</h3>
            <p>
              Increase your knowledge with PrepBytes free videos. PrepBytes
              video library is a repository of more than 250 videos containing
              videos on Competitive Programming, Language Fundamentals - C, C++, Java,
              Data Structures and Algorithms, Aptitude, Operating System, Interview Questions
              and much more all at one place.
            </p>
          </div>
          <div className="video_img">
            <img
              src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/video_lib_illustration.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="horizontal">
        <h4>CATEGORIES</h4>
        <hr />
      </div>
      <div className="container-for-video">
        {loading ? (
          <div className="prepbytes-loader">
            <img src={loader} alt="" />
          </div>
        ) : (
          apidata.map((item, index) => {
            return (
              <div className="inner-video" key={index}>
                <iframe
                  src={item.video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <h3>{item.heading}</h3>
                <p>{item.detail}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Video;
