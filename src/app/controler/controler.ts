import { Model } from "../model/model";
import { View } from "../view/view";

export class Controler {
  model = new Model();
  view = new View();
  constructor() {
    this.setListeners();
  }

  setListeners() {
    this.view.header.form?.addEventListener("submit", (e) => this.getData(e));
  }
  async getData(e: Event) {
    e.preventDefault();
    const currFormElement = e.target as HTMLFormElement;
    const userInput = new FormData(currFormElement).get("input") as string;
    const data = await this.model.getDataFromServer(userInput);
    this.view.main.clearRender();
    this.view.main.imagesList(data);
  }
}
