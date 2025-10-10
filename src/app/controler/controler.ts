import type { Data } from "../../types/types";
import { Model } from "../model/model";
import { View } from "../view/view";

// ==========================================
export class Controler {
  model = new Model();
  view;

  constructor() {
    this.init();
  }

  // жду данных от модели и только потом инициализирую view
  async init() {
    const genres = await this.model.listOfGenres;
    this.view = new View(genres);
    this.setListeners();
  }
  // ==================================================
  setListeners() {
    this.view.header.form?.addEventListener("submit", (e) =>
      this.formHandler(e),
    );

    this.view.header.element.getElement()?.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target) {
        const isBurgerBtn = target.closest("#burger") as HTMLButtonElement;
        if (isBurgerBtn) {
          this.view.header.menuClassToggle();
        }
        const isQueryBtn = target.closest("[data-btn]") as HTMLButtonElement;
        if (isQueryBtn) {
          this.buttonsHandler(isQueryBtn);
          this.view.header.menuClassToggle();
        }
      }
    });
  }

  async formHandler(e: Event) {
    e.preventDefault();
    const currFormElement = e.target as HTMLFormElement;
    const userInput = new FormData(currFormElement).get("input") as string;
    const data = await this.model.getDataFromServer(userInput);
    this.Render(data);
  }

  async buttonsHandler(btnElement: HTMLButtonElement) {
    if (!btnElement) return;

    const buttonsData = btnElement.getAttribute("data-btn");
    if (!buttonsData) return;

    const data = await this.model.getDataFromServer(buttonsData);
    this.Render(data);
  }

  Render(data: Data) {
    this.view.main.clearRender();
    this.view.main.imagesList(data);
  }
}
