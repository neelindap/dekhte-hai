import { useRolling } from "../hook/useRolling";
import RollingWord from "./RollingWord";

const GenreSelector = () => {
  const genres = [
    "Horror",
    "Action",
    "Comedy",
    "Romance",
    "Drama",
    "Sci-fi",
    "Thriller",
    "Documentary",
  ];
  const MS_TO_DISPLAY_GENRE = 2000;
  const selected = useRolling(genres, MS_TO_DISPLAY_GENRE);

  return <RollingWord selectedValue={genres[selected]} />;
};

export default GenreSelector;
