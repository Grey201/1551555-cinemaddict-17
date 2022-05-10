import {generateMoves} from '../mock/movies.js';

export default class MoviesModel {
  movies = Array.from({length: 3}, generateMoves);

  getMovies = () => this.movies;
}

// console.log(MoviesModel);