// import { useState,useEffect } from "react";
// import "../Result/Result.css";

// const Result = ({totalQuestions,result,onTryAgain}) =>{

//     const [name,setName] = useState('');
//     const [highScores,setHighScores] = useState([]);
//     const [showScores,setShowScores] = useState(false);

//     useEffect(() =>{
//         setHighScores(JSON.parse(localStorage.getItem("highScores")) || []);
//     },[]);

//     const handleSave = () => {
//         const score ={
//             name,
//             score : result.score
//         };
//         const newHighScores = [...highScores,score].sort(
//             (a,b) => b.score - a.score);

//         setHighScores(newHighScores);
//         setShowScores(true);
//         localStorage.setItem("highScores",JSON.stringify(newHighScores));
//     };

//     const handleTryAgain  = () =>{
//         setShowScores(false);
//         setHighScores([]);
//         onTryAgain();
//     }
//     return(
//         <div className="result">
//             <h3>Result</h3>
//             <p>
//                 Total Questions: <span>{totalQuestions}</span>
//             </p>
//             <p>
//                 Total Score: <span>{result.score}</span>
//             </p>
//             <p>
//                 Correct Answers: <span>{result.correctAnswers}</span>
//             </p>
//             <p>
//                 Wrong Answers: <span>{result.wrongAnswers}</span>
//             </p>
//             <button onClick={handleTryAgain}>Try Again</button>

//            { !showScores ? (<>
//                 <h3>Enter your name below <br/>to save your score!</h3>
//                 <input
//                     placeholder="Your name"
//                     value ={name}
//                     onChange={(evt) => setName(evt.target.value)}
//                 />
//                 <button className="quiz-button-next" onClick={handleSave}>Save</button>
//             </>
//             ) : (
//                 <>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Ranking</th>
//                                 <th>Name</th>
//                                 <th>Score</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {highScores.map((highScore,i)=>{
//                                 return(
//                                     <tr key={`${highScore.score}${highScore.name}${i}`}>
//                                         <td>{i+1}</td>
//                                         <td>{highScore.name}</td>
//                                         <td>{highScore.score}</td>
//                                     </tr>
//                                 )
//                             })
//                             }
//                         </tbody>
//                     </table>
//                 </>
//             )}

//         </div>
//     );
// }

// export default Result;

import { useState, useEffect } from "react";
import "../Result/Result.css";
import { IoMdArrowBack } from "react-icons/io";

const Result = ({ totalQuestions, result, onTryAgain }) => {
  const [name, setName] = useState(localStorage.getItem("username") || "");
  const [highScores, setHighScores] = useState([]);
  const [showScores, setShowScores] = useState(false);
  const accessToken = localStorage.getItem("accessToken");

  //   useEffect(() => {
  //     setHighScores(JSON.parse(localStorage.getItem("highScores")) || []);
  //   }, []);

  const handleSave = async () => {
    const score = {
      name,
      score: result.correctAnswers,
    };
    const newHighScores = [...highScores, score].sort(
      (a, b) => b.score - a.score
    );

    setHighScores(newHighScores);
    setShowScores(true);
    // localStorage.setItem("highScores", JSON.stringify(newHighScores));

    try {
      const response = await fetch(
        `http://localhost:4200/api/contacts/${name}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(score),
        }
      );
      if (response.ok) {
        window.alert("Score saved!");
      } else if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Score updated successfully:", data);
    } catch (error) {
      console.error("Error updating score:", error);
    }
  };

  const handleTryAgain = () => {
    setShowScores(false);
    setHighScores([]);
    onTryAgain();
  };

  return (
    <div className="result">
      <h3>Result</h3>
      <p>
        Total Questions: <span>{totalQuestions}</span>
      </p>

      <p>
        Correct Answers: <span>{result.correctAnswers}</span>
      </p>
      <p>
        Wrong Answers: <span>{result.wrongAnswers}</span>
      </p>
      <p>
        Total Score: <span>{result.correctAnswers}</span>
      </p>
      <button onClick={handleTryAgain}>Try Again</button>

      {/* {!showScores ? (
        <> */}
      <h3>{name}`s score</h3>
      <input
        placeholder="Your name"
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      />
      <button className="quiz-button-next" onClick={handleSave}>
        Click to save your score
      </button>
      {/* </>
      ) : ( */}
      {/* <>
          <table>
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {highScores.map((highScore, i) => {
                return (
                  <tr key={`${highScore.score}${highScore.name}${i}`}>
                    <td>{i + 1}</td>
                    <td>{highScore.name}</td>
                    <td>{highScore.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </> */}
      {/* )} */}
      {/* <IoMdArrowBack size={200} color="white"/> */}
      
    </div>
  );
};

export default Result;
