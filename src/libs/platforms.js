import { PLATFORMS } from "../constants/platforms";

export const platforms = () => {
  const localStorageGenre = JSON.parse(localStorage.getItem("platforms"));
  if (localStorageGenre === null) {
    localStorage.setItem("platforms", JSON.stringify(PLATFORMS));
  }
  return localStorageGenre || PLATFORMS;
};
