import { Creator } from "../../../utilities/creator";
import { burgerItems, dataButtons, menuBtnParams } from "./data-buttons";
import {
  headerParams,
  listButtonsParams,
  searchFormParams,
  searchInputParams,
  searchSubmitParams,
} from "./header-params";

import menuStyle from "./menuStyle.module.css";
import style from "./buttons.module.css";

export class Header {
  element = new Creator(headerParams);
  form;
  buttons;
  burger;
  constructor() {
    if (this.element.getElement()) {
      this.buttons = this.createButtons();
      this.form = this.formCreator();
      this.burger = this.burgerMenu();
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

  burgerMenu() {
    const menuBtn = new Creator(
      menuBtnParams,
    ).getElement() as HTMLButtonElement;
    for (let i = 0; i < 3; i++) {
      const lineElement = new Creator(burgerItems).getElement() as HTMLElement;
      menuBtn.append(lineElement);
    }
    this.element.getElement().prepend(menuBtn);
    return menuBtn;
  }

  menuClassToggle() {
    this.burger?.classList.toggle(menuStyle.burgerActive);
    this.buttons?.classList.toggle(style.listButtonsActive);
  }
}
