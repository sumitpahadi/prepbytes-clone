import React from "react";
import Toggle from "../Syllabus-toggler/Toggle"
import image from "../logos/Logo";
import Mutli_Carousel from "../Carousel/Mutli-Carousel";
import Program_info from "../Program-info/Program_info";
function Full_stack() {
  console.log(image[0].image1);
  console.log(image[0].image2);
  return (
    <div style={{ background: "#f7f7f7 0 0 no-repeat padding-box" }}>
      <div className="full-stack">
        <div className="inner-full-stack">
          <p>Partner with</p>
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/development-programs/header-logo.svg"
            alt=""
          />
          <h2>
            Learn Full Stack Web Development & Build Real World Projects using
            React & Node
          </h2>
          <p>
            Full Stack Web Development Certification Course - Accredited by
            Nasscom, approved by the Government India.
          </p>
          <button>Download Syllabus</button>
        </div>

        <div className="inner-full-stack-2">
          <div className="info-batch">
            <p>Next Batch starts: 1st May, 2023 Limited seats available</p>
          </div>
          <div className="info-batch">
            <p>Program Duration: 4 - 5 months 15-20 hours/week</p>
          </div>
          <div className="info-batch">
            <p>Learning Format Recorded Lectures + Online Live Classes</p>
          </div>
        </div>
      </div>

      {/* -----------------------selection of batch full stack------------------------------------------------------------ */}

      <div className="full-stack-selection">
        <div className="inner-select-batch">
          <p style={{ padding: "30px" }}>SELECT BATCH</p>
        </div>

        <div className="inner-select-batch inner-select-batch1">
          <div className="radio">
            <input type="radio" />
            <p>1st May</p>
          </div>
          <p style={{ color: "red" }}>Enrolment Started</p>
        </div>
        <div className="inner-select-batch inner-select-batch1">
          <div className="radio">
            <input type="radio" />
            <p>15th May</p>
          </div>
          <p style={{ color: "red" }}> Enrolment Started</p>
        </div>

        <div className="inner-select-batch">
          <p style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>
            ₹30000
          </p>
          <div className="tryfree">
            <button>Enroll Now</button>
            <button>TRy For Free</button>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------logos of full stack----------------------------------------------------- */}

      <div className="full-stack-logo">
        <div className="inner-detail">
          <h1>Languages & Tools you will learn</h1>
          <p>
            Start learning web development from basics of HTML, CSS,
            Javascript.Master latest technologies like React, Node, Express. Get
            hands on Github, MongoDB, Google Analytics, Facebook Analytics
          </p>
        </div>

        <div className="inner-detail-logo">
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/tools1.png"
            alt=""
          />
        </div>
      </div>

      {/* ------------------------------------------------------------------Batch Commencement-------------------------------------------- */}

      <div className="journey">
        <div className="jouney1">
          <div className="inner-jouney">
            <p>Batch Commencement</p>

            <div className="numer">1</div>
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
            <p>
              Learn required languages, <br /> framework & tools
            </p>
            <div className="numer">2</div>
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
            <p>
              Complete awesome real
              <br /> world projects
            </p>
            <div className="numer">3</div>
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
            <p>
              Experience the complete <br /> development lifecycle
            </p>
            <div className="numer">4</div>
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
            <p>
              Be a certified Full <br /> Stack Developer
            </p>
            <div className="numer">5</div>
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

        <div className="jouney2">
          <h2 style={{ textAlign: "center" }}>Batch Commencement</h2>

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
      </div>

      {/* --------------------------------girl-------------------------------------------------------- */}

      <div className="girl-img">
        <img
          src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/girlimage.webp"
          alt=""
        />
        <div className="inner-girl-img-deatil">
          <h2>What you will be after finishing the program?</h2>
          <div className="girl-info">
            <p>
              <img
                src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/after-program/certificate.svg"
                alt=""
              />
              Certified Full stack Developer
            </p>
            <p>
              <img
                src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/after-program/realtime.svg"
                alt=""
              />
              Experience of Real world work
            </p>
            <p>
              <img
                src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/after-program/excellent.svg"
                alt=""
              />
              Ready to crack any web developer interview
            </p>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------------hires-------------------------------------------- */}

      <div className="hire-roles">
        <h2>Companies that hire for the roles</h2>

        <div className="roles-we-hier">
          <div className="Tech-Giants">
            <h3>Tech Giants</h3>
            <p>
              Tech giants keep hiring for web developement roles. You will often
              find opening for Frontend, Backend or Full Stack Developers.
              Strong knowledge and good projects will help you grab an
              oppurtunity here
            </p>
            <div className="hire-company">
              <img src={image[0].image1} alt="" />
              <img src={image[0].image2} alt="" />
              <img src={image[0].image3} alt="" />
              <img src={image[0].image4} alt="" />
              <img src={image[0].image5} alt="" />
            </div>
          </div>
          <div className="Tech-Giants">
            <h3>Established Startups</h3>
            <p>
              All the well known start ups have their website and they use
              latest tech to build them. Experience with web development and
              good problem skill is all you need to crack these companies.
            </p>
            <div className="hire-company">
              <img src={image[0].image6} alt="" />

              <img src={image[0].image7} alt="" />
              <img src={image[0].image8} alt="" />

              <img src={image[0].image9} alt="" />
              <img src={image[0].image10} alt="" />
            </div>
          </div>
          <div className="Tech-Giants">
            <h3>Growing Startups</h3>
            <p>
              Almost Every Startup have a web app or mobile app. Hundreds of
              growing startups or Early-stage startup keep looking for interns
              or web developers to help them convert their idea to reality.
            </p>
            <div className="hire-company">
              <img src={image[0].image11} alt="" />
              <img src={image[0].image12} alt="" />
              <img src={image[0].image13} alt="" />

              <img src={image[0].image14} alt="" />

              <img src={image[0].image15} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------growth--------------------------------------------------- */}

      <div className="growth">
        <div className="Industry-Growth">
          <h2>Industry Growth</h2>
          <div className="inner-industry">
            <div className="inner-growth">
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/machine-learning/growth.svg"
                alt=""
              />
              <p>
                30% Annual Growth <br /> for Full-Stack Developer <br /> jobs by
                2020.
              </p>
            </div>

            <div className="inner-growth">
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/machine-learning/newJobs.svg"
                alt=""
              />
              <p>
                Over 1 million new jobs <br />
                Full-Stack Developer profile will be <br /> created by 2020
                (Source: NASSCOM)
              </p>
            </div>
          </div>
        </div>

        <div className="annual-salary">
          <h3>Annual Salary</h3>
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/machine-learning/download.svg"
            alt=""
          />
        </div>
      </div>

      {/* ------------------------------------instructors---------------------------------------------------------- */}
      <div className="instructors">
        <h2>Mentors & Instructors</h2>
        <div className="inner-instructors">
          <div className="teach-mentors">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/Mamta.webp"
              alt=""
            />
            <h3>Mamta Kumari, Co-Founder PrepBytes</h3>
            <p>
              Mamta has over 5 years of experience working in tech giants like
              Amazon and Samsung and has mentored more than 2000 students to
              help them enhance their coding skills. She is all set to guide you
              in your journey of web development
            </p>
          </div>
          <div className="teach-mentors">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/mentor_rahul.webp"
              alt=""
            />
            <h3>Rahul Dutta, Software Developer OLA</h3>
            <p>
              Rahul has work experience of over 3 years and is currently working
              as Software Developer in OLA. Rahul has mentored many students in
              past and is excited about sharing his knowledge here.
            </p>
          </div>
          <div className="teach-mentors">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/mentor_harshita.webp"
              alt=""
            />
            <h3>Harshita Sharma, Product Engineer AskSid.ai</h3>
            <p>
              Harshita is currently working in AskSid.ai and has worked in
              MindTree as Full Stack Developer. Apart from Web Development she
              also have experience in developing Voice-based Chatbots using
              Dialogflow from Google.
            </p>
          </div>
        </div>
      </div>
      <Toggle />

      {/* --------------------------------------certificate---------------------------------- */}

      <div className="certificate">
        <div className="inner-certificate">
          <h2>Get a real time project</h2>

          <div className="certificate-info">
            <div className="certificate-log">
              <img
                src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/real-time/real.svg"
                alt=""
              />
              <p>Get a real time project</p>
            </div>
            <div className="certificate-log">
              <img
                src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/real-time/experience.svg"
                alt=""
              />
              <p>Experience agile methodology & Work with industry experts</p>
            </div>
            <div className="certificate-log">
              <img
                src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/real-time/deploy.svg"
                alt=""
              />
              <p>Deploy your project to Production</p>
            </div>
          </div>
        </div>
        <div className="inner-certificate inner-certificate2">
          <h2>Certification</h2>
          <p>
            Joint Co-Branded Participation Certificate & Partner Completion
            Certificate
          </p>
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/development-programs/nasscom-certificate-full-satck-mern.png"
            className="certificate-img"
            alt=""
          />
        </div>
      </div>

      {/* ----------------------------------------------------------------get in touch------------------------------------------------------ */}
      <div className="get-in-touch">
        <div className="inner-detail-for-get">
          <div className="duration-info">
            <div className="inner-duration">
              <img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQoJPCFFTlRJVFkgbnNfdmFycyAiaHR0cDovL25zLmFkb2JlLmNvbS9WYXJpYWJsZXMvMS4wLyI+DQoJPCFFTlRJVFkgbnNfaW1yZXAgImh0dHA6Ly9ucy5hZG9iZS5jb20vSW1hZ2VSZXBsYWNlbWVudC8xLjAvIj4NCgk8IUVOVElUWSBuc19zZncgImh0dHA6Ly9ucy5hZG9iZS5jb20vU2F2ZUZvcldlYi8xLjAvIj4NCgk8IUVOVElUWSBuc19jdXN0b20gImh0dHA6Ly9ucy5hZG9iZS5jb20vR2VuZXJpY0N1c3RvbU5hbWVzcGFjZS8xLjAvIj4NCgk8IUVOVElUWSBuc19hZG9iZV94cGF0aCAiaHR0cDovL25zLmFkb2JlLmNvbS9YUGF0aC8xLjAvIj4NCl0+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNnB4Ig0KCSB2aWV3Qm94PSIwIDAgMjYgMjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI2IDI2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRjRBMzRDO30NCjwvc3R5bGU+DQo8bWV0YWRhdGE+DQoJPHNmdyAgeG1sbnM9IiZuc19zZnc7Ij4NCgkJPHNsaWNlcz48L3NsaWNlcz4NCgkJPHNsaWNlU291cmNlQm91bmRzICBib3R0b21MZWZ0T3JpZ2luPSJ0cnVlIiBoZWlnaHQ9IjI2IiB3aWR0aD0iMjYiIHg9Ii0xIiB5PSItMSI+PC9zbGljZVNvdXJjZUJvdW5kcz4NCgk8L3Nmdz4NCjwvbWV0YWRhdGE+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTMuMiw0LjJoLTEuNGwtMC41LDguOWwwLjEsMC45bDYuNiw1LjlsMS0xLjFMMTMuNywxM0wxMy4yLDQuMnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTMsMEM1LjgsMCwwLDUuOCwwLDEzczUuOCwxMywxMywxM3MxMy01LjgsMTMtMTNTMjAuMiwwLDEzLDB6IE0xMywyMy44QzcsMjMuOCwyLjIsMTksMi4yLDEzUzcsMi4yLDEzLDIuMg0KCQlTMjMuOCw3LDIzLjgsMTNTMTksMjMuOCwxMywyMy44eiIvPg0KPC9nPg0KPC9zdmc+DQo="
                alt=""
              />
              <p>
                Course Duration <br /> 80 hours
              </p>
            </div>
            <div className="inner-duration">
              <img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQoJPCFFTlRJVFkgbnNfdmFycyAiaHR0cDovL25zLmFkb2JlLmNvbS9WYXJpYWJsZXMvMS4wLyI+DQoJPCFFTlRJVFkgbnNfaW1yZXAgImh0dHA6Ly9ucy5hZG9iZS5jb20vSW1hZ2VSZXBsYWNlbWVudC8xLjAvIj4NCgk8IUVOVElUWSBuc19zZncgImh0dHA6Ly9ucy5hZG9iZS5jb20vU2F2ZUZvcldlYi8xLjAvIj4NCgk8IUVOVElUWSBuc19jdXN0b20gImh0dHA6Ly9ucy5hZG9iZS5jb20vR2VuZXJpY0N1c3RvbU5hbWVzcGFjZS8xLjAvIj4NCgk8IUVOVElUWSBuc19hZG9iZV94cGF0aCAiaHR0cDovL25zLmFkb2JlLmNvbS9YUGF0aC8xLjAvIj4NCl0+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNnB4Ig0KCSB2aWV3Qm94PSIwIDAgMjYgMjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI2IDI2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRDNEM0Q4O30NCgkuc3Qxe2ZpbGw6I0Y0QTM0Qzt9DQo8L3N0eWxlPg0KPG1ldGFkYXRhPg0KCTxzZncgIHhtbG5zPSImbnNfc2Z3OyI+DQoJCTxzbGljZXM+PC9zbGljZXM+DQoJCTxzbGljZVNvdXJjZUJvdW5kcyAgYm90dG9tTGVmdE9yaWdpbj0idHJ1ZSIgaGVpZ2h0PSIyMS44IiB3aWR0aD0iMjUiIHg9IjAiIHk9Ii0yLjEiPjwvc2xpY2VTb3VyY2VCb3VuZHM+DQoJPC9zZnc+DQo8L21ldGFkYXRhPg0KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMxKSI+DQoJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTEpIj4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQuNywyNkgxLjNjLTAuNSwwLTAuOC0wLjQtMC44LTAuOGMwLDAsMCwwLDAsMFY1LjFjMC0wLjUsMC40LTAuOCwwLjgtMC44aDMuM2MwLjUsMCwwLjgsMC40LDAuOCwwLjgNCgkJCWMwLDAsMCwwLDAsMHYyMC4xQzUuNSwyNS42LDUuMSwyNiw0LjcsMjZDNC43LDI2LDQuNywyNiw0LjcsMjZ6Ii8+DQoJPC9nPg0KCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ0LjMzMyAzLjQ0NCkiPg0KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNC43LDQuMkgxLjNjLTAuNSwwLTAuOCwwLjQtMC44LDAuOHYxNi43YzAsMC41LDAuNCwwLjgsMC44LDAuOGgzLjNjMC41LDAsMC44LTAuNCwwLjgtMC44VjUuMQ0KCQkJQzUuNSw0LjYsNS4xLDQuMiw0LjcsNC4yeiIvPg0KCTwvZz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDkuOCw4LjV2MTYuN2MwLDAuNS0wLjQsMC44LTAuOCwwLjhoLTEuN1Y3LjdINDlDNDkuNSw3LjcsNDkuOCw4LDQ5LjgsOC41eiIvPg0KCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM3LjY2NyA2Ljc3OCkiPg0KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNC43LDE5LjJIMS4zYy0wLjUsMC0wLjgtMC40LTAuOC0wLjhWNS4xYzAtMC41LDAuNC0wLjgsMC44LTAuOGgzLjNjMC41LDAsMC44LDAuNCwwLjgsMC44djEzLjMNCgkJCUM1LjUsMTguOCw1LjEsMTkuMiw0LjcsMTkuMkM0LjcsMTkuMiw0LjcsMTkuMiw0LjcsMTkuMnoiLz4NCgk8L2c+DQoJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzEgMTAuMTExKSI+DQoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00LjcsMTUuOUgxLjNjLTAuNSwwLTAuOC0wLjQtMC44LTAuOHYtMTBjMC0wLjUsMC40LTAuOCwwLjgtMC44aDMuM2MwLjUsMCwwLjgsMC40LDAuOCwwLjh2MTANCgkJCUM1LjUsMTUuNSw1LjEsMTUuOSw0LjcsMTUuOXoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg=="
                alt=""
              />
              <p>
                Level <br /> Beginners & Intermediate
              </p>
            </div>
          </div>
          <div className="email-info">
            <h2>Not sure? Talk to our advisors</h2>
            <label htmlFor="Email">Email</label>
            <input type="email" />
            <label htmlFor="Phone">Phone</label>
            <input type="text" />
            <button>Get in Touch</button>
          </div>
        </div>
      </div>

      <Mutli_Carousel />

      {/* ------------------------------------bannner------------------------------------------- */}
      <div className="banner">
        <img
          src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/digital-marketing/Feature.webp"
          alt=""
        />
      </div>

      {/* ---------------------------------------------councellig----------------------------------------------- */}

      <div className="counceling">
        <p>
          Still confused! Drop your details & get a call back from our academic
          counselling expert
        </p>
        <button>Get in Touch</button>
      </div>

      {/* -----------------------queston and answeing------------------------------------------------------ */}
      <Program_info />
    </div>
  );
}

export default Full_stack;
