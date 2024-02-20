import React, { useState } from "react";
import "./Dashboard.css";
import MyInfo from "../MyInfo/MyInfo";
import SchoolInfo from "../SchoolInfo/SchoolInfo";
import ContactInfo from "../ContactInfo/ContactInfo";
import CourseRegistration from "../CourseRegistration/CourseRegistration";
import { FaRegCopy } from "react-icons/fa6";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { ImInfo } from "react-icons/im";
import { CiTwitter } from "react-icons/ci";

function Dashboard() {
  const [selectedTab, SetSelectedTab] = useState("MyInfo");

  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="div-container">
            <div className="card1">
              <span className="icons">
                <FaRegCopy />
              </span>
            </div>
            <div className="container-text">
              <p className="cards-header">Paid Courses</p>
              <p className="numbers">1</p>
              <hr />
              <p> Get More Details</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="div-container">
            <div className="card2">
              <span className="icons">
                <SiHomeassistantcommunitystore />
              </span>
            </div>
            <div className="container-text">
              <p className="cards-header">Unpaid Course</p>
              <p className="numbers">1</p>
              <hr />
              <p> Get More Details</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="div-container">
            <div className="card3">
              <span className="icons">
                <ImInfo />
              </span>
            </div>
            <div className="container-text">
              <p className="cards-header">Fixed Issues</p>
              <p className="numbers">75</p>
              <hr />
              <p> Get More Details</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="div-container">
            <div className="card4">
              <span className="icons">
                <CiTwitter />
              </span>
            </div>
            <div className="container-text">
              <p className="cards-header">Help</p>
              <p className="numbers">1</p>
              <hr />
              <p> Get More Details</p>
            </div>
          </div>
        </div>
      </div>




      
      <div className="tabss">
        <ul class="nav nav-tabs nav-pills">
          <li
            style={{ color: "black" }}
            onClick={() => {
              console.log("myinfo");
              SetSelectedTab("MyInfo");
            }}
          >
            <a
              className={`nav-link text-dark ${
                selectedTab === "MyInfo" && "colorActive"
              }`}
              aria-current="page"
            >
              My Info
            </a>
          </li>
          <li
            class="nav-item"
            onClick={() => {
              console.log("schoolinfo");
              SetSelectedTab("SchoolInfo");
            }}
          >
            <a
              className={`nav-link text-dark ${
                selectedTab === "SchoolInfo" && "colorActive"
              }`}
            >
              School Info
            </a>
          </li>
          <li
            class="nav-item"
            onClick={() => {
              console.log("contactInfo");
              SetSelectedTab("contactInfo");
            }}
          >
            <a
              className={`nav-link text-dark ${
                selectedTab === "contactInfo" && "colorActive"
              }`}
            >
              Contact Information
            </a>
          </li>
          <li
            class="nav-item"
            onClick={() => {
              console.log("courseRegistration");
              SetSelectedTab("courseRegistration");
            }}
          >
            <a
              className={`nav-link text-dark ${
                selectedTab === "courseRegistration" && "colorActive"
              }`}
              tabindex="-1"
              aria-disabled="true"
            >
              Course Registration
            </a>
          </li>
        </ul>
      </div>
      <div className="container-tabs">
        {selectedTab === "MyInfo" ? (
          <MyInfo></MyInfo>
        ) : selectedTab === "SchoolInfo" ? (
          <SchoolInfo></SchoolInfo>
        ) : selectedTab === "contactInfo" ? (
          <ContactInfo></ContactInfo>
        ) : (
          <CourseRegistration></CourseRegistration>
        )}
      </div>
    </>
  );
}

export default Dashboard;
