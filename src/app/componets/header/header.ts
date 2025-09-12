import { Creator } from "../../../utilities/creator";
import { dataButtons, wrapperImg, wrapperText } from "./data-buttons";
import {
  headerParams,
  listButtonsParams,
  searchFormParams,
  searchInputParams,
  searchSubmitParams,
} from "./header-params";

export class Header {
  element = new Creator(headerParams);
  form;
  buttons;
  constructor() {
    if (this.element.getElement()) {
      this.buttons = this.createButtons();
      this.form = this.formCreator();
    }
  }

  createButtons() {
    const listButtons = new Creator(
      listButtonsParams,
    ).getElement() as HTMLElement;
    for (let i = 0; i < dataButtons.length; i++) {
      const currButton = new Creator(
        dataButtons[i],
      ).getElement() as HTMLElement;
      const wrapperIconElement = new Creator(
        wrapperImg[i],
      ).getElement() as HTMLElement;
      const wrapperTextElement = new Creator(
        wrapperText[i],
      ).getElement() as HTMLElement;
      currButton?.append(wrapperTextElement, wrapperIconElement);
      listButtons.append(currButton);
    }
    if (this.element.getElement()) {
      this.element.getElement()!.append(listButtons);
    }
    return listButtons;
  }

  formCreator() {
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
    return formSearchElement;
  }
}

// 1. Сделать список кнопок частью хедера также как и форму
// 2. В контролере повесить прослушку на список
// 3. Через событие найти таргет который является кнопкой, если кнопка - получить значение аттрибута
// 4. Передать значение в getDataFromServer
// 5. Запустить рендер
