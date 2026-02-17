import { Creator } from "../../../utilities/creator";
import { previewParams } from "./preview-params";

export class Preview {
  preview;
  constructor() {
    this.preview = new Creator(previewParams).getElement();
  }

  getPreview() {
    return this.preview;
  }
}
