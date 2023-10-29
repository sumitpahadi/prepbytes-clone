import React from "react";
import "./elevation.css";
import "../Style.css";
import Mutli_Carousel from "../Carousel/Mutli-Carousel";

import Program_syllabus from "../Program syllabus/Program_syllabus";
import ApplicationDetail from "../Next Batch/Apllication_detail";
import Frequent from "../Frequent question/Frequent";

function Elevation() {
  return (
    <div>
      {/* -------------------------elevation------------------------header------------------------------------- */}
      <br />
      <br /> <br />
      <div className="IncomeSharingHeader">
        <section className="IncomeSharingHeader-main">
          <div className="IncomeSharingHeader-main__right">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/ISA-masthead-mern-5.webp"
              alt=""
              className="IncomeSharingHeader-main__right--img"
            />
          </div>

          <div className="IncomeSharingHeader-main__left">
            <h1 className="IncomeSharingHeader-main__left--heading">
              PrepBytes Elevation Academy - Full Stack Web Development Career
            </h1>
            <p className="IncomeSharingHeader-main__left--text">
              Enroll in PrepBytes Elevation Academy - Full Stack Program and
              Guaranteed Tech Job of minimum 5 LPA.
            </p>

            <ul className="IncomeSharingHeader-main__left-list">
              <li className="IncomeSharingHeader-main__left-list-item">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS44NjciIGhlaWdodD0iOC44NSIgdmlld0JveD0iMCAwIDExLjg2NyA4Ljg1Ij4KICA8cGF0aCBpZD0iUGF0aF80ODU2IiBkYXRhLW5hbWU9IlBhdGggNDg1NiIgZD0iTTE0LjI0MiwxOS4zMzRsLTMuOTg1LDMuOTg1YS40MzMuNDMzLDAsMSwxLS42MTItLjYxMmwzLjI0OC0zLjI0OEgyLjkzN2EuNDM3LjQzNywwLDEsMSwwLS44NzRIMTIuODhMOS42MzIsMTUuMzM3YS40MjMuNDIzLDAsMCwxLDAtLjYxMi40NTMuNDUzLDAsMCwxLC42MjUsMGwzLjk4NSwzLjk4NWEuNDE0LjQxNCwwLDAsMSwuMTI1LjMxMkEuNDY3LjQ2NywwLDAsMSwxNC4yNDIsMTkuMzM0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNSAtMTQuNikiIGZpbGw9IiM0MjQyNDIiLz4KPC9zdmc+Cg=="
                  alt=""
                  className="IncomeSharingHeader-main__left-list-item--img"
                />
                <p className="IncomeSharingHeader-main__left-list-item--text">
                  Complete Live Class from experts
                </p>
              </li>

              <li className="IncomeSharingHeader-main__left-list-item">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS44NjciIGhlaWdodD0iOC44NSIgdmlld0JveD0iMCAwIDExLjg2NyA4Ljg1Ij4KICA8cGF0aCBpZD0iUGF0aF80ODU2IiBkYXRhLW5hbWU9IlBhdGggNDg1NiIgZD0iTTE0LjI0MiwxOS4zMzRsLTMuOTg1LDMuOTg1YS40MzMuNDMzLDAsMSwxLS42MTItLjYxMmwzLjI0OC0zLjI0OEgyLjkzN2EuNDM3LjQzNywwLDEsMSwwLS44NzRIMTIuODhMOS42MzIsMTUuMzM3YS40MjMuNDIzLDAsMCwxLDAtLjYxMi40NTMuNDUzLDAsMCwxLC42MjUsMGwzLjk4NSwzLjk4NWEuNDE0LjQxNCwwLDAsMSwuMTI1LjMxMkEuNDY3LjQ2NywwLDAsMSwxNC4yNDIsMTkuMzM0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNSAtMTQuNikiIGZpbGw9IiM0MjQyNDIiLz4KPC9zdmc+Cg=="
                  alt=""
                  className="IncomeSharingHeader-main__left-list-item--img"
                />
                <p className="IncomeSharingHeader-main__left-list-item--text">
                  Be the best Full stack developer
                </p>
              </li>

              <li className="l">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS44NjciIGhlaWdodD0iOC44NSIgdmlld0JveD0iMCAwIDExLjg2NyA4Ljg1Ij4KICA8cGF0aCBpZD0iUGF0aF80ODU2IiBkYXRhLW5hbWU9IlBhdGggNDg1NiIgZD0iTTE0LjI0MiwxOS4zMzRsLTMuOTg1LDMuOTg1YS40MzMuNDMzLDAsMSwxLS42MTItLjYxMmwzLjI0OC0zLjI0OEgyLjkzN2EuNDM3LjQzNywwLDEsMSwwLS44NzRIMTIuODhMOS42MzIsMTUuMzM3YS40MjMuNDIzLDAsMCwxLDAtLjYxMi40NTMuNDUzLDAsMCwxLC42MjUsMGwzLjk4NSwzLjk4NWEuNDE0LjQxNCwwLDAsMSwuMTI1LjMxMkEuNDY3LjQ2NywwLDAsMSwxNC4yNDIsMTkuMzM0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNSAtMTQuNikiIGZpbGw9IiM0MjQyNDIiLz4KPC9zdmc+Cg=="
                  alt=""
                  className="IncomeSharingHeader-main__left-list-item--img"
                />
                <p className="IncomeSharingHeader-main__left-list-item--text">
                  Job Guarantee
                </p>
              </li>
            </ul>

            <div className="IncomeSharingHeader-main__left-buttons">
              <div className="IncomeSharingHeader-main__left-buttons--button">
                <button className="IncomeSharingHeader-main__left-buttons--button-enroll">
                  Apply Now
                </button>
              </div>
              <div className="IncomeSharingHeader-main__left-buttons--button">
                <button className="IncomeSharingHeader-main__left-buttons--button-knowmore">
                  Get a call back
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* -------------------new batch-------------------------------------------- */}
      <section className="NewBatch">
        <div className="NewBatch__main">
          <div className="NewBatch__main_left">
            <p className="NewBatch__main_left_heading_text">
              For 2023, 2022 & 2021 graduates
            </p>
            <p className="NewBatch__main_left_date_text">
              Batch Starting: 1st May 2023
            </p>
          </div>

          <div className="NewBatch__main_right">
            <div className="NewBatch__main_right_top">
              <div className="NewBatch__main_right_point_outer_counter">
                <div className="NewBatch__main_right_point_container">
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/free_class.webp"
                    alt=""
                    className="NewBatch__main_right_point_img"
                  />
                  <div className="NewBatch__main_right_point_text_container">
                    <span className="NewBatch__main_right_point_text_heading">
                      Free Webinar
                    </span>
                    <span className="NewBatch__main_right_point_text_date">
                      17th April
                    </span>
                  </div>
                </div>

                <div className="NewBatch__main_right_point_container_connector_line_vertical"></div>
              </div>

              <div className="NewBatch__main_right_point_outer_counter">
                <div className="NewBatch__main_right_point_container">
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Start+Assesment.webp"
                    alt=""
                    className="NewBatch__main_right_point_img"
                  />
                  <div className="NewBatch__main_right_point_text_container">
                    <span className="NewBatch__main_right_point_text_heading">
                      1:1 Counselling session
                    </span>
                    <span className="NewBatch__main_right_point_text_date">
                      From 18th April
                    </span>
                  </div>
                </div>

                <div className="NewBatch__main_right_point_container_connector_line_vertical"></div>
              </div>

              <div className="NewBatch__main_right_point_outer_counter">
                <div className="NewBatch__main_right_point_container">
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Batch+Starts.webp"
                    alt=""
                    className="NewBatch__main_right_point_img"
                  />
                  <div className="NewBatch__main_right_point_text_container">
                    <span className="NewBatch__main_right_point_text_heading">
                      Batch Start
                    </span>
                    <span className="NewBatch__main_right_point_text_date">
                      01 May'23, Mon-Fri (7-10PM)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------dream-----job */}
      <div className="IncomeSharingJourney__container">
        <div className="IncomeSharingJourney__heading_container">
          <h1 className="IncomeSharingJourney__heading">
            How will you reach to your dream Job?
          </h1>
        </div>

        <div className="IncomeSharingJourney__list_container">
          <div className="IncomeSharingJourney__list_title_container">
            <div className="IncomeSharingJourney_item_title_container">
              <div className="IncomeSharingJourney_title_container">
                <span
                  className="IncomeSharingJourney_title_number"
                  style={{
                    background: "rgb(255, 251, 248)",
                    border: "1px dashed rgb(255, 158, 82)",
                  }}
                >
                  1
                </span>
                <span
                  className="IncomeSharingJourney_title"
                  style={{ color: "rgb(255, 158, 82)" }}
                >
                  Application & Shortlisting
                </span>
              </div>
              <div className="IncomeSharingJourney_connector_line"></div>
            </div>

            <div className="IncomeSharingJourney_item_title_container">
              <div className="IncomeSharingJourney_title_container IncomeSharingJourney_title_container_glow">
                <span
                  className="IncomeSharingJourney_title_number"
                  style={{
                    backgroundColor: "rgb(255, 242, 242)",
                    border: "1px dashed rgb(232, 63, 63)",
                  }}
                >
                  2
                </span>
                <span
                  className="IncomeSharingJourney_title"
                  style={{ color: "rgb(232, 63, 63)" }}
                >
                  Attend Free Webinar
                </span>
              </div>
              <div className="IncomeSharingJourney_connector_line"></div>
            </div>

            <div className="IncomeSharingJourney_item_title_container">
              <div className="IncomeSharingJourney_title_container">
                <span
                  className="IncomeSharingJourney_title_number"
                  style={{
                    backgroundColor: "rgb(255, 241, 253)",
                    border: "1px dashed rgb(192, 39, 175)",
                  }}
                >
                  3
                </span>
                <span
                  className="IncomeSharingJourney_title"
                  style={{ color: "rgb(192, 39, 175)" }}
                >
                  Batch Commencement
                </span>
              </div>
              <div className="IncomeSharingJourney_connector_line"></div>
            </div>

            <div className="IncomeSharingJourney_item_title_container">
              <div className="IncomeSharingJourney_title_container">
                <span
                  className="IncomeSharingJourney_title_number"
                  style={{
                    backgroundColor: "rgb(226, 246, 255)",
                    border: "1px dashed rgb(32, 142, 189)",
                  }}
                >
                  4
                </span>
                <span
                  className="IncomeSharingJourney_title"
                  style={{ color: "rgb(32, 142, 189)" }}
                >
                  7 Months Program
                </span>
              </div>
              <div className="IncomeSharingJourney_connector_line"></div>
            </div>

            <div className="IncomeSharingJourney_item_title_container">
              <div className="IncomeSharingJourney_title_container">
                <span
                  className="IncomeSharingJourney_title_number"
                  style={{
                    backgroundColor: "rgb(231, 255, 240)",
                    border: "1px dashed rgb(31, 194, 92)",
                  }}
                >
                  5
                </span>
                <div
                  className="IncomeSharingJourney_title"
                  style={{ color: "rgb(31, 194, 92)" }}
                >
                  Guaranteed Placement
                </div>
              </div>
              <div className="IncomeSharingJourney_connector_line"></div>
            </div>
          </div>

          <div className="IncomeSharingJourney__list_desc_container">
            <div className="IncomeSharingJourney_desc_container">
              <div className="IncomeSharingJourney_desc_text_container">
                <span className="IncomeSharingJourney_desc">
                  Apply, fill the form & wait till we review your application.
                  You will be selected based on the eligibility criteria (2023,
                  2022 & 2021 passouts)
                </span>
              </div>
              <div className="IncomeSharingJourney_desc_img_container">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Application%2B%2BShortlisting.webp"
                  alt=""
                  className="IncomeSharingJourney_desc_img"
                />
              </div>
            </div>

            <div className="IncomeSharingJourney_desc_container">
              <div className="IncomeSharingJourney_desc_text_container">
                <span className="IncomeSharingJourney_desc">
                  Go through the free classes and learn the important concepts
                  while understanding how the program unfolds.
                </span>
              </div>
              <div className="IncomeSharingJourney_desc_img_container">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/5%2BDays%2BFree%2BClass.webp"
                  alt=""
                  className="IncomeSharingJourney_desc_img"
                />
              </div>
            </div>

            <div className="IncomeSharingJourney_desc_container">
              <div className="IncomeSharingJourney_desc_text_container">
                <span className="IncomeSharingJourney_desc">
                  Embark on your journey of success once you receive the offer
                  letter for successful enrolment.
                </span>
              </div>
              <div className="IncomeSharingJourney_desc_img_container">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Complete%2BEnrollment%2B.webp"
                  alt=""
                  className="IncomeSharingJourney_desc_img"
                />
              </div>
            </div>

            <div className="IncomeSharingJourney_desc_container">
              <div className="IncomeSharingJourney_desc_text_container">
                <span className="IncomeSharingJourney_desc">
                  You have now signed up for a learning-filled journey of 7
                  months that ends with you being placed in your dream company.
                </span>
              </div>
              <div className="IncomeSharingJourney_desc_img_container">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/4%2BMonths%2BPrograms.webp"
                  alt=""
                  className="IncomeSharingJourney_desc_img"
                />
              </div>
            </div>

            <div className="IncomeSharingJourney_desc_container">
              <div className="IncomeSharingJourney_desc_text_container">
                <span className="IncomeSharingJourney_desc">
                  The program comes with interview opportunities and a placement
                  guarantee of minimum 5 LPA.
                </span>
              </div>
              <div className="IncomeSharingJourney_desc_img_container">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Interview%2BOpportunities%2B.webp"
                  alt=""
                  className="IncomeSharingJourney_desc_img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------program highlight---------------------------------------- */}
      <section className="ProgramHighlightsNew">
        <div className="ProgramHighlightsNew__heading_container">
          <p className="ProgramHighlightsNew__heading_text">
            Why PrepBytes Elevation Academy?{" "}
          </p>
          <p className="ProgramHighlightsNew__heading_subtext"></p>
        </div>

        <div className="ProgramHighlightsNew__highlights_list_container">
          <div className="ProgramHighlightsNew__highlights_point_container">
            <div className="ProgramHighlightsNew__highlights_point_image_container">
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Live+Learning.webp"
                alt=""
                className="ProgramHighlightsNew__highlights_point_image"
              />
            </div>
            <div className="ProgramHighlightsNew__highlights_point_text_container">
              <p className="ProgramHighlightsNew__highlights_point_text_heading">
                Live Learning
              </p>
              <p className="ProgramHighlightsNew__highlights_point_text_sub_heading">
                Master Mern Stack in Live Classes taken by Experts
              </p>
            </div>
          </div>

          <div className="ProgramHighlightsNew__highlights_point_container">
            <div className="ProgramHighlightsNew__highlights_point_image_container">
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/1+week+of+Free+Classes.webp"
                alt=""
                className="ProgramHighlightsNew__highlights_point_image"
              />
            </div>
            <div className="ProgramHighlightsNew__highlights_point_text_container">
              <p className="ProgramHighlightsNew__highlights_point_text_heading">
                Learn with Industry Experts
              </p>
              <p className="ProgramHighlightsNew__highlights_point_text_sub_heading">
                Learn with leading tech mentors and gain access to real-time web
                development experience.
              </p>
            </div>
          </div>

          <div className="ProgramHighlightsNew__highlights_point_container">
            <div className="ProgramHighlightsNew__highlights_point_image_container">
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Learn+by+Doing.webp"
                alt=""
                className="ProgramHighlightsNew__highlights_point_image"
              />
            </div>
            <div className="ProgramHighlightsNew__highlights_point_text_container">
              <p className="ProgramHighlightsNew__highlights_point_text_heading">
                Learn by Doing
              </p>
              <p className="ProgramHighlightsNew__highlights_point_text_sub_heading">
                Gain in depth experience by building real world projects
              </p>
            </div>
          </div>

          <div className="ProgramHighlightsNew__highlights_point_container">
            <div className="ProgramHighlightsNew__highlights_point_image_container">
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Resume+Building.webp"
                alt=""
                className="ProgramHighlightsNew__highlights_point_image"
              />
            </div>
            <div className="ProgramHighlightsNew__highlights_point_text_container">
              <p className="ProgramHighlightsNew__highlights_point_text_heading">
                Resume Building
              </p>
              <p className="ProgramHighlightsNew__highlights_point_text_sub_heading">
                Get a resume that companies would shortlist
              </p>
            </div>
          </div>

          <div className="ProgramHighlightsNew__highlights_point_container">
            <div className="ProgramHighlightsNew__highlights_point_image_container">
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Mock+Interviews.webp"
                alt=""
                className="ProgramHighlightsNew__highlights_point_image"
              />
            </div>
            <div className="ProgramHighlightsNew__highlights_point_text_container">
              <p className="ProgramHighlightsNew__highlights_point_text_heading">
                Mock Interviews
              </p>
              <p className="ProgramHighlightsNew__highlights_point_text_sub_heading">
                Interview practice with industry veterans with real-time
                feedbacks
              </p>
            </div>
          </div>

          <div className="ProgramHighlightsNew__highlights_point_container">
            <div className="ProgramHighlightsNew__highlights_point_image_container">
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Interview+Opportunities.webp"
                alt=""
                className="ProgramHighlightsNew__highlights_point_image"
              />
            </div>
            <div className="ProgramHighlightsNew__highlights_point_text_container">
              <p className="ProgramHighlightsNew__highlights_point_text_heading">
                Interview Opportunities
              </p>
              <p className="ProgramHighlightsNew__highlights_point_text_sub_heading">
                Get developer interview opportunities after course completion
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------------------------------------syllabus----------------------------------------- */}
      <Program_syllabus />
      {/* ---------------------------------------upcomming------------------------------- */}
      <section className="UpcomingBatches">
        <div className="UpcomingBatches__main">
          <div className="UpcomingBatches__main-left">
            <p className="UpcomingBatches__main-left--text">
              Upcoming Elevation Academy Batch - Full Stack Web Development
              Career - May 2023 now OPEN
            </p>
            <button className="UpcomingBatches__main-left--btn">
              Apply Now
            </button>
          </div>
          <div className="UpcomingBatches__main-right">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/batches-back.webp"
              alt=""
              className="UpcomingBatches__main-right--img"
            />
          </div>
        </div>
      </section>
      {/* ----------------------------------------------testmolis------------------------------------------------ */}
      <Mutli_Carousel></Mutli_Carousel>
      {/* ------------------------------------student placed---------------------------------------- */}
      <div className="StudentsPlaced">
        <div className="StudentsPlaced__main">
          <p className="StudentsPlaced__main--heading">
            Where our Students are placed
          </p>
          <p className="StudentsPlaced__main--subheading">
            "You guarantee hard work, We guarantee placements"
          </p>

          <div className="StudentsPlaced__main-companies">
            <div className="StudentsPlaced__main-companies-container">
              <div className="StudentsPlaced__main-companies-container-box">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Paytm_Logo.webp"
                  alt=""
                  className="StudentsPlaced__main-companies-container-box--img"
                />
              </div>

              <div className="StudentsPlaced__main-companies-container-box">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/info_edge_Logo.svg"
                  alt=""
                  className="StudentsPlaced__main-companies-container-box--img"
                />
              </div>

              <div className="StudentsPlaced__main-companies-container-box">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/SAP_Logo.svg"
                  alt=""
                  className="StudentsPlaced__main-companies-container-box--img"
                />
              </div>

              <div className="StudentsPlaced__main-companies-container-box">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Intuit_Logo.svg"
                  alt=""
                  className="StudentsPlaced__main-companies-container-box--img"
                />
              </div>

              <div className="StudentsPlaced__main-companies-container-box">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Microsoft_Logo.svg"
                  alt=""
                  className="StudentsPlaced__main-companies-container-box--img"
                />
              </div>

              <div className="StudentsPlaced__main-companies-container-box">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Thoughtfocus_Logo.svg"
                  alt=""
                  className="StudentsPlaced__main-companies-container-box--img"
                />
              </div>

              <div className="StudentsPlaced__main-companies-container-box">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/99_Games_Logo.svg"
                  alt=""
                  className="StudentsPlaced__main-companies-container-box--img"
                />
              </div>

              <div className="StudentsPlaced__main-companies-container-box">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Samsung_Logo.svg"
                  alt=""
                  className="StudentsPlaced__main-companies-container-box--img"
                />
              </div>

              <div className="StudentsPlaced__main-companies-container-box">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Amazon_Logo.svg"
                  alt=""
                  className="StudentsPlaced__main-companies-container-box--img"
                />
              </div>

              <div className="StudentsPlaced__main-companies-container-box">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Buy_Hatke_logo.svg"
                  alt=""
                  className="StudentsPlaced__main-companies-container-box--img"
                />
              </div>

              <div className="StudentsPlaced__main-companies-container-box">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Intel_logo.svg"
                  alt=""
                  className="StudentsPlaced__main-companies-container-box--img"
                />
              </div>

              <div className="StudentsPlaced__main-companies-container-box">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Teksystems_logo.svg"
                  alt=""
                  className="StudentsPlaced__main-companies-container-box--img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------aplllication detail--------------------- */}
      <ApplicationDetail />
      {/* ----------------------------------payment-------plan-------------------------------------------- */}
      <div className="PaymentPlans">
        <section className="PaymentPlans__main">
          <p className="PaymentPlans__main--heading">Payment Plans</p>
          <p className="PaymentPlans__main--subheading">
            Choose a payment plan suiting your needs
          </p>

          <div className="PaymentPlans__main--container">
            <div className="PaymentPlans__main-container">
              <div className="PaymentPlans__main-container-right">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/tag4-01.webp"
                  alt=""
                  className="PaymentPlans__main-label-img"
                />
                <div className="PaymentPlans__main-container-left-heading">
                  Pay Upfront*
                </div>
                <div className="PaymentPlans__main-container-left-book">
                  Pay Now
                </div>
                <div className="PaymentPlans__main-container-right-amount">
                  <p className="PaymentPlans__main-container-right-amount-actual">
                    ₹ 70,000
                  </p>
                </div>
                <hr className="PaymentPlans__main-container-right-break" />
                <div className="PaymentPlans__main-container-right-detail">
                  <p className="PaymentPlans__main-container-right-detail-title">
                    {" "}
                    *Money-back guarantee on placements
                  </p>
                  <span className="PaymentPlans__main-container-right-detail-unplace"></span>
                </div>
                <div className="PaymentPlans__main-container-right-emi">
                  EMI Starting at
                </div>
                <div className="PaymentPlans__main-container-right-calculation">
                  <p className="PaymentPlans__main-container-right-calculation-price">
                    ₹ 5833
                  </p>
                </div>
              </div>
            </div>

            <div className="PaymentPlans__main-container-emi">
              <button className="PaymentPlans__main--container-card-left-second--btn">
                Register
              </button>
            </div>
          </div>

          <div className="PaymentPlans__main--guidelines">
            <div className="PaymentPlans__main--guidelines-container">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS45OTgiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNS45OTggMTYiPgogIDxwYXRoIGlkPSJJY29uX2F3ZXNvbWUtY2hlY2stZG91YmxlIiBkYXRhLW5hbWU9Ikljb24gYXdlc29tZS1jaGVjay1kb3VibGUiIGQ9Ik0xNS43NzcsNS40NjEsMTQuNTQsNC4yMjNhLjc0Ny43NDcsMCwwLDAtMS4wNTksMEw2LDExLjcwNywyLjUxNiw4LjIyM2EuNzQ3Ljc0NywwLDAsMC0xLjA1OSwwTC4yMTcsOS40NjNhLjc1MS43NTEsMCwwLDAsMCwxLjA2Mmw1LjI0OSw1LjI1MmEuNzQ3Ljc0NywwLDAsMCwxLjA1OSwwbDkuMjQ5LTkuMjU1QS43NTMuNzUzLDAsMCwwLDE1Ljc3Nyw1LjQ2MVpNNS42NDQsOC43NzNhLjUuNSwwLDAsMCwuNzA2LDBsNi41LTYuNTA1YS41LjUsMCwwLDAsMC0uNzA2TDExLjQzNy4xNDZhLjUuNSwwLDAsMC0uNzA2LDBMNiw0Ljg3OSw0LjI2NiwzLjE0NWEuNS41LDAsMCwwLS43MDYsMEwyLjE0NSw0LjU2MWEuNS41LDAsMCwwLDAsLjcwNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDA0IDAuMDAyKSIgZmlsbD0iI2Y3ODA3NyIvPgo8L3N2Zz4K"
                alt=""
                className="PaymentPlans__main--guidelines-container--img"
              />
              <p className="PaymentPlans__main--guidelines-container--text">
                <span>Guaranteed Placement of minimum 5 LPA</span>
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* ----------------------our mentor---------------------------------------------- */}
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
      </div>
      {/* --------------------------------------webinar-------------------------- */}
      <div className="TestDetails">
        <div className="TestDetails__main">
          <div className="TestDetails__main-container">
            <div className="TestDetails__main--container-card">
              <div className="TestDetails__main--container-card-left">
                <div className="TestDetails__main--container-card-left-second">
                  <p className="TestDetails__main--container-card-left-second--text">
                    Free Webinar
                  </p>
                  <p className="TestDetails__main--container-card-left-second--subtext">
                    Experts mentors designed to get you job-ready, designed for
                    complete beginners as well.
                  </p>
                </div>
                <div className="TestDetails__main--container-card-left-first">
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/calendar.webp"
                    alt=""
                    className="TestDetails__main--container-card-left-first--img"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="TestDetails__main--container-card-right">
                <p className="TestDetails__main--container-card-right--text">
                  Free Webinar
                </p>
                <p className="TestDetails__main--container-card-right--subtext">
                  Experts mentors designed to get you job-ready, designed for
                  complete beginners as well.
                </p>
                <div className="TestDetails__main--container-card-right-box">
                  <p className="TestDetails__main--container-card-right-box--text">
                    17th April
                  </p>
                </div>
                <div className="TestDetails__main--container-card-right-button">
                  <button className="TestDetails__main--container-card-right-button--btn">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="IncomeSharingMetrics">
        <div className="IncomeSharingMetrics__main">
          <div className="IncomeSharingMetrics__main-container">
            <div className="IncomeSharingMetrics__main-container-item">
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/faculity-icon.svg"
                alt=""
                className="IncomeSharingMetrics__main-container-item--img"
              />
              <div className="IncomeSharingMetrics__main-container-item-content">
                <p className="IncomeSharingMetrics__main-container-item-content--text">
                  100k+
                </p>
                <p className="IncomeSharingMetrics__main-container-item-content--subtext">
                  Student Coding Community
                </p>
              </div>
            </div>

            <div className="IncomeSharingMetrics__main-container-item">
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/college-icon.svg"
                alt=""
                className="IncomeSharingMetrics__main-container-item--img"
              />
              <div className="IncomeSharingMetrics__main-container-item-content">
                <p className="IncomeSharingMetrics__main-container-item-content--text">
                  800+
                </p>
                <p className="IncomeSharingMetrics__main-container-item-content--subtext">
                  Colleges
                </p>
              </div>
            </div>

            <div className="IncomeSharingMetrics__main-container-item">
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/student-icon.svg"
                alt=""
                className="IncomeSharingMetrics__main-container-item--img"
              />
              <div className="IncomeSharingMetrics__main-container-item-content">
                <p className="IncomeSharingMetrics__main-container-item-content--text">
                  100+
                </p>
                <p className="IncomeSharingMetrics__main-container-item-content--subtext">
                  Students placed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------------------------------frequent asked question--------------------------- */}
      <Frequent />
    </div>
  );
}

export default Elevation;
