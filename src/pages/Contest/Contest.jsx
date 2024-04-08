import React from 'react'
import "./Contest.css"
import { CiSquarePlus } from "react-icons/ci";
import { FaQuestionCircle } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import ContestCard from './Contest-cards/ContestCard';
import ContentTop from '../../components/ContentTop/ContentTop';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../layout/Sidebar/Sidebar';

const Contest = () => {
  const locate = useLocation();
  const topName = locate.state.topName
  return (
    <div className="">
    <div className='whole-main'>
    <div className='app'>
    <Sidebar />
    <div className='main-content'>
      <ContentTop topName={topName}/>
    
    <div className='main-contest'>
      
      <div className="nav-bar">
        <div className="navbar-btn"><div className='symbol-game'><FaQuestionCircle /></div><h2>How to play</h2></div>
        <div className="navbar-btn"><div className='symbol-game'><MdLeaderboard /></div><h2>Leaderboard</h2></div>
        <div className="navbar-btn"><div className='symbol-game'><BsSearch /></div><h2>Search for Games</h2></div>
      </div>
      <div className="games">
        <ContestCard
        Name="CSS Battle"/>
        <ContestCard
        Name="CSS Battle"/>
        <ContestCard
        Name="CSS Battle"/>
        <ContestCard
        Name="CSS Battle"/>
        <ContestCard
        Name="CSS Battle"/>
        <ContestCard
        Name="CSS Battle"/>
        {/* <div className='cards'></div>
        <div className='cards'></div>
        <div className='cards'></div>
        <div className='cards'></div>
        <div className='cards'></div>
        <div className='cards'></div> */}
        {/* <div className="cards">
          <div className="card-title">
          <div><h2>Dsa battle</h2></div>
          <div className='plus-icon'><CiSquarePlus /></div>
          </div>
        </div>
        <div className="cards">
          <div className="card-title">
          <div><h2>Dsa battle</h2></div>
          <div className='plus-icon'><CiSquarePlus /></div>
          </div>
        </div>
        <div className="cards">
          <div className="card-title">
          <div><h2>Dsa battle</h2></div>
          <div className='plus-icon'><CiSquarePlus /></div>
          </div>
        </div>
        <div className="cards">
          <div className="card-title">
          <div><h2>Dsa battle</h2></div>
          <div className='plus-icon'><CiSquarePlus /></div>
          </div>
        </div>
        <div className="cards">
          <div className="card-title">
          <div><h2>Dsa battle</h2></div>
          <div className='plus-icon'><CiSquarePlus /></div>
          </div>
        </div>
        <div className="cards">
          <div className="card-title">
          <div><h2>Dsa battle</h2></div>
          <div className='plus-icon'><CiSquarePlus /></div>
          </div>
        </div> */}
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Contest