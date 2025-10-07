export class Model {
  // #genresEndPoint = 'https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name'
  constructor() {}

  async getDataFromServer(query: string) {
    const response = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=nfz6uqutkSaOK5zHC7NQXLwql2V5WyQY7kiZrjMjIB4&page=1&per_page=16&query=${query}`,
    );
    const data = await response.json();
    return data;
  }

  async getDataForGenres(endPoint: string) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": "QT6FNHV-J4S4XPA-N6FHQS0-RW3GWBY",
      },
    };
    const response = await fetch(endPoint, options);
    const data = await response.json();
    return data;
  }
}
