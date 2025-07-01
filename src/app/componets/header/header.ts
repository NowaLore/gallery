import { Creator } from "../../../utilities/creator";
import { dataButtons } from "./data-buttons";
import { headerParams, listButtonsParams } from "./header-params";

export class Header {
  element = new Creator(headerParams);
  constructor() {
    if (this.element.getElement()) {
      this.createButtons();
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
}
// Создать метод, который будет принимать массив кнопок, пробегаться по нему циклом и из каждого объекта создавать кнопку
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
