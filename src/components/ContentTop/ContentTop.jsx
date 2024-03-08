import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { FaRegNewspaper } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const ContentTop = () => {
    const { toggleSidebar } = useContext(SidebarContext);
    const [isActive, setIsActive] = useState(false)


    return (
        <div className="main-content-top">
            <div className="content-top-left">
                <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar()}>
                    <img src={iconsImgs.menu} alt="" />
                </button>
                <h3 className="content-top-title">Home</h3>
            </div>
            <div className="content-top-btns right-btn">
                <div>
                {isActive && <div className="searchBar2"><input type="search" className="SearchBar shadow-drop-center" placeholder='Search for compatible user' id="" /></div>}</div>
                <div> <button onClick={() => { setIsActive((prev) => !prev) }} type="button" className="search-btn content-top-btn">
                    <img src={iconsImgs.search} alt="" />
                </button>
                </div>

                <div>
                    <NavLink to="/NewsFeed">
                        <button type="button" className="notification-btn content-top-btn">
                            <FaRegNewspaper />
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default ContentTop
