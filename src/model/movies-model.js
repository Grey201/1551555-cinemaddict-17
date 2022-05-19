import { generateMove, generateComment } from '../mock/movies.js';
export default class MoviesModel {
  #movies = Array.from({ length: 23 }, generateMove);
  #comments = Array.from({ length: 5 }, generateComment);

  get movies() {
    return this.#movies;
  }

  get comments() {
    return this.#comments;
  }
}
