import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Track from './Track'

describe('Track', () => {
  it('renders the track name', () => {
    // Arrange
    const track = { id: '1', name: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera' }

    // Act
    render(<Track track={track} />)

    // Assert
    expect(screen.getByText('Bohemian Rhapsody')).toBeInTheDocument()
  })

  it('renders the track artist', () => {
    // Arrange
    const track = { id: '1', name: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera' }

    // Act
    render(<Track track={track} />)

    // Assert
    expect(screen.getByText('Queen')).toBeInTheDocument()
  })

  it('renders the track album', () => {
    // Arrange
    const track = { id: '1', name: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera' }

    // Act
    render(<Track track={track} />)

    // Assert
    expect(screen.getByText('A Night at the Opera')).toBeInTheDocument()
  })

  it('calls onAdd with the track when the add button is clicked', async () => {
    // Arrange
    const track = { id: '1', name: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera' }
    const onAdd = vi.fn()

    // Act
    render(<Track track={track} onAdd={onAdd} />)
    await userEvent.click(screen.getByRole('button', { name: '+' }))

    // Assert
    expect(onAdd).toHaveBeenCalledWith(track)
  })
})
