import { useRolling } from "../hook/useRolling";
import RollingWord from "./RollingWord";

const PlatformSelector = () => {
  const platforms = [
    { name: "Netflix", color: "#E50914" },
    { name: "Amazon Prime Video", color: "#00A8E1" },
    { name: "Disney+", color: "#113CCF" },
    { name: "Hulu", color: "#3dbb3d" },
    { name: "Apple TV+", color: "#000" },
    { name: "HBO Max", color: "#5822b4" },
  ];
  const MS_TO_DISPLAY_PLATFORM = 3000;

  const selectedIndex = useRolling(platforms, MS_TO_DISPLAY_PLATFORM);
  const platform = platforms[selectedIndex];

  return <RollingWord selectedValue={platform.name} color={platform.color} />;
};

export default PlatformSelector;
