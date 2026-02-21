import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Playlist from './Playlist'

describe('Playlist', () => {
  it('renders the playlist name in an input', () => {
    // Arrange
    const tracks = []

    // Act
    render(<Playlist playlistName="My Playlist" playlistTracks={tracks} />)

    // Assert
    expect(screen.getByDisplayValue('My Playlist')).toBeInTheDocument()
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

  it('calls onNameChange when the playlist name input is changed', async () => {
    // Arrange
    const onNameChange = vi.fn()

    // Act
    render(<Playlist playlistName="My Playlist" playlistTracks={[]} onNameChange={onNameChange} />)
    await userEvent.clear(screen.getByRole('textbox'))
    await userEvent.type(screen.getByRole('textbox'), 'New Name')

    // Assert
    expect(onNameChange).toHaveBeenCalled()
  })
})
