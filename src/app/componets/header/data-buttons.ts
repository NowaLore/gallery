import style from "./buttons.module.css";
import menuStyle from "./menuStyle.module.css";

export const btnParams = {
  tagName: "button",
  classList: [style.button],
  attr: {
    "data-btn": "",
  },
  text: "",
};

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
