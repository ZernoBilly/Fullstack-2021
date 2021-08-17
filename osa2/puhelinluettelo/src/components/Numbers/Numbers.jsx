import React from "react";

const Numbers = ({ persons, search }) => {
  return (
    <>
      <h2>Numbers</h2>
      {persons
        .filter((value) => {
          if (search === "") {
            return value;
          } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
            return value;
          }
        })
        .map((person) => (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))}
    </>
  );
};

export default Numbers;
