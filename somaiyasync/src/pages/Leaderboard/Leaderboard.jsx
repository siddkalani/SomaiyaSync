// import React, { useState } from 'react'
// import goal from "./noun-soccer-goal.png"
// import "./Leaderboard.css"
// import ContentTop from '../../components/ContentTop/ContentTop'
// import { useLocation } from 'react-router-dom'
// import Sidebar from '../../layout/Sidebar/Sidebar'
// const Leaderboard = () => {
//   const locate = useLocation();
//   const topName = locate.state.topName

//   const [button1
//     , setButton1
//   ] = useState(false)
//   const [button2
//     , setButton2
//   ] = useState(false)
//   const [button3
//     , setButton3
//   ] = useState(false)
//   const [button4
//     , setButton4
//   ] = useState(false)

//   return (
//     <div className="">
//     <div className='whole-main'>
//     <div className='app'>
//     <Sidebar />
//     <div className='main-content'>
//       <ContentTop
//       topName={topName}/>
//     <div className='Leaderboard-container'>
//       <div className="Leaderboard-main">
//         <div className="Leaderboard-header">
//           <div><h1>See where you are!</h1></div>
//           <div className="goal-img"><img src={goal} alt="" /></div>
//         </div>
//         <div className="Leaderboard-body">
//           <div className='Leaderboard-container-header'>
//             <button onClick={() => {
//               return (setButton1(true),
//                 setButton2(false), setButton3(false), setButton4(false)
//               )
//             }} className={`css-battle ${button1 && `button_card`}  Leaderboard-btn`}>CSS Battle</button>
//             <button onClick={() => {
//               return (setButton1(false),
//                 setButton2(true), setButton3(false), setButton4(false)
//               )
//             }} className={`css-battle ${button2 && `button_card`}  Leaderboard-btn`}>DSA Challenge</button>
//             <button onClick={() => {
//               return (setButton1(false),
//                 setButton2(false), setButton3(true), setButton4(false)
//               )
//             }} className={`css-battle ${button3 && `button_card`}  Leaderboard-btn`}>Quiz</button>
//             <button onClick={() => {
//               return (setButton1(false),
//                 setButton2(false), setButton3(false), setButton4(true)
//               )
//             }} className={`css-battle ${button4 && `button_card`}  Leaderboard-btn`}>Typing Test</button>

            
//           </div>
//           <div className="Leaderboard-content">
//           <div className="Leaderboard-content-header">
//             <div>Username</div>
//             <div>Rank</div>
//             <div>Score</div>
//             </div>
//             <div className="content-inputs">
//               <div className="Leaderboard-content-inputs">
//               <div>@sidd</div>
//               <div>1</div>
//               <div>10</div>
//             </div>
//             <div className="Leaderboard-content-inputs">
//               <div>@sidd</div>
//               <div>1</div>
//               <div>10</div>
//             </div>
//             <div className="Leaderboard-content-inputs">
//               <div>@sidd</div>
//               <div>1</div>
//               <div>10</div>
//             </div>
            
//             <div className="Leaderboard-content-inputs">
//             <div>@sidd</div>
//               <div>1</div>
//               <div>10</div>
//             </div>
//             <div className="Leaderboard-content-inputs">
//             <div>@sidd</div>
//               <div>1</div>
//               <div>10</div>
//             </div>
//             <div className="Leaderboard-content-inputs">
//             <div>@sidd</div>
//               <div>1</div>
//               <div>10</div>
//             </div>
//             </div>
//           </div>
            
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default Leaderboard


import React, { useState, useEffect } from 'react';
import goal from "./noun-soccer-goal.png";
import "./Leaderboard.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../layout/Sidebar/Sidebar';

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
          <ContentTop topName={topName}/>
          <div className='Leaderboard-container'>
            <div className="Leaderboard-main">
              <div className="Leaderboard-header">
                <div><h1>See where you are!</h1></div>
                <div className="goal-img"><img src={goal} alt="" /></div>
              </div>
              <div className="Leaderboard-body">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
