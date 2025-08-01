import { Header } from "../componets/header/header";
import { Main } from "../componets/main-view";

export class View {
  appContainer;
  header = new Header();
  main = new Main();
  // footer = new Footer(footerParams).getElement();
  constructor() {
    this.appContainer = this.initRender();
    this.interfaceBuilder();
  }

  initRender() {
    return document.querySelector("#app");
  }

  interfaceBuilder() {
    if (this.appContainer && this.header) {
      this.appContainer.append(this.header.element.element);
    }
    if (this.appContainer && this.main) {
      this.appContainer.append(this.main.element.element);
    }
  }
}
