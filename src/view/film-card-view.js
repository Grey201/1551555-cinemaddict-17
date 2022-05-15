import { createElement } from '../render.js';
import { humanizeMovieYear } from '../utils.js';

const createFilmCardsTemplate = (movie) => {
  const { filmInfo, userDetails } = movie;
  const getControlClassName = (option) =>
    option ? 'film-card__controls-item--active' : '';
  const year =
    filmInfo.release.date !== null
      ? humanizeMovieYear(filmInfo.release.date)
      : '';

  return (`<article class="film-card">
        <a class="film-card__link">
          <h3 class="film-card__title">${filmInfo.title}</h3>
          <p class="film-card__rating">${filmInfo.totalRating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${year}</span>
            <span class="film-card__duration">${filmInfo.runtime}</span>
            <span class="film-card__genre">${filmInfo.genre}</span>
          </p>
          <img src="./${filmInfo.poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${filmInfo.description}</p>
          <span class="film-card__comments">5 comments</span>
        </a>
        <div class="film-card__controls">
          <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${getControlClassName(
      userDetails.watchlist
    )}" type="button">Add to watchlist</button>
          <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${getControlClassName(
      userDetails.alreadyWatched
    )}" type="button">Mark as watched</button>
          <button class="film-card__controls-item film-card__controls-item--favorite ${getControlClassName(
      userDetails.favorite
    )}"  type="button">Mark as favorite</button>
        </div>
      </article>
    `);
};
export default class FilmCardView {
  constructor(movie) {
    this.movie = movie;
  }

  getTemplate() {
    return createFilmCardsTemplate(this.movie);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
