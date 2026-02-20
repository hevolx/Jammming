import React from 'react';
import Track from '../Track/Track'

function Trackslist({ tracks, onAdd }) {

  return (
    tracks.map(track => (
    <Track key={track.id} track={track} onAdd={onAdd}/>
  )));
}

export default Trackslist;