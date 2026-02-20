import { useState } from 'react'
import SearchResults from './SearchResults/SearchResults'
import Playlist from './Playlist/Playlist'
//import Track from './Track/Track'
import './App.css'


function App() {
  const [ searchResults, addSearchResults ] = useState([{ id: '1', name: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera' }]);
  const [ playlistTracks, addPlaylistTracks ] = useState([]);

  function addTrack(track) {
    if (playlistTracks.some(t => t.id === track.id)) {
      return track
    } else {
      addPlaylistTracks(playlistTracks => [...playlistTracks, track])
    }
  }
  return (
    <>
      <SearchResults searchResults={searchResults} onAdd={addTrack}/>
      <div data-testid="playlist-section">
        <Playlist playlistTracks={playlistTracks}/>
      </div>
    </>
  )
}

export default App
