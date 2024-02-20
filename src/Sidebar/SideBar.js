import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { TbChartDotsFilled } from "react-icons/tb";
import { FiBell } from "react-icons/fi";
import './Sidebar.css'
import { Link } from "react-router-dom";


function SideBar({ selectedPage, setSelectedPage }) {
  return (
    <div
      class="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar"
      style={{width: "280px"}}
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        
      
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto SideSpace">
        
        <li onClick={()=>{
            setSelectedPage("Dashboard")
        }}>
          <a href="#"  className={`nav-link text-dark ${
              selectedPage === "Dashboard" && "active"
            }`}>
            <svg class="bi me-2" width="16" height="16">
            <AiOutlineDashboard />
            </svg>
            Dashboard
          </a>
        </li>
        <li onClick={()=>{
            setSelectedPage("Transcript")
        }}>
          <a href="#" className={`nav-link text-dark ${
              selectedPage === "Transcript" && "active"
            }`}>
            <svg class="bi me-2" width="16" height="16">
            <FiMapPin />
            </svg>
            Transcripts
          </a>
        </li>
        <li onClick={()=>{
            setSelectedPage("Mycourses")
        }}>
          <a href="#" className={`nav-link text-dark ${
              selectedPage === "Mycourses" && "active"
            }`}>
            <svg class="bi me-2" width="16" height="16">
            <TbChartDotsFilled />
            </svg>
            My Courses
          </a>
        </li>
        <li onClick={()=>{
            setSelectedPage("Logout")
        }}>
          <a href="#" className={`nav-link text-dark ${
              selectedPage === "Logout" && "active"
            }`}>
            <svg class="bi me-2 " width="16" height="16">
            <FiBell/>
            </svg>
            <Link to="/" className="Linkkk">Logout</Link>
          </a>
        </li>
      </ul>
      <hr />
      <div class="dropdown">
        
        <ul
          class="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser2"
        >
          <li>
            <a class="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
