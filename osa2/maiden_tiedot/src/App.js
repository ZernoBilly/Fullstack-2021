import React, { useState, useEffect } from "react";
import axios from "axios";

import Search from "./components/Search/Search";
import Countries from "./components/Countries/Countries";

function App() {
  const [countries, setCountries] = useState([{}]);
  const [countrySearch, setCountrySearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([{}]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const result = await axios.get("https://restcountries.eu/rest/v2/all");
    setCountries(result.data);
  };

  useEffect(() => {
    const newCountries = countries.filter((value) => {
      if (countrySearch === "") {
        return value;
      } else if (
        value.name.toLowerCase().includes(countrySearch.toLowerCase())
      ) {
        return value;
      }
    });
    setFilteredCountries(newCountries);
  }, [countrySearch, countries]);

  const handleChange = (e) => {
    setCountrySearch(e.target.value);
  };

  return (
    <div className="App">
      <Search countySearch={countrySearch} handleChange={handleChange} />
      <Countries
        filteredCountries={filteredCountries}
        countrySearch={countrySearch}
      />
    </div>
  );
}

export default App;
