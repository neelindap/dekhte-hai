import { useRolling } from "../hook/useRolling";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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

  return (
    <TransitionGroup component="span">
      <CSSTransition
        classNames="ctr"
        timeout={{ enter: 100, exit: 100 }}
        unmountOnExit
      >
        <span>{genres[selected]}</span>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default GenreSelector;
