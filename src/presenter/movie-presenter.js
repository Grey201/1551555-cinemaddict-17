import { render, RenderPosition } from '../framework/render.js';
import PopupView from '../view/popup-view.js';
import FilmCardView from '../view/film-card-view.js';
export default class MoviePresenter {
  #movieListContainer = null;
  #movieComponent = null;
  #popup = null;
  #movie = null;
  #comment = [];

  constructor(movieListContainer) {
    this.#movieListContainer = movieListContainer;
  }

  init = (movie, comment) => {
    this.#movie = movie;
    this.#movieComponent = new FilmCardView(movie);
    this.#popup = new PopupView(movie, comment);
    this.#movieComponent.setShowClickHandler(this.#popupOpen);
    this.#popup.setCloseClickHandler(this.#popupClose);
    render(this.#movieComponent, this.#movieListContainer);
  };

  #popupOpen = () => {
    const siteFooterElement = document.querySelector('.footer');
    render(this.#popup, siteFooterElement, RenderPosition.AFTEREND);
    document.addEventListener('keydown', this.#onEscKeyDown);
  };

  #popupClose = () => {
    document.querySelector('.film-details').remove();
    document.removeEventListener('keydown', this.#onEscKeyDown);
  };

  #onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      document.querySelector('.film-details').remove();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    }
  };
}
