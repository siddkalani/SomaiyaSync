import "./Budget.css";
import { iconsImgs } from "../../utils/images";
import { budget } from "../../data/data";

const Budget = () => {
  return (
    <div className="grid-two-item grid-common grid-c4">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Account</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c-top text-silver-v1">
            <h2 className="lg-value">Types of Account</h2>
            {/* <span className="lg-value">$ 100,000</span> */}
        </div>
       
    </div>
  )
}

export default Budget
