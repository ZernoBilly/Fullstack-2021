import React from "react";

const Total = ({ parts }) => {
  const total = parts.reduce((acc, parts) => acc + parts.exercises, 0);

  return (
    <p>
      <b>Total of {total} exercises</b>
    </p>
  );
};

export default Total;
