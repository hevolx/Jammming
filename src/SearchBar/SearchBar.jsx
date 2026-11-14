import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchTermChange = (e) => setSearchTerm(e.target.value);
  return (
    <div className="searchbar">
      <input value={searchTerm} onChange={searchTermChange} placeholder="search"/>
      <button onClick={() => onSearch(searchTerm)}>Search</button>
    </div>
  )
}

export default SearchBar;