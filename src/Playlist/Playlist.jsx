import Tracklist from '../Tracklist/Tracklist'

function Playlist({playlistName, playlistTracks}) {
  return (
    <>
      <p>{playlistName}</p>
      <Tracklist tracks={playlistTracks}/>
    </>
  )
}

export default Playlist;