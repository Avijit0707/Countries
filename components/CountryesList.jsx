import React from "react";
import CountryCard from "./CountryCard";
import { useState } from "react";
import { useEffect } from "react";
import CountryListSimmer from "./CountryListSimmer";

export default function Countryes({ quary }) {
  let [countriesdata, setCountriesData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });

    // Egukation perpose
    const intervalId = setInterval(() => {
      console.log("running");
    }, [1000]);

    return () => {
      clearInterval(intervalId);
    };
    //stop
  }, []);

  const array = countriesdata
    .filter((country) =>
      country.name.common.toLocaleLowerCase().includes(quary) || country.region.toLocaleLowerCase().includes(quary)
    )
    .map((data, i) => {
      return (
        <CountryCard
          imgSrc={data.flags.png}
          name={data.name.common}
          population={data.population.toLocaleString("en-IN")}
          region={data.region}
          capital={data.capital?.[0]}
          country={data}
          key={data.name.common}
          data={data}
        />
      );
    });

  if (countriesdata.length === 0) {
    return (
      <div className="countries-container">
        <CountryListSimmer />
      </div>
    );
  } else {
    return (
      <>
        <div className="countries-container">{array}</div>
      </>
    );
  }
}
