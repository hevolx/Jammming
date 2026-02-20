import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('adds a track to the playlist when the add button is clicked', async () => {
    // Arrange
    render(<App />)

    // Act
    await userEvent.click(screen.getAllByRole('button', { name: '+' })[0])

    // Assert - spåret ska nu finnas i playlist-sektionen
    expect(screen.getByTestId('playlist-section')).toHaveTextContent('Bohemian Rhapsody')
  })

  it('does not add a duplicate track to the playlist', async () => {
    // Arrange
    render(<App />)
    const firstAddButton = screen.getAllByRole('button', { name: '+' })[0]

    // Act - klicka två gånger på samma spår
    await userEvent.click(firstAddButton)
    await userEvent.click(firstAddButton)

    // Assert - spåret ska bara finnas en gång i playlist-sektionen
    const playlistSection = screen.getByTestId('playlist-section')
    const matches = playlistSection.querySelectorAll('p')
    const trackNameMatches = Array.from(matches).filter(el => el.textContent === 'Bohemian Rhapsody')
    expect(trackNameMatches).toHaveLength(1)
  })
})
