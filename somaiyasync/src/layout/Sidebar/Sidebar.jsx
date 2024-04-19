import { useEffect, useState } from "react";
import { personsImgs } from "../../utils/images";
import { navigationLinks } from "../../data/data";
import "./Sidebar.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import somaiya from "../../assets/images/somaiya.jpg";
import { Link, useNavigate } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { PiX } from "react-icons/pi";

const Sidebar = () => {
  const [activeLinkIdx, setActiveLinkIdx] = useState(null);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);

  const handleClick = (id) => {
    setActiveLinkIdx(id);
  };

  const handleLogout = async () => {
    try {
      // Retrieve the access token from localStorage
      const accessToken = localStorage.getItem("accessToken");

      // Send a request to the backend to logout the user
      const response = await fetch("http://localhost:4200/api/users/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`, // Include the access token in the Authorization header
        },
        credentials: "include", // Send cookies along with the request
      });

      if (response.ok) {
        // Upon successful logout, navigate the user to the "/" page
        console.log(accessToken);
        navigate("/");
      } else {
        // Handle unsuccessful logout
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={somaiya} alt="profile image" />
        </div>
        <span className="info-name">SomaiyaSync</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li
              onClick={() => handleClick(navigationLink.id)}
              className="nav-item"
              key={navigationLink.id}
            >
              <Link
                state={{
                  topName: navigationLink.title,
                }}
                to={`/${navigationLink.title}`}
                className={`nav-link ${
                  navigationLink.id === activeLinkIdx ? "active-sidebar" : null
                }`}
              >
                <img
                  src={navigationLink.image}
                  className="nav-link-icon"
                  alt={navigationLink.title}
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="sidebar-end nav-item nav-link nav-link-text"
          onClick={handleLogout}
        >
          <TbLogout className="logout" size={30} />
          <span className="logout">logout</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
