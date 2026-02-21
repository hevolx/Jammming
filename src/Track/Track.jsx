function Track({ track, onAdd, onRemove }) {
  return (
    <>
      <p>{track.name}</p>
      <p>{track.artist}</p>
      <p>{track.album}</p>
      {onAdd && <button onClick={() => onAdd(track)}>+</button>}
      {onRemove && <button onClick={() => onRemove(track)}>-</button>}
    </>
  )
}

export default Track;