import { useRolling } from "../hook/useRolling";
import RollingWord from "./RollingWord";

const PlatformSelector = () => {
  const platforms = ["Netflix", "Amazon Prime", "Disney+", "Hulu", "Apple TV"];
  const MS_TO_DISPLAY_PLATFORM = 3000;

  const selected = useRolling(platforms, MS_TO_DISPLAY_PLATFORM);

  return <RollingWord selectedValue={platforms[selected]} />;
};

export default PlatformSelector;
