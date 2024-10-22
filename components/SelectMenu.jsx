
export default function SelectMenu({setquary}) {

  return (
    <select className="filter-by-region" fdprocessedid="bt9bs6"  onChange={(e)=> setquary(e.target.value.toLowerCase()) }>
          <option hidden>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
  )
}
