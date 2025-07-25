export class Model {
  constructor() {}

  async getDataFromServer(query: string) {
    const response = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=nfz6uqutkSaOK5zHC7NQXLwql2V5WyQY7kiZrjMjIB4&page=1&per_page=16&query=${query}`,
    );
    const data = await response.json();
    return data;
  }
}
