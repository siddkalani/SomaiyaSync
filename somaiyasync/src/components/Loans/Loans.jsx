import { iconsImgs } from "../../utils/images";
import "./Loans.css";

const Loans = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c7">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Quiz</h3>
            <button className="grid-c-title-icon">
                <img src={iconsImgs.plus} />
            </button>
        </div>
        <div className="grid-c7-content">
            <div className="progress-bar">
                <div className="percent">
                    <svg>
                        <circle cx="105" cy="105" r="50"></circle>
                        {/* <circle cx="105" cy="105" r="50" style="--percent: 50"></circle> */}
                    </svg>
                    <div className="number">
                        <h3>50<span>%</span></h3>
                    </div>
                </div>
            </div>
            <ul className="data-list">
                <li className="data-item text-silver-v1">
                    <span className="data-item-text">Highest Score</span>
                    <span className="data-item-value">40</span>
                </li>
                <li className="data-item text-silver-v1">
                    <span className="data-item-text">Lowest Score</span>
                    <span className="data-item-value">10</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Loans
