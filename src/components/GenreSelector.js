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
  const selectedIndex = useRolling(genres.length, MS_TO_DISPLAY_GENRE);

  return <RollingWord selectedValue={genres[selectedIndex]} />;
};

export default GenreSelector;
