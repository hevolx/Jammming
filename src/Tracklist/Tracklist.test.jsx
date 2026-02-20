import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Tracklist from './Tracklist'

describe('Tracklist', () => {
  it('renders a Track for each track in the list', () => {
    // Arrange
    const tracks = [
      { id: '1', name: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera' },
      { id: '2', name: 'Stairway to Heaven', artist: 'Led Zeppelin', album: 'Led Zeppelin IV' },
    ]

    // Act
    render(<Tracklist tracks={tracks} />)

    // Assert
    expect(screen.getByText('Bohemian Rhapsody')).toBeInTheDocument()
    expect(screen.getByText('Stairway to Heaven')).toBeInTheDocument()
  })

  it('passes onAdd to each Track', async () => {
    // Arrange
    const tracks = [
      { id: '1', name: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera' },
    ]
    const onAdd = vi.fn()

    // Act
    render(<Tracklist tracks={tracks} onAdd={onAdd} />)
    await userEvent.click(screen.getByRole('button', { name: '+' }))

    // Assert
    expect(onAdd).toHaveBeenCalledWith(tracks[0])
  })
})
