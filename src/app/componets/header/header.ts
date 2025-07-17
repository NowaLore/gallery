import { Creator } from "../../../utilities/creator";
import { dataButtons } from "./data-buttons";
import {
  headerParams,
  listButtonsParams,
  searchFormParams,
  searchInputParams,
  searchSubmitParams,
} from "./header-params";

export class Header {
  element = new Creator(headerParams);
  constructor() {
    if (this.element.getElement()) {
      this.createButtons();
      this.formCreator();
    }
  }

  createButtons() {
    const listButtons = new Creator(listButtonsParams).getElement();
    for (let i = 0; i < dataButtons.length; i++) {
      console.log(dataButtons);

      const currButton = new Creator(dataButtons[i]).getElement();
      if (listButtons && currButton) {
        listButtons.append(currButton);
      }
    }
    if (this.element.getElement() && listButtons) {
      this.element.getElement()!.append(listButtons);
    }
  }

  formCreator() {
    // 1. Создать через Creator форму, инпут и кнопку
    // 2. Выполнить вставку в нужном порядке
    const formSearchElement = new Creator(
      searchFormParams,
    ).getElement() as HTMLFormElement;
    const formInputElement = new Creator(
      searchInputParams,
    ).getElement() as HTMLInputElement;
    const formSubmitElement = new Creator(
      searchSubmitParams,
    ).getElement() as HTMLButtonElement;

    formSearchElement.append(formInputElement, formSubmitElement);
    this.element.getElement()?.append(formSearchElement);
  }
}
// export class Main extends Creator {
//   constructor(objectParams: ParamsTypes) {
//     super(objectParams);
//   }
// }

// export class Footer extends Creator {
//   constructor(objectParams: ParamsTypes) {
//     super(objectParams);
//   }
// }
