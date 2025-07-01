import { Header } from "../componets/header/header";

export class View {
  appContainer;
  header = new Header();
  // main = new Main(mainPrams).getElement();
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
  }
}
