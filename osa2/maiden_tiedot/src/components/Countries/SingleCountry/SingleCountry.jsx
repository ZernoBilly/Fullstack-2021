import React from "react";

const SingleCountry = ({ filteredCountries, countrySearch }) => {
  return (
    <div>
      <h2>{filteredCountries[0].name}</h2>
      <p>Capital: {filteredCountries[0].capital}</p>
      <p>Population: {filteredCountries[0].population}</p>
      <h3>Languages</h3>
      <ul>
        {countrySearch
          ? filteredCountries[0].languages.map((language) => (
              <li key={language.name}>{language.name}</li>
            ))
          : ""}
      </ul>
      <img
        src={filteredCountries[0].flag}
        alt="flag"
        style={{ height: "4rem" }}
      ></img>
    </div>
  );
};

export default SingleCountry;
