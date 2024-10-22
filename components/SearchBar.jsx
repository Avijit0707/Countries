export default function SearchBar({setquary}) {
  return (
    <>
      <div className="search-container" onChange={(e)=>{
    setquary(e.target.value.toLocaleLowerCase())
  }}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search for a country..."
          fdprocessedid="hs1z5r"
        />
      </div>
    </>
  );
}
