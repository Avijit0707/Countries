import {  useEffect, useState } from "react";
import { useState } from "react";
import "./countryDetail.css";
import { Link, useLocation, useParams } from "react-router-dom";
// import { ThemeContexts } from "../contexts/ThemeContexts";
import { GetwindowArea } from "../hooks/utility";
import { useTheme } from "../hooks/useTheme";
import CountryDetailShimmer from "./SimmerDetail";




export default function CountryDetail() {
  const windowArea = GetwindowArea()
  // console.log(params);
  const params = useParams();
  const { state } = useLocation();

  const [isDark]=useTheme()

  const countryName = params.country;

  const [countryData, setCountryData] = useState(null);
  const [contryNotFound, setcontryNotFound] = useState(null);
  // console.log([countryData?.borders]);

  function updateCountryData(data){
    setCountryData({
      name: data.name.common || data.name,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common ,
      imgSrc: data.flags.svg,
      population: data.population.toLocaleString("en-IN"),
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital,
      topLevalDomain: data.tld[0],
      currencies: Object.values(data.currencies ||{})
        .map((currency) => currency.name)
        .join(", "),
      languages: Object.values(data.languages || {}).join(", "),
      borders: [],
    });
    data.borders?.map((border) => {
      fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then(([borderCountry]) => {
          setCountryData((priviousData) => ({
            ...priviousData,
            borders: [...priviousData.borders, borderCountry.name.common],
          }));
        });
    });
    
  }

  useEffect(() => {
    if (state){
      updateCountryData(state.data);
      return
    }
      fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then((res) => res.json())
        .then(([data]) => {
         

        updateCountryData(data);
        
          
        })
        .catch((err) => {
          setcontryNotFound(true);
        });
  }, [countryName]);

  if (contryNotFound) {
    return <h1 style={{ color: "red" }}>Country Not Found</h1>;
  }
  return countryData === null ? (
  <><CountryDetailShimmer/></>
  ) : (<>
  
    <main className={`${isDark?'dark':''}`}>
    {/* <h1 style={{ textAlign: 'center', backgroundColor: 'inherit' , width:'95vw'}}>
    {windowArea.width} x {windowArea.hight}
  </h1> */}
  
 
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left" />
          &nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.imgSrc} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName || countryData.name} </b>
                <span className="native-name" />
              </p>
              <p>
                <b>Population: {countryData.population}</b>
                <span className="population" />
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region" />
              </p>
              <p>
                <b>Sub Region: {countryData.subRegion}</b>
                <span className="sub-region" />
              </p>
              <p>
                <b>Capital: {countryData.capital?.join(', ')}</b>
                <span className="capital" />
              </p>
              <p>
                <b>Top Level Domain: {countryData.topLevalDomain}</b>
                <span className="top-level-domain" />
              </p>
              <p>
                <b>Currencies: {countryData.currencies}</b>
                <span className="currencies" />
              </p>
              <p>
                <b>Languages: {countryData.languages} </b>
                <span className="languages" />
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries:</b>&nbsp;
                {countryData.borders.map((c) => {
                  return (
                    <Link key={c} to={`/${c}`}>
                      {c}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
