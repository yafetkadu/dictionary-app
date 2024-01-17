const SearchBar = ({searchInput, inputValue, searchBtn}) => {
  
  return (
  <div className="search-bar">
      <input onChange={searchInput} value={inputValue} type="text" placeholder="Search Word..."/>
      <i id="search-icon" onClick={searchBtn} className="fa fa-search"></i>
  </div>
  )
}

export default SearchBar;