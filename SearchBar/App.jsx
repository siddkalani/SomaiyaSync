// import React, { useState } from "react";
// import "./app.css";
// import Table from "./Table";

// import { Students } from "./data";

// function Searchbar() {
//   const [query, setQuery] = useState("");
//   const keys = ["name", "email"];
//   const search = (data) => {
//     return data.filter((item) =>
//       keys.some((key) => item[key].toLowerCase().includes(query))
//     );
//   };
//   console.log(query);
//   return (
//     <div className="app">
//       <input
//         type="text"
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       {/* {<Table data={[]} />} */}
//       <Table data={search(Students)} />
//     </div>
//   );
// }

// export default Searchbar;

// import React, { useState } from "react";
// import "./app.css";
// import Table from "./Table";

// import { Students } from "./data";

// function Searchbar() {
//   const [query, setQuery] = useState("");
//   const [showTable, setShowTable] = useState(false); // State to track whether to show the table
//   const keys = ["name", "email"];
//   const search = (data) => {
//     return data.filter((item) =>
//       keys.some((key) => item[key].toLowerCase().includes(query))
//     );
//   };

//   // Function to handle search input change
//   const handleSearchInputChange = (e) => {
//     const inputValue = e.target.value;
//     setQuery(inputValue);
//     if (inputValue.length > 0) {
//       setShowTable(true); // Show the table if user starts typing
//     } else {
//       setShowTable(false); // Hide the table if input is empty
//     }
//   };

//   return (
//     <div className="app">
//       <input
//         type="text"
//         className="search"
//         placeholder="Search..."
//         value={query}
//         onChange={handleSearchInputChange}
//       />
//       {/* Render the table only if showTable is true */}
//       {showTable && <Table data={search(Students)} />}
//     </div>
//   );
// }

// export default Searchbar;

import React, { useEffect, useState } from "react";
import Table from "./Table";
import { Students } from "./data";
import "./app.css";
import axios from "axios";
function Searchbar() {
  const [query, setQuery] = useState("");
  const [showTable, setShowTable] = useState(false); // State to track whether to show the table
  const [data, setData] = useState([]);
  // const keys = ["name", "email"];
  // const search = (data) => {
  //   return data.filter((item) =>
  //     keys.some((key) => item[key].toLowerCase().includes(query))
  //   );
  // };

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get(`http://localhost:4200/?q=${query}`);
      setData(res.data);
    };
    if (query.length > 2) {
      fetchStudents();
    }
  }, [query]);

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    setShowTable(inputValue.length > 0); // Show the table if user starts typing
  };

  return (
    <div className="app">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={handleSearchInputChange}
        onFocus={() => setShowTable(query.length > 0)} // Show the table if input is focused and query length > 0
      />
      {/* Render the table only if showTable is true */}
      {showTable && (
        <div className="table-container">
          {/* <Table data={search(Students)} /> */}
          <Table data={data} />
        </div>
      )}
    </div>
  );
}

export default Searchbar;
