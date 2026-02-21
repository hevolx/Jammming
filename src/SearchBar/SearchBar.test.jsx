import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('calls onSearch with the input value when the search button is clicked', async () => {
    // Arrange
    const onSearch = vi.fn()
    render(<SearchBar onSearch={onSearch} />)

    // Act
    await userEvent.type(screen.getByRole('textbox'), 'Queen')
    await userEvent.click(screen.getByRole('button', { name: /search/i }))

    // Assert
    expect(onSearch).toHaveBeenCalledWith('Queen')
  })
})
