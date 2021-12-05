import { useEffect, useState } from "react";
import { randomNumber } from "../libs/randomNumberPicker";

export const useRolling = (elements, timeout = 1000) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const roll = () => {
    setSelectedIndex((prev) => (prev + 1) % elements);
  };

  const setRandomlySelectedIndex = () => {
    setSelectedIndex(randomNumber(elements));
  };

  useEffect(() => {
    const interval = setInterval(roll, 100);
    setTimeout(() => {
      setRandomlySelectedIndex();
      clearInterval(interval);
    }, timeout);
  }, []);

  return selectedIndex;
};
