import { render, screen } from '@testing-library/react'
import Playlist from './Playlist'

describe('Playlist', () => {
  it('renders the playlist name', () => {
    // Arrange
    const tracks = []

    // Act
    render(<Playlist playlistName="My Playlist" playlistTracks={tracks} />)

    // Assert
    expect(screen.getByText('My Playlist')).toBeInTheDocument()
  })

  it('renders the playlist tracks via a Tracklist', () => {
    // Arrange
    const tracks = [
      { id: '1', name: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera' },
    ]

    // Act
    render(<Playlist playlistName="My Playlist" playlistTracks={tracks} />)

    // Assert
    expect(screen.getByText('Bohemian Rhapsody')).toBeInTheDocument()
  })
})
