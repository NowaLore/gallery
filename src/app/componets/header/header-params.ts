import type { ParamsTypes } from "../../../types/types.ts";
import style from "./buttons.module.css";
import headerStyle from "./headerStyle.module.css";
import formStyle from "./formStyle.module.css";

export const headerParams: ParamsTypes = {
  tagName: "header",
  classList: [headerStyle.header],
};

export const listButtonsParams: ParamsTypes = {
  tagName: "div",
  classList: [style.listButtons],
};

export const searchInputParams: ParamsTypes = {
  tagName: "input",
  classList: [formStyle.search],
  attr: { name: "input" },
};

export const searchFormParams: ParamsTypes = {
  tagName: "form",
  classList: [formStyle.form],
};

export const searchSubmitParams: ParamsTypes = {
  tagName: "button",
  classList: [formStyle.submit],
};

export const shadowWrapperParams = {
  tagName: "div",
  classList: [style.shadowWrapper],
};

// export const footerParams: ParamsTypes = {
//   tagName: "footer",
//   classList: "footer",
//   attr: {
//     id: "footer",
//     "data-test": "test",
//   },
//   text: "test",
// }
