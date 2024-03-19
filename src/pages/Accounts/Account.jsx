import React from 'react'
import "./Account.css"
import { NavLink, useNavigate, Link } from 'react-router-dom'
const Account = () => {

  return (
    <div className='account-main'>
      <div className="account-container">
        <div className="left-side">
          <div className="left-upper">
            <div className="profile-img"></div>
            <div className="profile-info">
              <h1>Siddharth kalani</h1>
              <p>siddharth.kalani@somaiya.edu</p>
              <div className="profile-btn">
                <button className='follow white-hover'>Follow</button>
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
          <div className="left-footer">
          <div className="left-edit-profile">
          <button className="edit-prof-btn white-hover">Edit Profile</button>
        </div>
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
            <div className="right-lower-right">
              <div className='right-lower-right-header'>Leaderboard Highscore</div>
              <div className='right-lower-right-container'>
                <h5>Css relay:</h5>
                <h5>Css relay:</h5>
                <h5>Css relay:</h5>
                <h5>Css relay:</h5>
                <h5>Css relay:</h5>
              </div>
            </div>
          </div>
          <div className="right-footer">
            <div className="right-footer-btn">
              <button className="profile-resume-btn white-hover">Edit Resume</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="profile-footer">
        <div className="edit-profile">
          <button className="edit-prof-btn">Edit Profile</button>
        </div>
      </div> */}
    </div>
  )
}

export default Account