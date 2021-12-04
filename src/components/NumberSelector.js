import { useRolling } from "../hook/useRolling";
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
  const selected = useRolling(numbers);

  return <RollingWord selectedValue={numbers[selected]} />;
};

export default NumberSelector;
