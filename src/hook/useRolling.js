import { useEffect, useState } from "react";
import { randomNumber } from "../libs/randomNumberPicker";

export const useRolling = (values) => {
  const [selected, setSelected] = useState(0);

  const roll = () => {
    setSelected((prev) => (prev + 1) % values.length);
  };

  const selectedNumber = () => {
    setSelected(randomNumber(values.length));
  };

  useEffect(() => {
    const interval = setInterval(roll, 100);
    setTimeout(() => {
      selectedNumber();
      clearInterval(interval);
    }, 2000);
  }, []);

  return selected;
};
