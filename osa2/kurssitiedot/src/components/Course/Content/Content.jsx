import React from "react";

import Part from "./Part/Part";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((content) => (
        <Part
          key={content.id}
          name={content.name}
          exercises={content.exercises}
        />
      ))}
    </>
  );
};

export default Content;
