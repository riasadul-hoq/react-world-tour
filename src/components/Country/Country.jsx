import "./Country.css";
import { useState } from "react";

const Country = ({ country, handleCountryVisited }) => {
  const { name, cca3, area, population, flags } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  console.log(handleCountryVisited);
  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3>Name: {name?.common}</h3>
      <small>Code: {cca3}</small>
      <img src={flags.png} alt="" />
      <p>Area: {area} km&#178;</p>
      <p>Population: {population}</p>
      <br></br>
      <button
        style={{ backgroundColor: visited ? "lightGreen" : "lightblue" }}
        onClick={handleVisited}
      >
        {visited ? "Visited" : "Planning"}
      </button>
      {/* {visited ? "Already Visited" : "Planning to Visit"} */}
      <br></br>
      <button onClick={() => handleCountryVisited}>Country Visited</button>
    </div>
  );
};

export default Country;
