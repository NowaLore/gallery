import type { ParamsTypes } from "../types/types.ts";

export class Creator {
  element: HTMLElement | undefined;
  params: ParamsTypes;
  constructor(objectParams: ParamsTypes) {
    this.params = objectParams;
    this.element = this.tagCreator(this.params.tagName);
    this.setClassList();
    this.setText();
    this.setAttr();
  }

  setClassList() {
    if (this.element && this.params.classList) {
      this.element.classList.add(this.params.classList);
    }
  }

  tagCreator(tagName: string) {
    if (tagName) {
      return document.createElement(tagName);
    }
  }

  setText() {
    if (this.element && this.params.text) {
      this.element.innerText = this.params.text;
    }
  }

  setAttr() {
    if (this.element && this.params.attr) {
      for (const key in this.params.attr) {
        this.element.setAttribute(key, this.params.attr[key]);
      }
    }
  }

  getElement() {
    if (this.element) {
      return this.element;
    }
  }
}
