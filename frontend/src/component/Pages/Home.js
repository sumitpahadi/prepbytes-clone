import React from "react";
import "../Style.css";
import Slider from "../Slider/Slider";

import Form from "../Form/Fom";

function Home() {

  return (
    <div>
      <div className="container">
        <div className="text">
          <h1>
            <p style={{ color: "#f78077" }}>Start your journey of success</p>{" "}
            Personalised Coding Programs to make coding easier for you
          </h1>

          <p  style={{ color: "#f78077" }} >Want to know how PrepBytes can help you?</p>
          <button>Explore now</button>
        </div>
        <div className="image">
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Masterhead(web).svg"
            alt=""
          />
        </div>
      </div>
      <hr />
      <div className="continer2">
        <img
          src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Google-launchpad.webp"
          alt=""
        />
        <img
          src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/future-skills-homepage.webp"
          alt=""
        />
        <img
          src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/she-leads.webp"
          alt=""
        />
        <img
          src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aws-ed-start.webp"
          alt=""
        />
      </div>
      <div>
       
        <br />

        <div className='CodingJourney'>
          <hr />
        <div className="CodingJourney__main">

            <div className="CodingJourney__main-left">
                <div className="lazyload-wrapper">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/stairs_of_approach(web).svg" alt=""  className='CodingJourney__main-left--img'/>
                </div>
            </div>
            <div className="CodingJourney__main-right">
                <p className='CodingJourney__main-right--heading'>How PrepBytes Mentorship driven Personalised Learning works?</p>
                <p className="CodingJourney__main-right--subheading"></p>

                <div className="CodingJourney__main-right-container">
                    <div className="lazyload-wrapper">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/stairs_of_approach(web).svg" alt=""  className='CodingJourney__main-right--img'/>
                    </div>

                    <div className="CodingJourney__main-right-container-card-one">

                        <div className="CodingJourney__main-right-container-card-one-left">

                            <p className='CodingJourney__main-right-container-card-one-left--heading'>Personalised Lectures & Weekly Plan</p>

                            <div className="CodingJourney__main-right-container-card-one-left-box" style={{background: "rgb(253, 240, 215)", border: "1px dashed rgb(247, 128, 119)"}}>
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/personalised_learning.svg" alt="" className='CodingJourney__main-right-container-card-one-left-box--img'/>
                                <p className='CodingJourney__main-right-container-card-one-left-box--text'>Get learning videos & weekly plan based on your coding skills</p>
                            </div>
                        </div>

                        <div className="CodingJourney__main-right-container-card-one-right">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjEiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOSAxLjAxNSkiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik02NjgsNDc3MS4xNTRzMTM5LjE4OS0yNywxMzIuNjQ0LDc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY3Ljk5OSAtNDc2Ny45MTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCIvPgogICAgPHBhdGggaWQ9Ikljb25faW9uaWMtaW9zLWFycm93LWJhY2siIGRhdGEtbmFtZT0iSWNvbiBpb25pYy1pb3MtYXJyb3ctYmFjayIgZD0iTTIuOTUsOC41NTgsOS40MjgsMi4wODVBMS4yMjMsMS4yMjMsMCwwLDAsNy43LjM1N0wuMzU2LDcuNjkxQTEuMjIxLDEuMjIxLDAsMCwwLC4zMjEsOS4zNzhMNy42OSwxNi43NjNhMS4yMjMsMS4yMjMsMCwwLDAsMS43MzMtMS43MjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuODggODQuOTM4KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==" alt="" />
                        </div>

                    </div>

                    <div className="CodingJourney__main-right-container-card-two">

                        <div className="CodingJourney__main-right-container-card-two-left">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjIiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1LjE1NykiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik04MDAuODY2LDQ3NzEuMTU0cy0xMzkuMTg5LTI3LTEzMi42NDQsNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkuODY2IC00NzcyLjA2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0Ii8+CiAgICA8cGF0aCBpZD0iSWNvbl9pb25pYy1pb3MtYXJyb3ctYmFjayIgZGF0YS1uYW1lPSJJY29uIGlvbmljLWlvcy1hcnJvdy1iYWNrIiBkPSJNMi45NSw4LjU2Mmw2LjQ3OCw2LjQ3MkExLjIyMywxLjIyMywwLDAsMSw3LjcsMTYuNzYyTC4zNTYsOS40MjhBMS4yMjEsMS4yMjEsMCwwLDEsLjMyMSw3Ljc0MUw3LjY5LjM1N0ExLjIyMywxLjIyMywwLDAsMSw5LjQyMywyLjA4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgODAuNzk2KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==" alt="" className='CodingJourney__main-right-container-card-two-left--icon' />
                        </div>
                        <div className="CodingJourney__main-right-container-card-two-right">

                            <p className='CodingJourney__main-right-container-card-two-right--heading' style={{color: "rgb(253, 205, 6)"}}>Personalised Coding Assignments</p>
                            
                            <div className="CodingJourney__main-right-container-card-two-right-box" style={{background: "rgb(255, 249, 228)", border: "1px dashed rgb(253, 205, 6)"}}>

                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/code_live_with_experts.svg" alt=""  className='CodingJourney__main-right-container-card-two-right-box--img'/>
                                <p className='CodingJourney__main-right-container-card-two-right-box--text' style={{color: "rgb(253, 205, 6)"}}>Practice coding questions that adapts based on your progress</p>

                            </div>
                        </div>
                    </div>

                    <div className="CodingJourney__main-right-container-card-one">

                        <div className="CodingJourney__main-right-container-card-one-left">

                            <p className='CodingJourney__main-right-container-card-one-left--heading' style={{color: "rgb(15, 181, 130)"}}>Doubt Solving by Coding Experts</p>

                            <div className="CodingJourney__main-right-container-card-one-left-box" style={{background: "rgb(228, 246, 241)", border: "1px dashed rgb(15, 181, 130)"}}>
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/ask_doubts_totally_live.svg" alt=""  className='CodingJourney__main-right-container-card-one-left-box--img'/>
                                <p className='CodingJourney__main-right-container-card-one-left-box--text' style={{color: "rgb(15, 181, 130)"}}>Getting Stuck While Coding? Get all your doubts resolved.</p>
                            </div>
                        </div>

                        <div className="CodingJourney__main-right-container-card-one-right">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjEiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOSAxLjAxNSkiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik02NjgsNDc3MS4xNTRzMTM5LjE4OS0yNywxMzIuNjQ0LDc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY3Ljk5OSAtNDc2Ny45MTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCIvPgogICAgPHBhdGggaWQ9Ikljb25faW9uaWMtaW9zLWFycm93LWJhY2siIGRhdGEtbmFtZT0iSWNvbiBpb25pYy1pb3MtYXJyb3ctYmFjayIgZD0iTTIuOTUsOC41NTgsOS40MjgsMi4wODVBMS4yMjMsMS4yMjMsMCwwLDAsNy43LjM1N0wuMzU2LDcuNjkxQTEuMjIxLDEuMjIxLDAsMCwwLC4zMjEsOS4zNzhMNy42OSwxNi43NjNhMS4yMjMsMS4yMjMsMCwwLDAsMS43MzMtMS43MjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuODggODQuOTM4KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==" alt="" />
                        </div>

                    </div>

                    <div className="CodingJourney__main-right-container-card-two">
                        
                        <div className="CodingJourney__main-right-container-card-two-left">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjIiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1LjE1NykiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik04MDAuODY2LDQ3NzEuMTU0cy0xMzkuMTg5LTI3LTEzMi42NDQsNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkuODY2IC00NzcyLjA2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0Ii8+CiAgICA8cGF0aCBpZD0iSWNvbl9pb25pYy1pb3MtYXJyb3ctYmFjayIgZGF0YS1uYW1lPSJJY29uIGlvbmljLWlvcy1hcnJvdy1iYWNrIiBkPSJNMi45NSw4LjU2Mmw2LjQ3OCw2LjQ3MkExLjIyMywxLjIyMywwLDAsMSw3LjcsMTYuNzYyTC4zNTYsOS40MjhBMS4yMjEsMS4yMjEsMCwwLDEsLjMyMSw3Ljc0MUw3LjY5LjM1N0ExLjIyMywxLjIyMywwLDAsMSw5LjQyMywyLjA4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgODAuNzk2KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==" alt="" />
                        </div>

                        <div className="CodingJourney__main-right-container-card-two-right">
                            <p className='CodingJourney__main-right-container-card-two-right--heading' style={{color: "rgb(240, 119, 149)"}}>CODE LIVE WITH Top Coders</p>
                            <div className="CodingJourney__main-right-container-card-two-right-box" style={{background: "rgb(255, 231, 237)", border:" 1px dashed rgb(240, 119, 149)"}}>
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/personalised_practice.svg" alt=""  className='CodingJourney__main-right-container-card-two-right-box--img'/>
                                <p className='CodingJourney__main-right-container-card-two-right-box--text' style={{color: "rgb(240, 119, 149)"}}>Topic wise Live Coding sessions with top rated coders</p>
                            </div>

                        </div>
                    </div>

                    <div className="CodingJourney__main-right-container-card-three">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/achieve_your_coding_dream.svg" alt=""  className='CodingJourney__main-right-container-card-three--img'/>
                    </div>


                </div>
            </div>

        </div>
    </div>
      </div>
      {/* ---------------new section----------------------- */}
      <div className="container-4">
        <div className="container-4-heading">
          <h1>I Want to</h1>
        </div>
        <div className="program ">
          <div className="image-container">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/bg_prepare_for_campus.webp"
              alt=""
            />
            <div className="sub-program">
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/prepare_for_campus.webp"
                alt=""
              />
              <p>PREPARE FOR CAMPUS PLACEMENT</p>
              <button>
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/bg_master_competetive.webp"
              alt=""
            />
            <div className="sub-program">
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/master_competetive_pgm.webp"
                alt=""
              />
              <p>MASTER COMPETITIVE PROGRAMMING</p>
              <button>
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/bg_learn_full_mern.webp"
              alt=""
            />
            <div className="sub-program">
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/learn_full_stack.webp"
                alt=""
              />
              <p>
                BUILD DEVELOPMENT
                <br />
                PROJECT
              </p>
              <button>
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------new section---------------------------- */}
      <div className="container5">
        <div className="inner-container-1">
          <div className="sub-inner">
            <h1>Are you an Experienced Professional willing to Switch?</h1>
          </div>
          <div className="sub-inner-1 ">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/industry_vetted_curriculum.svg"
              alt=""
            />
            <p>INDUSTRY VETTED CURRICULUM STRUCTURED FOR YOU</p>
          </div>
          <div className="sub-inner-1">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/real_life_projects.svg"
              alt=""
            />
            <p>REAL LIFE PROJECTS BUILT ON DEMAND TECH STACK</p>
          </div>
          <div className="sub-inner-1">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/exclusive_placement.svg"
              alt=""
            />
            <p>EXCLUSIVE PLACEMENT SUPPORT TEAM WITH JOB GURANTEE</p>
          </div>
          <div className="sub-inner-2">
            <p>
              PrepBytes Elevation Academy - 4 months Full Stack Program with Job
              Guarantee
            </p>
          </div>
          <div className="sub-inner-3">
            <button>Know more</button>
          </div>
        </div>
        <div className="inner-container-2">
          <div className="sub-inner-4">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/for_2020(1st+Image).svg"
              alt=""
            />
          </div>
          <div className="sub-inner-5">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/tools_for_2020.svg"
              alt=""
              className="image1"
            />
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/for_2020_image_2.svg"
              alt=""
              className="image2"
            />
          </div>
        </div>
      </div>
      {/* ------------------------------------new section----------------------------------------------------- */}

      <div className="container-6-top">
        <div className="container-6">
          <div className="lady">
            <div className="inner-lady">
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor.png"
                alt=""
                className="imag1"
              />
              <h2>Mamta Kumari</h2>
              <p>Co-Founder PrepBytes</p>
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png"
                alt=""
                className="img2"
              />
            </div>
          </div>

          <div className="info">
            <h1>
              Attend Free sessions with industry experts and get valuable
              guidance
            </h1>
            <h2>How to master competitive coding?</h2>
            <button>Know More</button>
            <hr />
            <h2>How to crack coding interviews?</h2>
            <button>Know More</button>
          </div>
        </div>

        {/* -------------------------------------boxes------------------------------------------- */}
        <div className="knowdetail">
          <div className="detail1">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/100k_coding.svg"
              alt=""
            />
            <h1>100K+</h1>
            <p>Coding Community</p>
          </div>
          <div className="detail1">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/1000%2B_hours_pf.svg"
              alt=""
            />

            <h1>1000+</h1>
            <p>Hours of Live session</p>
          </div>
          <div className="detail1">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/10000_hours_learning.svg"
              alt=""
            />
            <h1>10000+</h1>
            <p>Hours of learning</p>
          </div>
          <div className="detail1">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/doubts_solved.svg"
              alt=""
            />
            <h1>700K+</h1>
            pDoubts Solved
          </div>
        </div>
      </div>
      {/* ---------------------------------------new section------------------------------------------------------------ */}

      <div className="continer-7">
        <div className="inner">
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Bespoke+Mentors.webp"
            alt=""
            className="hidden"
          />
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Selected_pool_of(mobile)+(1).webp"
            alt=""
            className="display"
          />
        </div>{" "}
      </div>

      {/* --------------------slider------------------------------- */}

      <div className="slider-heading">
        <h1 style={{textAlign:"center"}}>100% of our students finishing the course <br /> have got placed</h1>
      </div>
      <Slider />

      {/* ---------------------new map------------------------------------------- */}
      <div className="student-map">
        <img
          src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/you_could_be_the(web_1366).png"
          alt=""
        />
      </div>

      {/* ---------------------------mentors------------------------------------- */}
      <div className="mentors">
        <div className="heading1">
          <h1>PrepBytes Mentors</h1>
          <p>
            PrepBytes students get mentored by industry experts who have
            achieved in <br></br> their careers and are passionate about helping
            students achieve their dream.
          </p>
        </div>
      </div>

      {/* -------------for mentor------------ */}

      <div className="prepbytes-mentor">
        <div className="mentor-1">
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor_background.png"
            alt=""
            className="back"
          />
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_ma'am(Mentor).png"
            alt=""
            className="mamta"
          />
          <h2>Mamta</h2>
          <p>Co-Founder, PrepBytes</p>
          <hr />
          <p>
            Mamta has a great passion for coding and motivates students to
            pursue coding. Her mission is to use her knowledge and expertise to
            help students get placed in their dream company.
          </p>
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png"
            alt=""
            className="center"
          />
        </div>
        <div className="mentor-1">
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor_background.png"
            alt=""
            className="back"
          />
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Aditya_bhusan.png"
            alt=""
            className="mamta"
          />
          <h2>Aditya</h2>
          <p>Co-Founder, PrepBytes</p>
          <hr />
          <p>
            Mamta has a great passion for coding and motivates students to
            pursue coding. Her mission is to use her knowledge and expertise to
            help students get placed in their dream company.
          </p>
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/PrepBytes.png"
            alt=""
            className="center"
          />
        </div>
        <div className="mentor-1">
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor_background.png"
            alt=""
            className="back"
          />
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aveek_sir.png"
            alt=""
            className="mamta"
          />
          <h2>Aveek</h2>
          <p>Mentor, PrepBytes</p>
          <hr />
          <p>
            Mamta has a great passion for coding and motivates students to
            pursue coding. Her mission is to use her knowledge and expertise to
            help students get placed in their dream company.
          </p>
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/PrepBytes.png"
            alt=""
            className="center"
          />
        </div>
        <div className="mentor-1">
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor_background.png"
            alt=""
            className="back"
          />
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/kunal_sir.png"
            alt=""
            className="mamta"
          />
          <h2>Kunal</h2>
          <p>SDE, Amazon</p>
          <hr />
          <p>
            Mamta has a great passion for coding and motivates students to
            pursue coding. Her mission is to use her knowledge and expertise to
            help students get placed in their dream company.
          </p>
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png"
            alt=""
            className="center"
          />
        </div>
        <div className="mentor-1">
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor_background.png"
            alt=""
            className="back"
          />
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/virali_vora.png"
            alt=""
            className="mamta"
          />
          <h2>Virali</h2>
          <p>SDE, Google</p>
          <hr />
          <p>
            Mamta has a great passion for coding and motivates students to
            pursue coding. Her mission is to use her knowledge and expertise to
            help students get placed in their dream company.
          </p>
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Google_logo.png"
            alt=""
            className="center"
          />
        </div>
        <div className="mentor-1">
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor_background.png"
            alt=""
            className="back"
          />
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/kushdeep_sir.png"
            alt=""
            className="mamta"
          />
          <h2>Kushdeep</h2>
          <p>SDE, Sharechat</p>
          <hr />
          <p>
            Mamta has a great passion for coding and motivates students to
            pursue coding. Her mission is to use her knowledge and expertise to
            help students get placed in their dream company.
          </p>
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/sharechat.png"
            alt=""
            className="center"
          />
        </div>
      </div>

      {/* ------------------------------------------new section--------------------------------------- */}
      <div className="college">
        <div className="college-heading">
          <div className="sub-heading">
            <h1>Want to represent your college</h1>
            <p>Join Prepbytes Campus Business Manager Internship Program</p>
            <button>Join Now</button>
          </div>
        </div>
        <img
          src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/campus-business-manager/banner/CBM-Homepage-mobile.webp"
          alt=""
          className="college-hidden"
        />
        <img
          src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/campus-business-manager/banner/CBM-WEB.webp "
          alt=""
          className="college-display"
        />
      </div>

      {/* ---------------------------------------Mentors & Colleges--------------------------------------- */}

      <div className="college">
        {" "}
        <h1>PrepBytes for Mentors & Colleges</h1>
        <p>
          "Join PrepBytes in the journey to reach more colleges and mentor more
          students"
        </p>
      </div>

      <div className="college-mentor">
        <div className="inner-college-mentor">
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/be_a_part_of_mentors.png"
            alt=""
          />
          <h3>Be a part of growing Mentor Community of PrepBytes</h3>
          <p>
            We look forward to industry experts who have a passion for teaching,
            mentoring & making students future-ready
          </p>
          <button>Know More</button>
        </div>
        <div className="inner-college-mentor">
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/futuristic_algo.png"
            alt=""
          />
          <h3>
            Futuristic ALGO-driven Personalised learning module for your college
          </h3>
          <p>
            Every Student is different, hence their Learning should also be. Get
            in touch with to understand how PrepBytes can help students in your
            college
          </p>
          <button>Know More</button>
        </div>
      </div>

      {/* ----------------------------------------------------------------blogs--------------------------------------------------- */}
      <div className="blogs-container">
        <h1>Most Popular Blogs</h1>

        <div className="blogs">

     
        <div className="inner-blogs">
          <img
            src="https://blog-images-upload.s3.ap-south-1.amazonaws.com/blog_top_50_interview_questions_answers.png"
            alt=""
            />
          <p>Top 50 C Programming Interview Questions and Answers</p>
          <h3>Read Now</h3>
        </div>
        <div className="inner-blogs">
          <img
            src="https://s3.ap-south-1.amazonaws.com/blog-images-upload/blog_vinit_story.png"
            alt=""
            />
          <p>Motivational Story : He got his first placement success after being rejected by 22 companies</p>
          <h3>Read Now</h3>
        </div>
        <div className="inner-blogs">
          <img
            src="https://blog-images-upload.s3.ap-south-1.amazonaws.com/blog_top_50_interview_questions_answers.png"
            alt=""
            />
          <p>Lyrics from the famous track aptly describes the situation of every fresher when it comes to facing the interview</p>
          <h3>Read Now</h3>
        </div>
            </div>
      </div>

      {/* ------------------------------------------form ------------------------------------------ */}
      <Form/>
      
     
    </div>
  );
}

export default Home;
