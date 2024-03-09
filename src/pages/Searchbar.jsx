import React, { useState } from "react";
import "../pages/app.css";

import { Students } from "../data/students";

function Searchbar() {
  const [query, setQuery] = useState("");
  consol.log(query);
  return (
    <div className="app">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="list">
        {Students.map((student) => (
          <li key={student.id} className="listItem">
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Searchbar;
