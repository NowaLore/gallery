import { Header } from "../componets/header/header";
import { headerParams } from "../componets/header/header-params";

export class View {
  appContainer;
  header = new Header(headerParams);
  constructor() {
    this.appContainer = this.initRender();
    console.log(this.appContainer);
  }

  initRender() {
    return document.querySelector("#app");
  }
}
