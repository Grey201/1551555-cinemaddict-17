import { generateMove, generateComment } from '../mock/movies.js';

const MOVIES_AMOUNT_DISPLAYED = 5;
const COMMENTS_AMOUNT = 5;
export default class MoviesModel {
  movies = Array.from({ length: MOVIES_AMOUNT_DISPLAYED }, generateMove);
  comments = Array.from({ length: COMMENTS_AMOUNT }, generateComment);

  getMovies = () => this.movies;
  getComments = () => this.comments;
}
