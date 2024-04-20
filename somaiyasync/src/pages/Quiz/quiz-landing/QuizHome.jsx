import React from "react";
import BannerBackground from "./Assets/home-banner-background.png";
import BannerImage from "./Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import CssBattle from "./Assets/css-battle.svg"

const QuizHome = () => {
  return (
    <div className="home-container">
      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img className="BackImg" src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Test Your <br /> Knowledge!
          </h1>
          <p className="primary-text">
          Compete by coding the most visually accurate and aesthetically pleasing representation of a given design challenge using only HTML and CSS.
          </p>
          <button className="secondary-button">
            Start Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img className="QuizImg" src={CssBattle} alt="" />
        </div>
      </div>
    </div>
  );
};

export default QuizHome;
