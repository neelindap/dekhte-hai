import { useRolling } from "../hooks/useRolling";
import RollingWord from "./RollingWord";
import { genres } from "../libs/genres";

const GenreSelector = () => {
  const movieGenres = genres().filter((genre) => {
    return genre.selected === true;
  });
  const MS_TO_DISPLAY_GENRE = 2000;
  const selectedIndex = useRolling(movieGenres.length, MS_TO_DISPLAY_GENRE);

  return <RollingWord selectedValue={movieGenres[selectedIndex].name} />;
};

export default GenreSelector;
