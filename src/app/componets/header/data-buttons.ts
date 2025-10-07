import style from "./buttons.module.css";
import menuStyle from "./menuStyle.module.css";

export const dataButtons = [
  {
    tagName: "button",
    classList: [style.button],
    attr: {
      "data-btn": "комедия",
    },
  },
  {
    tagName: "button",
    classList: [style.button],
    attr: {
      "data-btn": "ужасы",
    },
  },
  {
    tagName: "button",
    classList: [style.button],
    attr: {
      "data-btn": "боевик",
    },
  },
  {
    tagName: "button",
    classList: [style.button],
    attr: {
      "data-btn": "триллеры",
    },
  },
  {
    tagName: "button",
    classList: [style.button],
    attr: {
      "data-btn": "фантастика",
    },
  },
];

export const menuBtnParams = {
  tagName: "button",
  classList: [menuStyle.burger],
  attr: {
    id: "burger",
  },
};

export const burgerItems = {
  tagName: "span",
  classList: [menuStyle.line],
};
