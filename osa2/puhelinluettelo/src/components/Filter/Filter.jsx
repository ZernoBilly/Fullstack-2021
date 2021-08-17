import React from "react";

const Filter = ({ search, handleSearchChange }) => {
  return (
    <div>
      Search: <input value={search} onChange={handleSearchChange}></input>
    </div>
  );
};

export default Filter;
