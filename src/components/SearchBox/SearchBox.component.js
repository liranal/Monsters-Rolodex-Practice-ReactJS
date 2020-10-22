import React from "react";
import "./SearchBox.styles.css";
function SearchBox({ placeholder, handleChange }) {
  return (
    <input
      className="search"
      type="search"
      onChange={(e) => {
        handleChange(e);
      }}
      placeholder="Search Monsters"
    />
  );
}

export default SearchBox;
