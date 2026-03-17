import { Creator } from "../../../utilities/creator";
import {
  filmNameParams,
  headerParams,
  heroContainerParams,
  infoContainerParams,
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
  premiereWrapperParams,
  premiereIconParams,
  premiereParams,
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

  builder(data) {
    const header = this.headerCreator(data);
    this.preview?.append(header);
    console.log(header);
  }

  headerCreator(data) {
    console.log(data);

    const headerElement = new Creator(headerParams).getElement() as HTMLElement;

    const posterWrapper = new Creator(
      posterWrapperParams,
    ).getElement() as HTMLElement;

    posterImgParams.attr.src = data.poster.previewUrl;
    const posterImg = new Creator(
      posterImgParams,
    ).getElement() as HTMLImageElement;

    const heroContainer = new Creator(
      heroContainerParams,
    ).getElement() as HTMLElement;

    if (data.name) {
      filmNameParams.text = data.name;
    }

    const filmName = new Creator(filmNameParams).getElement() as HTMLElement;

    const infoContainer = new Creator(
      infoContainerParams,
    ).getElement() as HTMLElement;

    const premiereWrapper = new Creator(
      premiereWrapperParams,
    ).getElement() as HTMLElement;
    const premiereIcon = new Creator(
      premiereIconParams,
    ).getElement() as HTMLImageElement;

    let worldPremiere = null;
    if (data.premiere && data.premiere.world) {
      worldPremiere = new Date(data.premiere.world).toLocaleDateString(
        "ru-RU",
        { month: "long", day: "numeric", year: "numeric" },
      );
    } else {
      worldPremiere = "Неизвестно";
    }

    premiereParams.text = `Премьера в мире: ${worldPremiere}`;
    const premiere = new Creator(premiereParams).getElement() as HTMLElement;

    let ruPremiere = null;
    if (data.premiere && data.premiere.russia) {
      ruPremiere = new Date(data.premiere.russia).toLocaleDateString("ru-RU", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } else {
      ruPremiere = "Неизвестно";
    }

    premiereParams.text = `Премьера в России: ${ruPremiere}`;
    const premiereRu = new Creator(premiereParams).getElement() as HTMLElement;

    if (data.type) {
      typeParams.text = data.type;
    }

    const type = new Creator(typeParams).getElement() as HTMLElement;

    if (data.year) {
      yearParams.text = data.year;
    }

    const year = new Creator(yearParams).getElement() as HTMLElement;

    if (data.movieLength) {
      timeParams.text = data.movieLength;
    }

    const time = new Creator(timeParams).getElement() as HTMLElement;

    const previewTags = new Creator(
      previewTagsParams,
    ).getElement() as HTMLElement;

    data.genres.forEach((element) => {
      tagsItemParams.text = element.name;
      const tagsItem = new Creator(tagsItemParams).getElement() as HTMLElement;
      previewTags.append(tagsItem);
    });

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
      filmName,
      infoContainer,
      premiereWrapper,
      previewTags,
      rateContainer,
    );
    infoContainer.append(type, year, time);
    premiereWrapper.append(premiereIcon, premiere, premiereRu);
    rateContainer.append(previewImdb, previewAge);

    return headerElement;
  }
}
