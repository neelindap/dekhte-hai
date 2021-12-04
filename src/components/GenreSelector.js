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
  const selected = useRolling(genres);

  return <RollingWord selectedValue={genres[selected]} />;
};

export default GenreSelector;
