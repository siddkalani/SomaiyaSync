import React from 'react'
import "./Contest.css"
import Cards from '../../components/Cards/Cards'
import { CiSquarePlus } from "react-icons/ci";
import { FaQuestionCircle } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
const Contest = () => {
  return (
    <div className='main-contest'>
      <div className="nav-bar">
        <div className="navbar-btn"><div className='symbol-game'><FaQuestionCircle /></div><h2>How to play</h2></div>
        <div className="navbar-btn"><div className='symbol-game'><MdLeaderboard /></div><h2>Leaderboard</h2></div>
        <div className="navbar-btn"><div className='symbol-game'><BsSearch /></div><h2>Search for Games</h2></div>
      </div>
      <div className="games">
        <div className='cards'><Cards
          name="DSA Battles" /></div>
        <div className='cards'><Cards 
          name="CSS Relays"/></div>
        <div className='cards'><Cards /></div>
        <div className='cards'><Cards /></div>
        <div className='cards'><Cards /></div>
        <div className='cards'><Cards /></div>
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
  )
}

export default Contest