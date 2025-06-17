import { Creator, headerParams } from "./utilities/creator.js";
console.log(headerParams);

const headerElement = new Creator(headerParams);
console.log(headerElement.getElement());
