import { useRolling } from "../hooks/useRolling";
import RollingWord from "./RollingWord";

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
  const MS_TO_DISPLAY_NUMBER = 1000;
  const selectedIndex = useRolling(numbers.length, MS_TO_DISPLAY_NUMBER);

  return <RollingWord selectedValue={numbers[selectedIndex]} />;
};

export default NumberSelector;
