import { Header } from "../componets/header/header";
import { Main } from "../componets/main-view";

export class View {
  appContainer;
  header;
  main;
  constructor(listOfGenres) {
    this.header = new Header(listOfGenres);
    this.main = new Main();
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
