import { render, RenderPosition, remove } from '../framework/render.js';
import PopupView from '../view/popup-view.js';
import FilmCardView from '../view/film-card-view.js';
export default class MoviePresenter {
  #movieListContainer = null;
  #movieComponent = null;
  #popup = null;
  #movie = null;
  #comment = [];
  #changeData = null;

  constructor(movieListContainer, changeData) {//
    this.#movieListContainer = movieListContainer;
    this.#changeData = changeData;//
  }

  init = (movie, comment) => {
    this.#movie = movie;

    const prevMovieComponent = this.#movieComponent;
    const prevPopup = this.#popup;
   
    this.#movieComponent = new FilmCardView(movie);
    
    this.#popup = new PopupView(movie, comment);
    this.#movieComponent.setShowClickHandler(this.#popupOpen);
    this.#popup.setFavoriteClickHandler(this.#handleFavoriteClick); //
    this.#popup.setCloseClickHandler(this.#popupClose);
    if (prevMovieComponent === null || prevPopup === null) {
      render(this.#movieComponent, this.#movieListContainer);
      return;
    }
    remove(prevMovieComponent);
    remove(prevPopup);
  };

  destroy = () => {
    remove(this.#movieComponent);
    remove(this.#popup);
  };

  #handleFavoriteClick = () => {
    this.#changeData({...this.#movie, userDetails: {
      watchlist: this.#movie.userDetails.watchlist,
      alreadyWatched: this.#movie.userDetails.alreadyWatched,
      watchingDate: this.#movie.userDetails.watchingDate,
      favorite: !this.#movie.userDetails.favorite}
    });
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
