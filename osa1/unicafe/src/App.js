import React, { useState, useEffect } from "react";

import Title from "./components/Title/Title";
import Buttons from "./components/Buttons/Buttons";
import Statistics from "./components/Statistics/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [sum, setSum] = useState(0);
  const [avarage, setAvarage] = useState(0);
  const [positive, setPositive] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setSum(good - bad);
    setAvarage(sum / all);
    setPositive((good * 100) / all);
  }, [good, neutral, bad, all, sum]);

  return (
    <div className="App">
      <Title />
      <Buttons
        bad={bad}
        neutral={neutral}
        good={good}
        all={all}
        setGood={setGood}
        setNeutral={setNeutral}
        setBad={setBad}
        setAll={setAll}
        setIsActive={setIsActive}
      />
      <h2>Statistics</h2>
      {isActive ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          avarage={avarage}
          positive={positive}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
}

export default App;
