import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { FaRegNewspaper } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const ContentTop = () => {
    const { toggleSidebar } = useContext(SidebarContext);
    return (
        <div className="main-content-top">
            <div className="content-top-left">
                <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar()}>
                    <img src={iconsImgs.menu} alt="" />
                </button>
                <h3 className="content-top-title">Home</h3>
            </div>
            <div className="content-top-btns">
                <button type="button" className="search-btn content-top-btn">
                    <img src={iconsImgs.search} alt="" />
                </button>
                <NavLink to="/NewsFeed">
                    <button type="button" className="notification-btn content-top-btn">
                        <FaRegNewspaper />
                    </button>
                </NavLink>
            </div>
        </div>
    )
}

export default ContentTop
