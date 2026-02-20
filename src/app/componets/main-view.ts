import type { Data } from "../../types/types";
import { Creator } from "../../utilities/creator";
import {
  imgListItemParams,
  imgListParams,
  rateContainerParams,
  ageRateParams,
  rateWrapperParams,
  imdbRateParams,
  starContainerParams,
  infoContainerParams,
  topContainerParams,
  nameContainerParams,
  lengthParams,
  createdYearParams,
  tagsContainerParams,
  tagParams,
  imgParams,
} from "./cards/cards-params";

import style from "./cards/cards.module.css";
import mainStyle from "./cards/cards.module.css";
import { Preview } from "./preview/preview";

const mainParams = {
  tagName: "main",
  classList: [],
  attr: {
    id: "main",
    "data-test": "test",
  },
};

const containerParams = {
  tagName: "div",
  classList: [mainStyle.container],
  attr: {
    id: "container",
  },
};

export class Main {
  container = new Creator(containerParams).getElement();
  element = new Creator(mainParams);
  imgList = new Creator(imgListParams).getElement();
  preview;
  constructor() {
    this.element.getElement()?.append(this.container as HTMLDivElement);
    this.container?.append(this.imgList as HTMLUListElement);
    this.preview = new Preview();
  }
  cardsList(data: Data) {
    console.log(data);

    const template = new DocumentFragment();
    data.docs.forEach((element) => {
      imgListItemParams.attr["data-id"] = element.id;
      const item = new Creator(imgListItemParams).getElement() as HTMLLIElement;
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
      const length = new Creator(lengthParams).getElement() as HTMLElement;
      const createdYear = new Creator(
        createdYearParams,
      ).getElement() as HTMLElement;
      const tagsContainer = new Creator(
        tagsContainerParams,
      ).getElement() as HTMLElement;
      let image = null;

      if (element.poster && element.poster.previewUrl) {
        imgParams.classList.length = 0;
        imgParams.classList.push(style.img);

        image = new Creator(imgParams).getElement() as HTMLImageElement;
        image.src = element.poster.previewUrl;
      } else {
        imgParams.classList.push(style.imgSmall);
        image = new Creator(imgParams).getElement() as HTMLImageElement;
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

      if (!element.name && !element.alternativeName) {
        nameContainer.innerText = "неизвестно";
      } else if (element.name) {
        nameContainer.innerText = element.name;
      } else if (element.alternativeName) {
        nameContainer.innerText = element.alternativeName;
      }

      if (element.movieLength) {
        const hours = Math.floor(element.movieLength / 60);
        const minutes = element.movieLength % 60;
        length.innerText = `длительность: ${hours}ч. ${minutes}мин.`;
      } else {
        length.innerText = `длительность: неизвестна`;
      }

      if (element.genres) {
        element.genres.forEach((element) => {
          tagParams.text = `#${element.name} `;
          const tags = new Creator(tagParams).getElement() as HTMLElement;
          tagsContainer.append(tags);
        });
      }

      if (element.year) {
        createdYear.innerText = `год: ${element.year}`;
      } else {
        createdYear.innerText = "год: ?";
      }

      item?.append(image, rateContainer, infoContainer);
      rateWrapper.append(imdbRate, starContainer);
      rateContainer.append(ageRate, rateWrapper);

      infoContainer.append(nameContainer, topContainer, tagsContainer);
      topContainer.append(length, createdYear);
      template.append(item);
    });
    this.imgList?.append(template);
  }

  previewCreator(data) {
    this.preview.setData(data);
    const previewElement = this.preview.getPreview() as HTMLElement;
    this.container?.append(previewElement);
  }

  clearRender() {
    if (this.imgList) {
      this.imgList.innerHTML = "";
    }
  }

  clearList() {
    if (this.imgList) {
      this.imgList.remove();
    }
  }
}
