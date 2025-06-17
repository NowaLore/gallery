interface AttrTypes {
  [key: string]: string;
}

interface ParamsTypes {
  tagName: string;
  classList?: string;
  attr?: AttrTypes;
  text?: string;
}

export const headerParams: ParamsTypes = {
  tagName: "header",
  classList: "header",
  attr: {
    id: "header",
    "data-test": "test",
  },
  text: "test",
};

export class Creator {
  element!: HTMLElement;
  params: ParamsTypes;
  constructor(objectParams: ParamsTypes) {
    this.params = objectParams;
    this.element = this.tagCreator(this.params.tagName);
    console.log(this.element);
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
