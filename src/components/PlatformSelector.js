import { useRolling } from "../hook/useRolling";
import RollingWord from "./RollingWord";

const PlatformSelector = () => {
  const platforms = ["Netflix", "Amazon Prime", "Disney+", "Hulu", "Apple TV"];
  const selected = useRolling(platforms);

  return <RollingWord selectedValue={platforms[selected]} />;
};

export default PlatformSelector;
