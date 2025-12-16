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

const rateContainerParams = {
  tagName: "div",
  classList: [],
  attr: {},
};

const ageRateParams = {
  tagName: "div",
  classList: [],
  attr: {},
};

const rateWrapperParams = {
  tagName: "div",
  classList: [],
  attr: {},
};

const imdbRateParams = {
  tagName: "div",
  classList: [],
  attr: {},
};

const starContainerParams = {
  tagName: "img",
  classList: ["object-cover", "w-2", "h-2"],
  attr: { src: "" },
};

const infoContainerParams = {
  tagName: "div",
  classList: [],
  attr: {},
};

const topContainerParams = {
  tagName: "div",
  classList: [],
  attr: {},
};

const nameContainerParams = {
  tagName: "div",
  classList: [],
  attr: {},
};

const lenghtParams = {
  tagName: "div",
  classList: [],
  attr: {},
};

const createdYearParams = {
  tagName: "div",
  classList: [],
  attr: {},
};

const tagsContainerParams = {
  tagName: "div",
  classList: [],
  attr: {},
};

const tagParams = {
  tagName: "span",
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
  cardsList(data: Data) {
    console.log(data);

    const template = new DocumentFragment();
    data.docs.forEach((element) => {
      const item = new Creator(imgListItemParams).getElement() as HTMLLIElement;
      const image: HTMLImageElement = new Creator(
        imgParams,
      ).getElement() as HTMLImageElement;
      const rateContainer = new Creator(
        rateContainerParams,
      ).getElement() as HTMLElement;
      const ageRate = new Creator(ageRateParams).getElement() as HTMLElement;
      const imdbRate = new Creator(imdbRateParams).getElement() as HTMLElement;
      const rateWrapper = new Creator(
        rateWrapperParams,
      ).getElement() as HTMLElement;
      const infoContainer = new Creator(
        infoContainerParams,
      ).getElement() as HTMLElement;
      const topContainer = new Creator(
        topContainerParams,
      ).getElement() as HTMLElement;
      const nameContainer = new Creator(
        nameContainerParams,
      ).getElement() as HTMLElement;
      const lenght = new Creator(lenghtParams).getElement() as HTMLElement;
      const createdYear = new Creator(
        createdYearParams,
      ).getElement() as HTMLElement;
      const tagsContainer = new Creator(
        tagsContainerParams,
      ).getElement() as HTMLElement;
      const tags = new Creator(tagParams).getElement() as HTMLElement;

      if (element.poster && element.poster.previewUrl) {
        image.src = element.poster.previewUrl;
      } else {
        image.src = "/public/EyeSlashed.svg";
      }

      if (element.ageRating) {
        ageRate.innerText = `возрастной рейтинг: ${element.ageRating}`;
      } else {
        ageRate.innerText = "возрастной рейтинг: ?";
      }

      if (element.rating && element.rating.imdb) {
        imdbRate.innerText = `рейтинг: ${element.rating.imdb}`;
        starContainerParams.attr.src = "/StarFilled.svg";
      } else {
        imdbRate.innerText = "рейтинг: -";
        starContainerParams.attr.src = "/StarOutlined.svg";
      }
      const starContainer = new Creator(
        starContainerParams,
      ).getElement() as HTMLElement;

      item?.append(image, rateContainer, infoContainer);
      rateWrapper.append(imdbRate, starContainer);
      rateContainer.append(ageRate, rateWrapper);

      infoContainer.append(topContainer, createdYear, tagsContainer);
      topContainer.append(nameContainer, lenght);
      tagsContainer.append(tags);
      template.append(item);
    });
    this.imgList?.append(template);
  }

  clearRender() {
    if (this.imgList) {
      this.imgList.innerHTML = "";
    }
  }
}
