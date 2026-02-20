import { Creator } from "../../../utilities/creator";
import { previewParams } from "./preview-params";

export class Preview {
  preview;
  data;
  constructor() {
    this.preview = new Creator(previewParams).getElement();
    this.data = null;
  }

  getPreview() {
    return this.preview;
  }

  headerCreator() {}

  setData(data) {
    this.data = data;
    console.log(this.data);
  }
}
