import { generateMove, generateComment } from '../mock/movie.js';
import Observable from '../framework/observable.js';

export default class MoviesModel extends Observable{
  #movies = Array.from({ length: 23 }, generateMove);
  #comments = Array.from({ length: 5 }, generateComment);

  get movies() {
    return this.#movies;
  }

  get comments() {
    return this.#comments;
  }
}
