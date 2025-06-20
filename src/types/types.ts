export interface AttrTypes {
  [key: string]: string;
}

export interface ParamsTypes {
  tagName: string;
  classList?: string;
  attr?: AttrTypes;
  text?: string;
}
