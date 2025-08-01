import type { ParamsTypes } from "../../../types/types.ts";

export const headerParams: ParamsTypes = {
  tagName: "header",
  classList: "header",
  attr: {
    id: "header",
    "data-test": "test",
  },
  text: "test",
};

export const listButtonsParams: ParamsTypes = {
  tagName: "div",
  classList: "button",
  attr: {
    id: "button",
    "data-test": "test",
  },
};

export const searchInputParams: ParamsTypes = {
  tagName: "input",
  classList: "",
  attr: { name: "input" },
};

export const searchFormParams: ParamsTypes = {
  tagName: "form",
};

export const searchSubmitParams: ParamsTypes = {
  tagName: "button",
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
