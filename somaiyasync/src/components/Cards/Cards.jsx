import { iconsImgs } from "../../utils/images";
import "./Cards.css";

const Cards = (props) => {
  return (
    <div className="grid-one-item grid-common grid-c1">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">{props.name}</h3>
           
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>

        </div>
        <span><div className="card-p"> <h2>Connecting platform for developers</h2></div></span>
               
    </div>
  )
}

export default Cards
