export class Model {
  listOfGenres;
  constructor() {
    this.listOfGenres = this.getData({
      version: "1",
      chapter: "movie",
      path: "possible-values-by-field?",
      params: {
        field: "genres.name",
      },
    });
  }

  async getData({
    version = "", // версия
    chapter = "", // например "movie"
    path = "", // например "search" или "possible-values-by-field"
    params = {}, // страницы, количество items и д.р.
  } = {}) {
    const baseURL = "https://api.kinopoisk.dev";

    const url = new URL(
      `${baseURL}/v${version}/${chapter}${path ? `/${path}` : ""}`,
    );

    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, String(value));
      }
    }

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": "QT6FNHV-J4S4XPA-N6FHQS0-RW3GWBY",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Ответ:", data);
      return data;
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      return null;
    }
  }
}
