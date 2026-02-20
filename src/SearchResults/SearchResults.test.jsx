import { render, screen } from '@testing-library/react'
import SearchResults from './SearchResults'

describe('SearchResults', () => {
  it('renders the search results via a Tracklist', () => {
    // Arrange
    const searchResults = [
      { id: '1', name: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera' },
      { id: '2', name: 'Stairway to Heaven', artist: 'Led Zeppelin', album: 'Led Zeppelin IV' },
    ]

    // Act
    render(<SearchResults searchResults={searchResults} />)

    // Assert
    expect(screen.getByText('Bohemian Rhapsody')).toBeInTheDocument()
    expect(screen.getByText('Stairway to Heaven')).toBeInTheDocument()
  })
})
