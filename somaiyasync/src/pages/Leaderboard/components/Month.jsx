import React from 'react';
import '../Leaderboard.css';
import { UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';

const Month = () => {
    return (
        <div className="Lwrapper">
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

                    <div className="lboard_item month">
                        <div className="lboard_mem">
                            <div className="img">
                                <UserRound />
                            </div>
                            <div className="name_bar">
                                <p><span>1.</span> Alex Mike</p>
                                <div className="bar_wrap">
                                    <div className="inner_bar" style={{ width: '95%' }}></div>
                                </div>
                            </div>
                            <div className="points">
                                1195 points
                            </div>
                        </div>
                        <div class="lboard_mem">
                            <div class="img">
                            <UserRound />
                            </div>
                            <div className="name_bar">
                                <p><span>2.</span>Johnson</p>
                                <div className="bar_wrap">
                                    <div className="inner_bar" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div className="points">
                                1185 points
                            </div>
                        </div>
                        <div className="lboard_mem">
                            <div className="img">
                            <UserRound />
                            </div>
                            <div className="name_bar">
                                <p><span>3.</span>Charles John</p>
                                <div className="bar_wrap">
                                    <div className="inner_bar" style={{ width: '70%' }}></div>
                                </div>
                            </div>
                            <div className="points">
                                1160 points
                            </div>
                        </div>
                        <div className="lboard_mem">
                            <div className="img">
                            <UserRound />
                            </div>
                            <div className="name_bar">
                                <p><span>4.</span>Scarlett Angela</p>
                                <div className="bar_wrap">
                                    <div className="inner_bar" style={{ width: '50%' }}></div>
                                </div>
                            </div>
                            <div className="points">
                                1130 points
                            </div>
                        </div>
                        <div className="lboard_mem">
                            <div className="img">
                            <UserRound />
                            </div>
                            <div className="name_bar">
                                <p><span>5.</span>Rosey</p>
                                <div className="bar_wrap">
                                    <div className="inner_bar" style={{ width: '30%' }}></div>
                                </div>
                            </div>
                            <div className="points">
                                1110 points
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Month;