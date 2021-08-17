import React from "react";

const Input = ({ handleSubmit, newName, handleChange }) => {
  return (
    <>
      <h2>Add New</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input value={newName.name} name="name" onChange={handleChange} />
        </div>
        <div>
          number:{" "}
          <input value={newName.number} name="number" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default Input;
