import { Creator } from "../../../utilities/creator";
import {
  filmNameParams,
  headerParams,
  heroContainerParams,
  infoContainerParams,
  nameWrapperParams,
  posterImgParams,
  posterWrapperParams,
  previewParams,
  typeParams,
  yearParams,
  timeParams,
  previewTagsParams,
  tagsItemParams,
  rateConteinerParams,
  previewImdbParams,
  previewAgeParams,
} from "./preview-params";

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

  builder() {
    const header = this.headerCreator();
    this.preview?.append(header);
  }

  headerCreator() {
    //Создать на основе this.data хедер
    const headerElement = new Creator(headerParams).getElement() as HTMLElement;
    const posterWrapper = new Creator(
      posterWrapperParams,
    ).getElement() as HTMLElement;
    const posterImg = new Creator(posterImgParams).getElement() as HTMLElement;
    const heroContainer = new Creator(
      heroContainerParams,
    ).getElement() as HTMLElement;
    const nameWrapper = new Creator(
      nameWrapperParams,
    ).getElement() as HTMLElement;
    const filmName = new Creator(filmNameParams).getElement() as HTMLElement;
    const infoContainer = new Creator(
      infoContainerParams,
    ).getElement() as HTMLElement;
    const type = new Creator(typeParams).getElement() as HTMLElement;
    const year = new Creator(yearParams).getElement() as HTMLElement;
    const time = new Creator(timeParams).getElement() as HTMLElement;
    const previewTags = new Creator(
      previewTagsParams,
    ).getElement() as HTMLElement;
    const tagsItem = new Creator(tagsItemParams).getElement() as HTMLElement;
    const rateContainer = new Creator(
      rateConteinerParams,
    ).getElement() as HTMLElement;
    const previewImdb = new Creator(
      previewImdbParams,
    ).getElement() as HTMLElement;
    const previewAge = new Creator(
      previewAgeParams,
    ).getElement() as HTMLElement;
    headerElement.append(posterWrapper, heroContainer);
    posterWrapper.append(posterImg);
    heroContainer.append(
      nameWrapper,
      infoContainer,
      previewTags,
      rateContainer,
    );
    nameWrapper.append(filmName);
    infoContainer.append(type, year, time);
    previewTags.append(tagsItem);
    rateContainer.append(previewImdb, previewAge);
    return headerElement;
  }

  setData(data) {
    this.data = data;
    console.log(this.data);
  }
}
