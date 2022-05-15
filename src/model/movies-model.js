import { generateMove, generateComment } from '../mock/movies.js';
export default class MoviesModel {
  movies = Array.from({ length: 5}, generateMove);
  comments = Array.from({ length: 5}, generateComment);

  getMovies = () => this.movies;
  getComments = () => this.comments;
}
