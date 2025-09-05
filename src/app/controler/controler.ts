import type { Data } from "../../types/types";
import { Model } from "../model/model";
import { View } from "../view/view";

export class Controler {
  model = new Model();
  view = new View();
  constructor() {
    this.setListeners();
  }

  setListeners() {
    this.view.header.form?.addEventListener("submit", (e) =>
      this.formHandler(e),
    );
    this.view.header.buttons?.addEventListener("click", (e) =>
      this.buttonsHandler(e),
    );
  }

  async formHandler(e: Event) {
    e.preventDefault();
    const currFormElement = e.target as HTMLFormElement;
    const userInput = new FormData(currFormElement).get("input") as string;
    const data = await this.model.getDataFromServer(userInput);
    this.Render(data);
  }

  async buttonsHandler(e: Event) {
    const target = e.target as HTMLElement;
    const isButton = target.closest("[data-btn]");
    if (!isButton) return;

    const buttonsData = isButton.getAttribute("data-btn");
    if (!buttonsData) return;

    const data = await this.model.getDataFromServer(buttonsData);
    this.Render(data);
  }

  Render(data: Data) {
    this.view.main.clearRender();
    this.view.main.imagesList(data);
  }
}
