import React from 'react';
import Track from '../Track/Track'

function Trackslist({ tracks, onAdd, onRemove }) {

  return (
    tracks.map(track => (
    <Track key={track.id} track={track} onAdd={onAdd} onRemove={onRemove}/>
  )));
}

export default Trackslist;