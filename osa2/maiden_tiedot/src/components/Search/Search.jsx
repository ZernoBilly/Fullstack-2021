import React from "react";

const Search = ({ countySearch, handleChange }) => {
  return (
    <div>
      Find Countries:{" "}
      <input value={countySearch} onChange={handleChange}></input>
    </div>
  );
};

export default Search;
