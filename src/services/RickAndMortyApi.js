function getCharactersFromApi() {
  return fetch(`https://rickandmortyapi.com/documentation/#get-all-characters`)
    .then((response) => response.json())
    .then((json) => {
      return json.results.map((data) => {
        return {
          id: data.id,
          name: data.name,
          image: data.image,
          species: data.species,
          status: data.status,
          origin: data.origin.name,
          location: data.location.name,
          episode: data.episode.length,
        };
      });
    });
}

export default getCharactersFromApi;
