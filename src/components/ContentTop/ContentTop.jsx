import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { FaRegNewspaper } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ReactSearchBox from "react-search-box";
import { PiListFill } from "react-icons/pi";
// import axios from "axios";
// import Table from "../../../SearchBar/Table";
// // import data from "../../../SearchBar/data";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
//   const [query, setQuery] = useState("");
//   const [showTable, setShowTable] = useState(false); // State to track whether to show the table
//   const [data, setData] = useState([]);


//   useEffect(() => {
//     const fetchStudents = async () => {
//       const res = await axios.get(`http://localhost:4200/?q=${query}`);
//       setData(res.data);
//     };
//     if (query.length > 2) {
//       fetchStudents();
//     }
//   }, [query]);

//   const handleSearchInputChange = (e) => {
//     const inputValue = e.target.value;
//     setQuery(inputValue);
//     setShowTable(inputValue.length > 0); // Show the table if user starts typing
//   };


  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar()}>
          <PiListFill color="white"/>
        </button>
        <h3 className="content-top-title">Home</h3>
      </div>
      <div className="content-top-btns right-btn">
        <div className="search-box">
          <input
            type="search"
            placeholder="Search for comaptible user"
            // onFocus={() => setShowTable(query.length > 0)}
            // onChange={handleSearchInputChange}
            // value={query}
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
