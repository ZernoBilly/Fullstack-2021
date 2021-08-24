import React from "react";

import SingleCountry from "./SingleCountry/SingleCountry";

const Countries = ({ filteredCountries, countrySearch }) => {
  return (
    <div>
      {filteredCountries.length === 1 && countrySearch !== "" ? (
        <SingleCountry
          filteredCountries={filteredCountries}
          countrySearch={countrySearch}
        />
      ) : filteredCountries.length <= 10 ? (
        filteredCountries.map((country) => (
          <p key={country.name}>{country.name}</p>
        ))
      ) : countrySearch === "" ? (
        ""
      ) : (
        <p>Too many matches, specify another filter</p>
      )}
    </div>
  );
};

export default Countries;
