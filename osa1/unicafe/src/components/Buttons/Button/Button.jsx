import React from "react";

const Button = ({ text, count, setCount, all, setAll, setIsActive }) => {
  const handleClick = () => {
    setCount(count + 1);
    setAll(all + 1);
    setIsActive(true);
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
