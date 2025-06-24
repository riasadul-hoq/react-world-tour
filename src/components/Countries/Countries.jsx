import { useEffect, useState } from "react";
import "../Countries/Countries.css";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [countryVisited, setCountryVisited] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,cca3,area,population,capital"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  // console.log(countries);

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
            <li key={country.cca3}>
              {country.name.common}
              <br></br>
              <img src={country.flags.png} alt="" width="100" />
            </li>
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
