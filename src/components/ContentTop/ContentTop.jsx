import { iconsImgs } from "../../utils/images";
// import SearchIcon from "@mui/icons-material/Search";
// import CloseIcon from "@mui/icons-material/Close";
import "./ContentTop.css";
import { useContext, useEffect } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { FaRegNewspaper } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ReactSearchBox from "react-search-box";
import { PiListFill } from "react-icons/pi";
import axios from "axios";

const ContentTop = ({topName}) => {
  
  const { toggleSidebar } = useContext(SidebarContext);

  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClose = () => {
    setSearch("");
    setSearchData([]);
    setSelectedItem(-1);
  };
  const handleKeyDown = (e) => {
    if (selectedItem < searchData.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem((prev) => prev - 1);
      } else if (
        e.key === "ArrowDown" &&
        selectedItem > searchData.length - 1
      ) {
        setSelectedItem((prev) => prev + 1);
      } else if (e.key === "Enter" && selectedItem >= 0) {
        window.open(searchData[selectedItem].show.url);
      }
    } else {
      setSelectedItem(-1);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (search !== "") {
          const response = await axios.get(
            `http://localhost:4200/api/contacts/search?q=${search}`
          );
          setSearchData(response.data);
        } else {
          setSearchData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [search]);

  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button
          type="button"
          className="sidebar-toggler"
          onClick={() => toggleSidebar()}
        >
          <PiListFill color="white" />
        </button>
        <h3 className="content-top-title">{topName}</h3>
      </div>
      <div className="content-top-btns right-btn">
        <div className="search-box">
          <input
            type="search"
            placeholder="Search for comaptible user"
            onChange={handleChange}
            value={search}
            onKeyDown={handleKeyDown}
          />
          {/* <div className="search_icon">
            {search === " " ? (
              <SearchIcon />
            ) : (
              <CloseIcon onClick={handleClose} />
            )}
          </div> */}
        </div>
        <i onClick={handleClose} className="fa fa-search fa-lg"></i>

        <div className="searchResult">
          {searchData.slice(0, 5).map((data, index) => {
            return (
              <a
                // href={data.show.url}
                className={
                  selectedItem === index
                    ? "search_suggestion_active"
                    : "search_suggestion"
                }
                key={index}
              >
                {/* {data.show && data.show.name ? data.show.name : "Unknown"} */}
                {data.name}
              </a>
            );
          })}
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
  );
};

export default ContentTop;
