import { Link} from "react-router-dom";


export default function CountryCard({name,imgSrc,population,region,capital,country,data}) {
  return (
    <Link className="country-card" to={ `/${country.name.common}`} state={{data}}>
         <div className="img-container"> <img src={imgSrc} alt="South Georgia flag"/></div>
          <div className="card-text">
              <h3 className="card-title">{name}</h3>
              <p><b>Population: </b>{population}</p>
              <p><b>Region: </b>{region}</p>
              <p><b>Capital: </b>{capital}</p>
          </div>
  </Link>
  )
}
 
