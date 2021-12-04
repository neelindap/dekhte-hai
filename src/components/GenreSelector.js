import { randomNumber } from '../libs/randomNumberPicker';

const GenreSelector = () => { 
  const genres = ['Horror', 'Action', 'Comedy', 'Romance', 'Drama', 'Sci-fi', 'Thriller', 'Documentary'];
  return genres[randomNumber(genres.length)]; 
 };

export default GenreSelector;
