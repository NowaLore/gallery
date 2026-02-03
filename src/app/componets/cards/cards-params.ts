import style from "./cards.module.css";

const imgListParams = {
  tagName: "ul",
  classList: [style.imgList],
  attr: {},
};

const imgListItemParams = {
  tagName: "li",
  classList: [style.imgListItem],
  attr: {
    "data-id": "",
  },
};

const rateContainerParams = {
  tagName: "div",
  classList: [style.rateContainer],
  attr: {},
};

const ageRateParams = {
  tagName: "div",
  classList: [style.ageRate],
  attr: {},
};

const rateWrapperParams = {
  tagName: "div",
  classList: [style.rateWrapper],
  attr: {},
};

const imdbRateParams = {
  tagName: "div",
  classList: [style.imdbRate],
  attr: {},
};

const starContainerParams = {
  tagName: "img",
  classList: [style.starContainer],
  attr: { src: "" },
};

const infoContainerParams = {
  tagName: "div",
  classList: [style.infoContainer],
  attr: {},
};

const topContainerParams = {
  tagName: "div",
  classList: [style.topContainer],
  attr: {},
};

const nameContainerParams = {
  tagName: "div",
  classList: [style.nameContainer],
  attr: {},
};

const lengthParams = {
  tagName: "div",
  classList: [style.length],
  attr: {},
};

const createdYearParams = {
  tagName: "div",
  classList: [style.createdYear],
  attr: {},
};

const tagsContainerParams = {
  tagName: "div",
  classList: [style.tagsContainer],
  attr: {},
};

const tagParams = {
  tagName: "span",
  classList: [style.tag],
  attr: {},
  text: "",
};

const imgParams = {
  tagName: "img",
  classList: [style.img],
  attr: {},
};
export {
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
};
