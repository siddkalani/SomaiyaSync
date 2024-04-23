
import React, { useState, useEffect } from 'react';
import "./Leaderboard.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../layout/Sidebar/Sidebar';
import { Link } from "react-router-dom";
import { UserRound } from 'lucide-react';
import { MdLeaderboard } from "react-icons/md";

const Leaderboard = () => {
  const locate = useLocation();
  const topName = locate.state.topName;

  const [scores, setScores] = useState([]);
  const [selectedGame, setSelectedGame] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4200/api/contacts/getAll`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const sortedScores = data
        .filter(contact => contact.score !== undefined)
        .map(contact => ({
          name: contact.username,
          score: contact.score
        }))
        .sort((a, b) => b.score - a.score);

      let rank = 1;
      sortedScores.forEach((score, index) => {
        if (index > 0 && score.score !== sortedScores[index - 1].score) {
          rank = index + 1;
        }
        score.rank = rank;
      });

      setScores(sortedScores);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleGameSelection = (game) => {
    setSelectedGame(game);
  };

  return (
    <div className='whole-main'>
      <div className='app'>
        <Sidebar />
        <div className='main-content'>
          <ContentTop topName={topName} />
          <div className='Leaderboard-container'>
            <div className="Leaderboard-main">
              <div className="Leaderboard-header">
                <div><h1 className='Leaderboard-text'>See where you are! </h1></div>
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
                         <li data-li="today"><MdLeaderboard  size={25}/> Leaderboard </li>
                        
                      </ul>
                    </div>
                  </div>

                  <div className="lboard_wrap">
                  <div className='Leaderboard-container-header'>
                  <button onClick={() => handleGameSelection('CSS Battle')} className={`Leaderboard-btn ${selectedGame === 'CSS Battle' && 'button_card'}`}>CSS Battle</button>
                  <button onClick={() => handleGameSelection('DSA Challenge')} className={`Leaderboard-btn ${selectedGame === 'DSA Challenge' && 'button_card'}`}>DSA</button>
                  <button onClick={() => handleGameSelection('Quiz')} className={`Leaderboard-btn ${selectedGame === 'Quiz' && 'button_card'}`}>Quiz</button>
                  <button onClick={() => handleGameSelection('Typing Test')} className={`Leaderboard-btn ${selectedGame === 'Typing Test' && 'button_card'}`}>Typing Test</button>
                </div>
                  {scores && scores.map((scoree, index) => (
            
                  <div className="lboard_item today">
                        <div className="lboard_mem">
                            <div className="img">
                            <UserRound color='black'/>
                            </div>
                            <div className="name_bar">
                                <p><span>{scoree.rank + "."}</span>{scoree.name}</p>
                                <div className="bar_wrap">
                                    <div className="inner_bar" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <div className="points">
                                {scoree.score}
                            </div>
                        </div>
                        {/* <div className="lboard_mem">
                            <div className="img">
                            <UserRound color='black'/>
                            </div>
                            <div className="name_bar">
                                <p><span>2.</span></p>
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
                                <UserRound color='black'/>
                            </div>
                            <div className="name_bar">
                                <p><span>3.</span>{scoree.name}</p>
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
                            <UserRound color='black'/>
                            </div>
                            <div className="name_bar">
                                <p><span>4.</span>{scoree.name}</p>
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
                            <UserRound color='black'/>
                            </div>
                            <div className="name_bar">
                                <p><span>5.</span>{scoree.name}</p>
                                <div className="bar_wrap">
                                    <div className="inner_bar" style={{ width: '10%' }}></div>
                                </div>
                            </div>
                            <div className="points">
                                110 points
                            </div>
                        </div> */}
                    </div>
                       

                  ))}
                  </div>
              
                </div>
         
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Leaderboard;


