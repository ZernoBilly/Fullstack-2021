import React from "react";

import Button from "./Button/Button";

const Buttons = ({
  good,
  neutral,
  bad,
  all,
  setGood,
  setNeutral,
  setBad,
  setAll,
  setIsActive,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <Button
        text={"Good"}
        count={good}
        setCount={setGood}
        all={all}
        setAll={setAll}
        setIsActive={setIsActive}
      />
      <Button
        text={"Neutral"}
        count={neutral}
        setCount={setNeutral}
        all={all}
        setAll={setAll}
        setIsActive={setIsActive}
      />
      <Button
        text={"Bad"}
        count={bad}
        setCount={setBad}
        all={all}
        setAll={setAll}
        setIsActive={setIsActive}
      />
    </div>
  );
};

export default Buttons;
