import {
  render,
  RenderPosition,
  remove,
  replace,
} from '../framework/render.js';
import PopupView from '../view/popup-view.js';
import FilmCardView from '../view/film-card-view.js';

const Mode = {
  CARD:'CARD',
  POPUP:'POPUP',
};

export default class MoviePresenter {
  #movieListContainer = null;
  #movieComponent = null;
  #popup = null;
  #movie = null;
  #comment = [];
  #changeData = null;
  #mode = Mode.CARD;

  constructor(movieListContainer, changeData) {
    this.#movieListContainer = movieListContainer;
    this.#changeData = changeData;
  }

  init = (movie, comment) => {
    this.#movie = movie;

    const prevMovieComponent = this.#movieComponent;
    const prevPopup = this.#popup;

    this.#movieComponent = new FilmCardView(movie);
    this.#popup = new PopupView(movie, comment);
    this.#movieComponent.setShowClickHandler(this.#popupOpen);
    this.#movieComponent.setFavoriteClickHandler(this.#handleFavoriteClick);
    this.#movieComponent.setWatchlistClickHandler(this.#handleWatchlistClick);
    this.#movieComponent.setWatchedClickHandler(this.#handleWatchedClick);
    this.#popup.setFavoriteClickHandler(this.#handleFavoriteClick);
    this.#popup.setWatchlistClickHandler(this.#handleWatchlistClick);
    this.#popup.setWatchedClickHandler(this.#handleWatchedClick);
    this.#popup.setCloseClickHandler(this.#popupClose);

    if (prevMovieComponent === null || prevPopup === null) {
      render(this.#movieComponent, this.#movieListContainer);
      return;
    }

    if (this.#mode === Mode.CARD) {
      replace(this.#movieComponent, prevMovieComponent);
    }

    if (this.#mode === Mode.POPUP ||document.contains(prevPopup.element)) {
      replace(this.#popup, prevPopup);
    }

    remove(prevMovieComponent);
    remove(prevPopup);
  };

  destroy = () => {
    remove(this.#movieComponent);
    remove(this.#popup);
  };

  #handleFavoriteClick = () => {
    this.#changeData({
      ...this.#movie,
      userDetails: {
        ...this.#movie.userDetails,
        favorite: !this.#movie.userDetails.favorite,
      },
    });
  };

  #handleWatchlistClick = () => {
    this.#changeData({
      ...this.#movie,
      userDetails: {
        ...this.#movie.userDetails,
        watchlist: !this.#movie.userDetails.watchlist,
      },
    });
  };

  #handleWatchedClick = () => {
    this.#changeData({
      ...this.#movie,
      userDetails: {
        ...this.#movie.userDetails,
        alreadyWatched: !this.#movie.userDetails.alreadyWatched,
      },
    });
  };

  #popupOpen = () => {
    const siteFooterElement = document.querySelector('.footer');
    if (document.querySelector('.film-details')) {
      this.#popupClose();
    }
    render(this.#popup, siteFooterElement, RenderPosition.AFTEREND);
    document.addEventListener('keydown', this.#onEscKeyDown);
  };

  #popupClose = () => {
    remove(this.#popup);
    this.#popup.reset(this.#movie);
    document.removeEventListener('keydown', this.#onEscKeyDown);
  };

  #onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      remove(this.#popup);
      this.#popup.reset(this.#movie);
      document.removeEventListener('keydown', this.#onEscKeyDown);
    }
  };
}
