import { Header } from "../componets/header/header";
import { Main } from "../componets/main-view";

export class View {
  appContainer;
  header = new Header();
  main = new Main();
  constructor() {
    this.appContainer = this.initRender();
    this.interfaceBuilder();
  }

  initRender() {
    return document.querySelector("#app");
  }

  interfaceBuilder() {
    if (this.appContainer && this.header.element.element) {
      this.appContainer.append(this.header.element.element);
    }
    if (this.appContainer && this.main.element.element) {
      this.appContainer.append(this.main.element.element);
    }
  }
}
