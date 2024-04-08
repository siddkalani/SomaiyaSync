import React from 'react'
import "./Account.css"
import { NavLink, useNavigate, Link,useLocation } from 'react-router-dom'
import ContentTop from '../../components/ContentTop/ContentTop'
import Sidebar from '../../layout/Sidebar/Sidebar'

const Account = () => {
  const locate = useLocation();
  const topName = locate.state.topName;
  return (
    <div className="">
    <div className='whole-main'>
    <div className='app'>
    <Sidebar />
    <div className='main-content'>
      <ContentTop
      topName={topName}/>
    <div className='account-main'>
      <div className="account-container">
        <div className="left-side">
          <div className="left-upper">
            <div className="profile-img"></div>
            <div className="profile-info">
              <h1>Siddharth kalani</h1>
              <p>Btech SY</p>
              <div className="profile-btn">
                <button className='follow white-hover'>Resume</button>
                <button className='message'>Share</button>
              </div>
            </div>
          </div>
          <div className="left-lower">
            <div className='website'><p>Github:</p></div>
            <div className='twitter'><p>Twitter:</p></div>
            <div className='facebook'><p>Linkedin:</p></div>
            <div className='instagram'><p>Instagram:</p></div>
          </div>
        </div>
        <div className="right-side">
          <div className="right-upper">
            <div className="personal-info">
              <div className=''>Full Name:</div>
              <div className=''>Email:</div>
              <div className=''>Phone:</div>
              <div className=''>College:</div>
              <div className='bio'>Bio: lorem42</div>
            </div>

          </div>
          {/* <div className="right-lower">
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
          </div> */}
        </div>  
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Account