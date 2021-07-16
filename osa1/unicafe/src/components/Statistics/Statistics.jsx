import React from "react";

import StatisticLine from "./StatisticLine/StatisticLine";

const Statistics = ({ good, neutral, bad, all, avarage, positive }) => {
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text={"Good"} value={good} />
          <StatisticLine text={"Neutral"} value={neutral} />
          <StatisticLine text={"Bad"} value={bad} />
          <StatisticLine text={"All"} value={all} />
          <StatisticLine text={"Avarage"} value={avarage} />
          <StatisticLine text={"Positive"} value={String(positive + " %")} />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
