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

  getData(e) {
    e.preventDefault();
    console.log(new FormData(e.target).get("input"));
  }
}
