import { Model } from "../model/model";
import { View } from "../view/view";

export class Controler {
  model = new Model();
  view = new View();
  constructor() {
    console.log(this.view);
    this.setListeners();
  }

  setListeners() {
    this.view.header.form?.addEventListener("submit", (e) => this.getData(e));
  }
  async getData(e) {
    e.preventDefault();
    const userInput = new FormData(e.target).get("input");
    const data = await this.model.getDataFromServer(userInput);
    this.view.main.clearRender();
    this.view.main.imagesList(data);
  }
}
