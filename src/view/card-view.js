import { createElement } from '../render.js';


const createFilmCardsTemplate = (movie) =>{
  const {filmInfo, userDetails} = movie;
  // сделать рефакторинг время видео 1:12
const favoriteActiveClassName=userDetails.favorite ? 'film-card__controls-item--active' : '';
const watchlistActiveClassName=userDetails.watchlist ? 'film-card__controls-item--active' : '';
const alreadyWatchedActiveClassName=userDetails.alreadyWatched ? 'film-card__controls-item--active' :'';
//  const isActiveClassName =(item)=>{
//   const active=userDetails.item ? 'film-card__controls-item--active' : '';
//  return active;
//  }
// console.log(isActiveClassName(favorite));

  return (`<article class="film-card">
        <a class="film-card__link">
          <h3 class="film-card__title">${filmInfo.title}</h3>
          <p class="film-card__rating">${filmInfo.rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">1929</span>
            <span class="film-card__duration">1h 55m</span>
            <span class="film-card__genre">Musical</span>
          </p>
          <img src="./${filmInfo.poster}" alt="" class="film-card__poster">
          <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
          <span class="film-card__comments">5 comments</span>
        </a>
        <div class="film-card__controls">
          <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${watchlistActiveClassName}" type="button">Add to watchlist</button>
          <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${ alreadyWatchedActiveClassName}" type="button">Mark as watched</button>
          <button class="film-card__controls-item film-card__controls-item--favorite ${favoriteActiveClassName}"  type="button">Mark as favorite</button>
        </div>
      </article>
    `);
};
export default class FilmCardView {
  constructor (movie) {
    this.movie=movie;
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
