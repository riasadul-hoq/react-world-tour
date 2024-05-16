import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "../Countries/Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [countryVisited, setCountryVisited] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleCountryVisited = (country) => {
    const newCountryVisited = [...countryVisited, country];
    setCountryVisited(newCountryVisited);
  };

  return (
    <>
      <div>
        <h3>Countries Visited</h3>
        <ul>
          {countryVisited.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="countries-container">
        {/* <h3>Countries: {countries.length}</h3> */}
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleCountryVisited={handleCountryVisited}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
