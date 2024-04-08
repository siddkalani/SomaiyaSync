import React, { useState } from 'react'
import goal from "./noun-soccer-goal.png"
import "./Leaderboard.css"
import ContentTop from '../../components/ContentTop/ContentTop'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../layout/Sidebar/Sidebar'
const Leaderboard = () => {
  // const locate = useLocation();
  // const topName = locate.state.topName

  const [button1
    , setButton1
  ] = useState(false)
  const [button2
    , setButton2
  ] = useState(false)
  const [button3
    , setButton3
  ] = useState(false)
  const [button4
    , setButton4
  ] = useState(false)

  return (
    <div className="">
    <div className='whole-main'>
    <div className='app'>
    <Sidebar />
    <div className='main-content'>
      <ContentTop/>
    <div className='Leaderboard-container'>
      <div className="Leaderboard-main">
        <div className="Leaderboard-header">
          <div><h1>See where you are!</h1></div>
          <div className="goal-img"><img src={goal} alt="" /></div>
        </div>
        <div className="Leaderboard-body">
          <div className='Leaderboard-container-header'>
            <button onClick={() => {
              return (setButton1(true),
                setButton2(false), setButton3(false), setButton4(false)
              )
            }} className={`css-battle ${button1 && `button_card`}  Leaderboard-btn`}>CSS Battle</button>
            <button onClick={() => {
              return (setButton1(false),
                setButton2(true), setButton3(false), setButton4(false)
              )
            }} className={`css-battle ${button2 && `button_card`}  Leaderboard-btn`}>DSA Challenge</button>
            <button onClick={() => {
              return (setButton1(false),
                setButton2(false), setButton3(true), setButton4(false)
              )
            }} className={`css-battle ${button3 && `button_card`}  Leaderboard-btn`}>Quiz</button>
            <button onClick={() => {
              return (setButton1(false),
                setButton2(false), setButton3(false), setButton4(true)
              )
            }} className={`css-battle ${button4 && `button_card`}  Leaderboard-btn`}>Typing Test</button>

            
          </div>
          <div className="Leaderboard-content">
          <div className="Leaderboard-content-header">
            <div>Username</div>
            <div>Rank</div>
            <div>Score</div>
            </div>
            <div className="content-inputs">
              <div className="Leaderboard-content-inputs">
              <div>@sidd</div>
              <div>1</div>
              <div>10</div>
            </div>
            <div className="Leaderboard-content-inputs">
              <div>@sidd</div>
              <div>1</div>
              <div>10</div>
            </div>
            <div className="Leaderboard-content-inputs">
              <div>@sidd</div>
              <div>1</div>
              <div>10</div>
            </div>
            
            <div className="Leaderboard-content-inputs">
            <div>@sidd</div>
              <div>1</div>
              <div>10</div>
            </div>
            <div className="Leaderboard-content-inputs">
            <div>@sidd</div>
              <div>1</div>
              <div>10</div>
            </div>
            <div className="Leaderboard-content-inputs">
            <div>@sidd</div>
              <div>1</div>
              <div>10</div>
            </div>
            </div>
          </div>
            
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Leaderboard



// import React, { useState } from 'react';
// import goal from "./noun-soccer-goal.png";
// import "./Leaderboard.css";
// import { color } from 'react-native-elements/dist/helpers';

// const Leaderboard = () => {
//   const [activeButton, setActiveButton] = useState(null);

//   const handleClick = () => {
//     setActiveButton(buttonName);
//   };

//   return (
//     <div className='Leaderboard-container'>
//       <div className="Leaderboard-main">
//         <div className="Leaderboard-header">
//           <div><h1>See where you are!</h1></div>
//           <div className="goal-img"><img src={goal} alt=""/></div>
//         </div>
//         <div className="Leaderboard-container">
//           <div className='Leaderboard-container-header'>
//             <button
//               onClick={() => handleClick('css-battle')}
//               className={`Leaderboard-btn ${activeButton === 'css-battle' ? 'active' : ''}`}
//             >
//               CSS Battle
//             </button>
//             <button
//               onClick={() => handleClick('dsa-challenge')}
//               className={`Leaderboard-btn ${activeButton === 'dsa-challenge' ? 'active' : ''}`}
//             >
//               DSA Challenge
//             </button>
//             <button
//               onClick={() => handleClick('quiz')}
//               className={`Leaderboard-btn ${activeButton === 'quiz' ? 'active' : ''}`}
//             >
//               Quiz
//             </button>
//             <button
//               onClick={() => handleClick('typing-test')}
//               className={`Leaderboard-btn ${activeButton === 'typing-test' ? 'active' : ''}`}
//             >
//               Typing Test
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Leaderboard;
