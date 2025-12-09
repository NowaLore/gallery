import type { Data, ParamsTypes } from "../../types/types";
import { Creator } from "../../utilities/creator";
const mainParams: ParamsTypes = {
  tagName: "main",
  classList: [],
  attr: {
    id: "main",
    "data-test": "test",
  },
};

const imgListParams: ParamsTypes = {
  tagName: "ul",
  classList: [],
  attr: {},
};

const imgListItemParams: ParamsTypes = {
  tagName: "li",
  classList: [],
  attr: {},
};

const imgParams: ParamsTypes = {
  tagName: "img",
  classList: [],
  attr: {},
};

export class Main {
  element = new Creator(mainParams);
  imgList = new Creator(imgListParams).getElement();
  constructor() {
    this.element.getElement()?.append(this.imgList as HTMLUListElement);
  }
  imagesList(data: Data) {
    console.log(data);

    const template = new DocumentFragment();
    // Переписать на for each
    for (let i = 0; i < data.docs.length; i++) {
      const item = new Creator(imgListItemParams).getElement() as HTMLLIElement;
      const image: HTMLImageElement = new Creator(
        imgParams,
      ).getElement() as HTMLImageElement;
      if (data.docs[i].poster && data.docs[i].poster.previewUrl) {
        image.src = data.docs[i].poster.previewUrl;
      } else {
        image.src = "/public/EyeSlashed.svg";
      }
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
