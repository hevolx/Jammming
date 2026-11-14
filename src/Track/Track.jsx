function Track({ track, onAdd, onRemove }) {
  return (
    <div className="track">
      <div className="track-info">
        <p className="track-name">{track.name}</p>
        <p className="track-meta"><span>{track.artist}</span> | <span>{track.album}</span></p>
      </div>
      {onAdd && <button onClick={() => onAdd(track)}>+</button>}
      {onRemove && <button onClick={() => onRemove(track)}>-</button>}
    </div>
  )
}

export default Track;