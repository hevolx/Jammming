const apiKey = import.meta.env.VITE_RAPIDAPI_KEY

export async function search(term) {
  const url = `https://spotify23.p.rapidapi.com/search/?q=${term}&type=tracks&limit=10`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'spotify23.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.tracks.items.map(item => ({
      id: item.data.id,
      name: item.data.name,
      artist: item.data.artists.items[0].profile.name,
      album: item.data.albumOfTrack.name,
      uri: item.data.uri
    }));
  } catch (error) {
    console.error(error);
  }
}
