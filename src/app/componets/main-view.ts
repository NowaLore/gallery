import type { ParamsTypes } from "../../types/types";
import { Creator } from "../../utilities/creator";
const mainParams: ParamsTypes = {
  tagName: "main",
  classList: "main",
  attr: {
    id: "main",
    "data-test": "test",
  },
  text: "test",
};

const imgListParams: ParamsTypes = {
  tagName: "ul",
  classList: "img-list",
  attr: {},
};

const imgListItemParams: ParamsTypes = {
  tagName: "li",
  classList: "item",
  attr: {},
};

const imgParams: ParamsTypes = {
  tagName: "img",
  classList: "img",
  attr: {},
};

export class Main {
  element = new Creator(mainParams);
  imgList = new Creator(imgListParams).getElement();
  constructor() {
    this.element.getElement()?.append(this.imgList as HTMLUListElement);
  }
  imagesList(data) {
    const template = new DocumentFragment();
    for (let i = 0; i < data.results.length; i++) {
      console.log(data.results[i].urls.regular);
      const item = new Creator(imgListItemParams).getElement();
      const image: HTMLImageElement = new Creator(
        imgParams,
      ).getElement() as HTMLImageElement;
      image.src = data.results[i].urls.regular;
      item?.append(image);
      template.append(item);
    }
    this.imgList?.append(template);
  }

  clearRender() {
    if (this.imgList) {
      this.imgList.innerHTML = "";
    }
  }
}
