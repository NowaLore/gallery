// import type { ParamsTypes } from "../../types/types";
import { Header } from "../componets/header/header";

// const imgListParams: ParamsTypes = {
//   tagName: "ul",
//   classList: "img-list",
//   attr: {

//   },
// }

// const imgListItemParams: ParamsTypes = {
//   tagName: "li",
//   classList: "item",
//   attr: {

//   },
// }

// const imgParams: ParamsTypes = {
//   tagName: "img",
//   classList: "img",
//   attr: {

//   },
// }

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

  imagesList(data) {
    for (let i = 0; i < data.results.length; i++) {
      console.log(data.results[i].urls.regular);
    }
  }
}
