import { useRolling } from "../hook/useRolling";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const NumberSelector = () => {
  const numbers = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
  ];

  const selected = useRolling(numbers);

  return (
    <TransitionGroup component="span">
      <CSSTransition
        classNames="ctr"
        timeout={{ enter: 100, exit: 100 }}
        unmountOnExit
      >
        <span>{numbers[selected]}</span>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default NumberSelector;
