import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { FaRegNewspaper } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ReactSearchBox from "react-search-box";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar()}>
          <img src={iconsImgs.menu} alt="" />
        </button>
        <h3 className="content-top-title">home</h3>
      </div>
      <div className="content-top-btns right-btn">

        
          <div className="search-box">
        <input type="search" placeholder="Search for comaptible user" />
        <i className="fa fa-search fa-lg"></i>
      

        </div>

      </div>
      <div className="NewsFeed">
        <NavLink to="/NewsFeed">
          <button type="button" className="notification-btn content-top-btn">
            <FaRegNewspaper/>
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default ContentTop
