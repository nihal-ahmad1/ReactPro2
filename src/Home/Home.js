import React, { useState } from 'react'
import SideBar from '../Sidebar/SideBar'
import './Home.css'
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import Transcript from '../Transcript/Transcript';
import MyCourses from '../MyCourses/MyCourses';
import '../App/App.css';

function Home() {

    const [selectedPage, setSelectedPage] = useState("Dashboard");
  return (
    <div className="app-container">
        <SideBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} ></SideBar>
        <div className='content'>
        <Navbar></Navbar>
        {selectedPage === "Dashboard" ? (
          <Dashboard></Dashboard>
        ) :selectedPage === "Transcript" ? (
          <Transcript></Transcript>
        ):(<MyCourses></MyCourses>)}
        </div>
    
    </div>
  )
}

export default Home
