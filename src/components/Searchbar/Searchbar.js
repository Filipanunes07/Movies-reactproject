
import React from "react";
import "./Searchbar.css";

function Searchbar(props) {
  return (
    <div className="searchbar">
      <input
        className="searchbar-input"
        type="text"
        onChange={props.searchInputFunction}
      />
    </div>
  );
}

export default Searchbar;