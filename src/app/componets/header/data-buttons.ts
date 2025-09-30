import style from "./buttons.module.css";
import menuStyle from "./menuStyle.module.css";

export const dataButtons = [
  {
    tagName: "button",
    classList: [style.button],
    attr: {
      "data-btn": "hip-hop",
    },
  },
  {
    tagName: "button",
    classList: [style.button],
    attr: {
      "data-btn": "rap",
    },
  },
  {
    tagName: "button",
    classList: [style.button],
    attr: {
      "data-btn": "rock-music",
    },
  },
  {
    tagName: "button",
    classList: [style.button],
    attr: {
      "data-btn": "jazz",
    },
  },
  {
    tagName: "button",
    classList: [style.button],
    attr: {
      "data-btn": "classic music",
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

export const wrapperImg = [
  {
    tagName: "span",
    classList: [style.wrapperImage, style.hipHopIcon],
  },
  {
    tagName: "span",
    classList: [style.wrapperImage, style.rapIcon],
  },
  {
    tagName: "span",
    classList: [style.wrapperImage, style.rockIcon],
  },
  {
    tagName: "span",
    classList: [style.wrapperImage, style.jazzIcon],
  },
  {
    tagName: "span",
    classList: [style.wrapperImage, style.classicIcon],
  },
];

export const wrapperText = [
  {
    tagName: "span",
    classList: [style.wrapperText],
    text: "hip-hop",
  },
  {
    tagName: "span",
    classList: [style.wrapperText],
    text: "rap",
  },
  {
    tagName: "span",
    classList: [style.wrapperText],
    text: "rock",
  },
  {
    tagName: "span",
    classList: [style.wrapperText],
    text: "jazz",
  },
  {
    tagName: "span",
    classList: [style.wrapperText],
    text: "classic",
  },
];
