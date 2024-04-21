
import React, { useState, useEffect } from 'react';
import "../Leaderboard.css";
import ContentTop from '../../../components/ContentTop/ContentTop';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../../layout/Sidebar/Sidebar';
import { Link } from "react-router-dom";
import { UserRound } from 'lucide-react';

const Year = () => {
    return (
        <div className='whole-main'>
      <div className='app'>
        <Sidebar />
        <div className='main-content'>
          <ContentTop topName={topName} />
          <div className='Leaderboard-container'>
            <div className="Leaderboard-main">
              <div className="Leaderboard-header">
                <div><h1>See where you are!</h1></div>
              </div>
              {/* <div className="Leaderboard-body">
                <div className='Leaderboard-container-header'>
                  <button onClick={() => handleGameSelection('CSS Battle')} className={`Leaderboard-btn ${selectedGame === 'CSS Battle' && 'button_card'}`}>CSS Battle</button>
                  <button onClick={() => handleGameSelection('DSA Challenge')} className={`Leaderboard-btn ${selectedGame === 'DSA Challenge' && 'button_card'}`}>DSA Challenge</button>
                  <button onClick={() => handleGameSelection('Quiz')} className={`Leaderboard-btn ${selectedGame === 'Quiz' && 'button_card'}`}>Quiz</button>
                  <button onClick={() => handleGameSelection('Typing Test')} className={`Leaderboard-btn ${selectedGame === 'Typing Test' && 'button_card'}`}>Typing Test</button>
                </div>
                <div className="Leaderboard-content">
                  <div className="Leaderboard-content-header">
                    <div>Username</div>
                    <div>Rank</div>
                    <div>Score</div>
                  </div>
                  <div className="content-inputs">
                    {scores && scores.map((scoree, index) => (
                      <div key={index} className="Leaderboard-content-inputs">
                        <div>{scoree.name}</div>
                        <div>{scoree.rank}</div>
                        <div>{scoree.score}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}

                <div className="lboard_section">
                  <div className="lboard_tabs">
                    <div className="tabs">
                      <ul>
                        <Link to="/Leaderboard/today"> <li data-li="today">Today</li></Link>
                        <Link to="/Leaderboard/month"> <li data-li="month">Month</li></Link>
                        <Link to="/Leaderboard/year"> <li data-li="year">Year</li> </Link>
                      </ul>
                    </div>
                  </div>

                  <div className="lboard_wrap">

                  <div className="lboard_item today">
                        <div className="lboard_mem">
                            <div className="img">
                            <UserRound />
                            </div>
                            <div className="name_bar">
                                <p><span>1.</span> Charles John</p>
                                <div className="bar_wrap">
                                    <div className="inner_bar" style={{ width: '95%' }}></div>
                                </div>
                            </div>
                            <div className="points">
                                195 points
                            </div>
                        </div>
                        <div className="lboard_mem">
                            <div className="img">
                            <UserRound />
                            </div>
                            <div className="name_bar">
                                <p><span>2.</span>Alex Mike</p>
                                <div className="bar_wrap">
                                    <div className="inner_bar" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <div className="points">
                                185 points
                            </div>
                        </div>
                        <div className="lboard_mem">
                            <div className="img">
                                <UserRound />
                            </div>
                            <div className="name_bar">
                                <p><span>3.</span>Johnson</p>
                                <div className="bar_wrap">
                                    <div className="inner_bar" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                            <div className="points">
                                160 points
                            </div>
                        </div>
                        <div className="lboard_mem">
                            <div className="img">
                            <UserRound />
                            </div>
                            <div className="name_bar">
                                <p><span>4.</span>Rosey</p>
                                <div className="bar_wrap">
                                    <div className="inner_bar" style={{ width: '30%' }}></div>
                                </div>
                            </div>
                            <div className="points">
                                130 points
                            </div>
                        </div>
                        <div className="lboard_mem">
                            <div className="img">
                            <UserRound />
                            </div>
                            <div className="name_bar">
                                <p><span>5.</span>Scarlett Angela</p>
                                <div className="bar_wrap">
                                    <div className="inner_bar" style={{ width: '10%' }}></div>
                                </div>
                            </div>
                            <div className="points">
                                110 points
                            </div>
                        </div>
                    </div>

                    {/* <Month/> */}

                    {/* <Year/> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Year;