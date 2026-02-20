import React from 'react';



// Komponentfunktion med namnet Track
function Track({ track, onAdd }) {
  return (
    <>
      <p>{track.name}</p>
      <p>{track.artist}</p>
      <p>{track.album}</p>
      <button onClick={() => onAdd(track)}>+</button>
    </>
  )
}

export default Track;