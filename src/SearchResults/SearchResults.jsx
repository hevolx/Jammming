import Tracklist from '../Tracklist/Tracklist'


function SearchResults({ searchResults, onAdd }) {
  return <Tracklist tracks={searchResults} onAdd={onAdd}/>
}

export default SearchResults;