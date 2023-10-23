import React from "react";
import "./Page.css";

function Video() {
  return (
    <div>
      <div className="video">
        <div className="video-cont">
          <div className="video-heading">
            <h3>Prepbytes Video Library</h3>
            <p>
              Increase your knowledge with PrepBytes free videos. PrepBytes
              video library is a repository of more than 250 videos containing
              videos on Competitive Programming , Language Fundamentals - C,
              C++, Java, Data Structures and Algorithms, Aptitude, Operating
              System, Interview Questions and much more all at one place.
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
      <hr  />
      </div>
   


      <div className="container-for-video">
        <div className="inner-video">
        <iframe  src="https://www.youtube.com/embed/Bf933DFF_FI"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>       <h3>Competitive Programming</h3>
       <p> Competitive Programming question  solved by top rated coders</p>
        </div>

        <div className="inner-video">
        <iframe  src="https://www.youtube.com/embed/L-yrs6rARYo"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        <h3>Interview Preparation</h3>
        <p>Commonly asked  coding Interview question  solved asked step by step</p>
        </div>

        <div className="inner-video">
        <iframe  src="https://www.youtube.com/embed/5_5oE5lgrhw?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi" title="Introduction to Data Structures &amp; Algorithms" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        <h3>Data Structure and Algorithem</h3>
        <p>Basic  Concept of Data Structure and Algo and Ds/Algo Problem Solved</p>
        </div>

    

        <div className="inner-video">
        <iframe width="949" height="534" src="https://www.youtube.com/embed/tnc9ojITRg4?list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt" title="Fractions and Decimals - Shortcuts &amp; Tricks for Placement Tests, Job Interviews &amp; Exams" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        <h3>Aptitude</h3>
        <p>Aptitude practice question and puzzles to  boost your thinking brain.</p>
        </div>

        <div className="inner-video">
        <iframe width="949" height="534" src="https://www.youtube.com/embed/j8nAHeVKL08?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL" title="Introduction to C++, Installing VS Code, g++ &amp; more | C++ Tutorials for Beginners #1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        <h3>C++ Programming</h3>
        <p>Deep Dive into the fundemental of c++ programming</p>
        </div>
        <div className="inner-video">
        <iframe width="949" height="534" src="https://www.youtube.com/embed/bkSWJJZNgf8?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p" title="Lec-0: Operating System Syllabus Discussion for all College/University &amp; Comptitive exams (GATE,NET)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        <h3>Operating System</h3>
        <p>Learn in-depth concepts of Operating System easily</p>
        </div>

      </div>
    </div>
  );
}

export default Video;
