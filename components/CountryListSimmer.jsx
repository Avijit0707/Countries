import "./CountryListSimmer.css";

export default function () { 
  return (
    new Array(12).fill(undefined).map((e,i)=>{
      
      return ( <div key={i} className="country-card simmer-card" />)
    }
  ))
}
