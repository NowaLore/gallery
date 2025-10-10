import { Creator } from "../../../utilities/creator";
import { burgerItems, menuBtnParams } from "./data-buttons";
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
  constructor(listOfGenres) {
    if (this.element.getElement()) {
      this.buttons = this.createButtons(listOfGenres);
      this.form = this.formCreator();
      this.burger = this.burgerMenu();
    }
  }

  createButtons(listOfGenres) {
    const listButtons = new Creator(
      listButtonsParams,
    ).getElement() as HTMLElement;
    console.log(listOfGenres);
    // listOfGenres.forEach(genre => {

    //   btnParams.attr["data-btn"] = genre.name,
    //   btnParams.text = genre.name
    //   const genreBtn = new Creator(btnParams);
    //   listButtons.append(genreBtn);
    // });
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
