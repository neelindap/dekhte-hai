import { useRolling } from "../hook/useRolling";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PlatformSelector = () => {
  const platforms = ["Netflix", "Amazon Prime", "Disney+", "Hulu", "Apple TV"];
  const selected = useRolling(platforms);

  return (
    <TransitionGroup component="span">
      <CSSTransition
        classNames="ctr"
        timeout={{ enter: 100, exit: 100 }}
        unmountOnExit
      >
        <span>{platforms[selected]}</span>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PlatformSelector;
