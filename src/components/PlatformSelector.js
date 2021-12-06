import { useRolling } from "../hooks/useRolling";
import RollingWord from "./RollingWord";
import { platforms } from "../libs/platforms";

const PlatformSelector = () => {
  const streamingPlatforms = platforms().filter((platform) => {
    return platform.selected === true;
  });
  const MS_TO_DISPLAY_PLATFORM = 3000;
  const selectedIndex = useRolling(
    streamingPlatforms.length,
    MS_TO_DISPLAY_PLATFORM
  );
  const platform = streamingPlatforms[selectedIndex];

  return <RollingWord selectedValue={platform.name} color={platform.color} />;
};

export default PlatformSelector;
