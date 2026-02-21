import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

const mockTrack = { id: '1', name: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera', uri: 'spotify:track:1' }

const mockResponse = {
  tracks: {
    items: [{
      data: {
        id: mockTrack.id,
        uri: mockTrack.uri,
        name: mockTrack.name,
        artists: { items: [{ profile: { name: mockTrack.artist } }] },
        albumOfTrack: { name: mockTrack.album }
      }
    }]
  }
}

async function performSearch() {
  await userEvent.type(screen.getByPlaceholderText(/search/i), 'Queen')
  await userEvent.click(screen.getByRole('button', { name: /search/i }))
  await screen.findAllByRole('button', { name: '+' })
}

describe('App', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      json: () => Promise.resolve(mockResponse)
    }))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('displays search results after a search is performed', async () => {
    // Arrange
    render(<App />)

    // Act
    await performSearch()

    // Assert
    expect(screen.getByText('Bohemian Rhapsody')).toBeInTheDocument()
  })

  it('adds a track to the playlist when the add button is clicked', async () => {
    // Arrange
    render(<App />)
    await performSearch()

    // Act
    await userEvent.click(screen.getAllByRole('button', { name: '+' })[0])

    // Assert
    expect(screen.getByTestId('playlist-section')).toHaveTextContent('Bohemian Rhapsody')
  })

  it('removes a track from the playlist when the remove button is clicked', async () => {
    // Arrange
    render(<App />)
    await performSearch()
    await userEvent.click(screen.getAllByRole('button', { name: '+' })[0])

    // Act
    const playlistSection = screen.getByTestId('playlist-section')
    await userEvent.click(within(playlistSection).getByRole('button', { name: '-' }))

    // Assert
    expect(screen.getByTestId('playlist-section')).not.toHaveTextContent('Bohemian Rhapsody')
  })

  it('clears the playlist after saving', async () => {
    // Arrange
    render(<App />)
    await performSearch()
    await userEvent.click(screen.getAllByRole('button', { name: '+' })[0])

    // Act
    await userEvent.click(screen.getByRole('button', { name: /save/i }))

    // Assert
    expect(screen.getByTestId('playlist-section')).not.toHaveTextContent('Bohemian Rhapsody')
  })

  it('does not add a duplicate track to the playlist', async () => {
    // Arrange
    render(<App />)
    await performSearch()
    const firstAddButton = screen.getAllByRole('button', { name: '+' })[0]

    // Act
    await userEvent.click(firstAddButton)
    await userEvent.click(firstAddButton)

    // Assert
    const playlistSection = screen.getByTestId('playlist-section')
    const matches = playlistSection.querySelectorAll('p')
    const trackNameMatches = Array.from(matches).filter(el => el.textContent === 'Bohemian Rhapsody')
    expect(trackNameMatches).toHaveLength(1)
  })
})
