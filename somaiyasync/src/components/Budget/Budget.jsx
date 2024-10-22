import "./Budget.css";
import { iconsImgs } from "../../utils/images";
import { budget } from "../../data/data";

const Budget = () => {
  return (
    <div className="grid-two-item grid-common grid-c4">
        <div className="grid-c-title">
            <h1 className="grid-c-title-text"><a 
                href="https://drive.google.com/drive/folders/1RNFaYqhC2TZiy3xr0IBFxQ6YlD5DJD_7" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                Open Documents Folder
            </a></h1>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } alt="Add Document"/>
            </button>
        </div>
        <div className="grid-c-top text-silver-v1">
            <h2 className="lg-value">Documents</h2>
            
            {/* <span className="lg-value">$ 100,000</span> */}
        </div>       
        <div className="">
          <p> 1. ise papers</p>
          <p> 2. ese papers</p>
          <p> 3. ia examples</p>
        </div>
    </div>
  )
}

export default Budget;
