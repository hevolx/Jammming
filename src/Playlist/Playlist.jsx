import Tracklist from '../Tracklist/Tracklist'

function Playlist({playlistName, playlistTracks, onNameChange, onRemove}) {
  const nameChange = (e) => onNameChange(e.target.value);
  return (
    <>
      <input value={playlistName} onChange={nameChange}/>
      <Tracklist tracks={playlistTracks} onRemove={onRemove}/>
    </>
  )
}

export default Playlist;