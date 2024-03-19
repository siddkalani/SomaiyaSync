import React from 'react'
import "./Account.css"
import { NavLink, useNavigate,Link } from 'react-router-dom'
const Account = () => {
  
  return (
    <div className='account-main'>
     <div className="account-container">
      <div className="left-side">
        <div className="left-upper">
          <div className="profile-img"></div>
          <div className="profile-info">
            <h1>Siddharth kalani</h1>
            <p>placeholder</p>
            inside your text here
            <div className="profile-btn">
              <button className='follow'>Follow</button>
              <button className='message'>Message</button>
            </div>
          </div>
        </div>
        <div className="left-lower">
          <div className='website'><p>Website:</p></div>
          <div className='twitter'><p>twitter:</p></div>
          <div className='facebook'><p>facebook:</p></div>
          <div className='instagram'><p>instagram:</p></div>
        </div>
      </div>
      <div className="right-side">
        <div className="right-upper">
          <div className="personal-info">
          <div className=''>Full Name:</div>
          <div className=''>Email:</div>
          <div className=''>Phone:</div>
          <div className=''>Mobile:</div>
          <div className=''>Address:</div>
        </div>

        </div>
        <div className="right-lower">
          <div className="right-lower-left">
            <div className='right-lower-left-header'>Leaderboard Highscore</div>
            <div className='right-lower-left-container'>
              <h5>Css relay:</h5>
              <h5>Css relay:</h5>
              <h5>Css relay:</h5>
              <h5>Css relay:</h5>
              <h5>Css relay:</h5>
            </div>
          </div>
          <div className="right-lower-left">
          <div className='right-lower-left-header'>Leaderboard Highscore</div>
            <div className='right-lower-left-container'>
              <h5>Css relay:</h5>
              <h5>Css relay:</h5>
              <h5>Css relay:</h5>
              <h5>Css relay:</h5>
              <h5>Css relay:</h5>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Account