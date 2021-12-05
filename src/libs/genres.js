import { GENRES } from "../constants/genres";

export const genres = () => {
  const localStorageGenre = JSON.parse(localStorage.getItem("genres"));
  if (localStorageGenre === null) {
    localStorage.setItem("genres", JSON.stringify(GENRES));
  }
  return localStorageGenre || GENRES;
};
