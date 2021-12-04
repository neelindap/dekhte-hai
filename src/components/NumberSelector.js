import { useEffect, useState } from "react";
import { randomNumber } from "../libs/randomNumberPicker";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const NumberSelector = () => {
  const [selected, setSelected] = useState(0);
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

  const roll = () => {
    setSelected((prev) => (prev + 1) % numbers.length);
  };

  const selectedNumber = () => {
    setSelected(randomNumber(numbers.length));
  };

  useEffect(() => {
    const interval = setInterval(roll, 100);
    setTimeout(() => {
      selectedNumber();
      clearInterval(interval);
    }, 2000);
  }, []);

  return (
    <TransitionGroup component="span">
      <CSSTransition
        classNames="ctr"
        timeout={{ enter: 300, exit: 300 }}
        unmountOnExit
      >
        <span>{numbers[selected]}</span>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default NumberSelector;
