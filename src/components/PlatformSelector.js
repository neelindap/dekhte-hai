import { randomNumber } from '../libs/randomNumberPicker';

const PlatformSelector = () => { 
  const platforms = ['Netflix', 'Amazon Prime', 'Disney+', 'Hulu', 'Apple TV'];
  return platforms[randomNumber(platforms.length)]; 
}

export default PlatformSelector;
