import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchTermChange = (e) => setSearchTerm(e.target.value);
  return (
    <>
      <input value={searchTerm} onChange={searchTermChange} placeholder="search"/>
      <button onClick={() => onSearch(searchTerm)}>Search</button>
    </>
  )
}

export default SearchBar;