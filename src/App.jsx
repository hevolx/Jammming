import { useState } from 'react'
import { search } from './Spotify/Spotify'
import SearchBar from './SearchBar/SearchBar'
import SearchResults from './SearchResults/SearchResults'
import Playlist from './Playlist/Playlist'
import './App.css'


function App() {
  const [ searchResults, setSearchResults ] = useState([]);
  const [ playlistTracks, setPlaylistTracks ] = useState([]);
  const [ playlistName, setPlaylistName] = useState('My Playlist');

  function addTrack(track) {
    if (playlistTracks.some(t => t.id === track.id)) {
      return track;
    } else {
      setPlaylistTracks(prev => [...prev, track]);
    }
  }

  function removeTrack(track) {
    setPlaylistTracks(prev => prev.filter(t => t.id !== track.id));
  }

  function onNameChange(name) {
    setPlaylistName(name);
  }

  async function onSearch(term) {
    if (term) {
      const savedSearch = await search(term);
      setSearchResults(savedSearch)
    }
  }

  function handleSave() {
    setPlaylistTracks([]);
  }

  return (
    <main className="app">
      <h1>Ja<span>mmm</span>ing</h1>
      <SearchBar onSearch={onSearch}/>
      <div className="columns">
        <section className="panel">
          <h2>Results</h2>
          <SearchResults searchResults={searchResults} onAdd={addTrack}/>
        </section>
        <section className="panel" data-testid="playlist-section">
          <Playlist playlistTracks={playlistTracks} playlistName={playlistName} onNameChange={onNameChange} onRemove={removeTrack}/>
          <button className="save" onClick={handleSave}>Save</button>
        </section>
      </div>
    </main>
  )
}

export default App;
