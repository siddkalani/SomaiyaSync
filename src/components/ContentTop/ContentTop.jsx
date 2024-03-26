import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { FaRegNewspaper } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ReactSearchBox from "react-search-box";
import { PiListFill } from "react-icons/pi";
import { useLocation } from "react-router-dom";

const ContentTop = ({topName}) => {
  
  const { toggleSidebar } = useContext(SidebarContext);


  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar()}>
          <PiListFill color="white"/>
        </button>
        <h3 className="content-top-title">{topName}</h3>
      </div>
      <div className="content-top-btns right-btn">
        <div className="search-box">
          <input
            type="search"
            placeholder="Search for comaptible user"
          />
          <i className="fa fa-search fa-lg"></i>
        </div>

      </div>
      <div className="NewsFeed">
        <NavLink to="/NewsFeed">
          <button type="button" className="notification-btn content-top-btn">
            <FaRegNewspaper />
          </button>
        </NavLink>
      </div>
    </div>
  )

  }

export default ContentTop;
