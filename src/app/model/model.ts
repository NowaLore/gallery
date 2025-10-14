export class Model {
  listOfGenres;
  #baseUrl = "https://api.kinopoisk.dev/";
  #genresEndPoint = "v1/movie/possible-values-by-field?field=genres.name";
  constructor() {
    this.listOfGenres = this.getDataForGenres(this.#genresEndPoint);
  }

  async getDataForGenres(endPoint: string) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": "QT6FNHV-J4S4XPA-N6FHQS0-RW3GWBY",
      },
    };
    const response = await fetch(`${this.#baseUrl}${endPoint}`, options);
    const data = await response.json();
    return data;
  }
}
