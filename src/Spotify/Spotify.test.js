import { search } from './Spotify'

describe('Spotify', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  describe('search', () => {
    it('returns an array of tracks with id, name, artist, album and uri', async () => {
      // Arrange
      const mockResponse = {
        tracks: {
          items: [
            {
              data: {
                id: 'track-id-1',
                uri: 'spotify:track:track-id-1',
                name: 'Bohemian Rhapsody',
                artists: {
                  items: [{ profile: { name: 'Queen' } }]
                },
                albumOfTrack: { name: 'A Night at the Opera' }
              }
            }
          ]
        }
      }
      vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
        json: () => Promise.resolve(mockResponse)
      }))

      // Act
      const tracks = await search('Bohemian Rhapsody')

      // Assert
      expect(tracks).toEqual([
        {
          id: 'track-id-1',
          name: 'Bohemian Rhapsody',
          artist: 'Queen',
          album: 'A Night at the Opera',
          uri: 'spotify:track:track-id-1'
        }
      ])
    })
  })
})
