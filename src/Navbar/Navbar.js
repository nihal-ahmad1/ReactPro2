import React from "react";
import { Link } from "react-router-dom";
import { VscBellDot } from "react-icons/vsc";
import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <i class="bi bi-justify"></i> Welcome
        </a>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"></a>
            </li>

            <li>
              <div class="dropdown navDrop">
                <label style={{marginTop:"2px"}}>School Year </label>{" "}
                <a

                  class=" btn btn-light dropdown-toggle "
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  23-24 flex
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="#">
                      Paid Courses
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Unpaid Courses
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Fixed Issues
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="bellIcon">
          <div class="dropdown ">
                <a
                  class=" "
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <VscBellDot />
                </a>

                <ul class="dropdown-menu" style={{marginLeft:"-98px"}}  aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="#">
                      No Notifications
                    </a>
                  </li>
                  
                </ul>
              </div>
              <div class="dropdown ">
                <a
                  class=" "
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
                </a>

                <ul class="dropdown-menu " style={{marginLeft:"-98px"}} aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="#">
                      My Profile
                    </a>
                  </li>
                  
                </ul>
              </div>
              </div>
              

         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
