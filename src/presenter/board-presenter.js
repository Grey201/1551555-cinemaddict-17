import { render, remove, RenderPosition } from '../framework/render.js';
import SortView from '../view/sort-view.js';
import FilmCardView from '../view/film-card-view.js';
import FilmsContainerView from '../view/films-container-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmsListExtraTopView from '../view/films-list-extra-top-view.js';
import FilmsListExtraMostCommentedView from '../view/films-list-extra-most-commented-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import PopupView from '../view/popup-view.js';
import NoMovieView from '../view/no-movie-view.js';

const EXTRA_CARDS_COUNT = 2;
const MOVIE_COUNT_PER_STEP = 5;
export default class BoardPresenter {
  #boardContainer = null;
  #moviesModel = null;
  #movies = [];
  #comments = [];
  #sortComponent = new SortView();
  #filmsContainer = new FilmsContainerView();
  #filmsList = new FilmsListView();
  #filmsListContainer = new FilmsListContainerView();
  #showMoreButtonComponent = new ShowMoreButtonView();
  #filmsListContainerTop = new FilmsListContainerView();
  #containerListExtraTop = new FilmsListExtraTopView();
  #containerListExtraMostCommented = new FilmsListExtraMostCommentedView();
  #filmsListContainerMostCommented = new FilmsListContainerView();
  #noMovieComponent= new NoMovieView();
  #renderedMovieCount = MOVIE_COUNT_PER_STEP;

  constructor(boardContainer, moviesModel) {
    this.#boardContainer = boardContainer;
    this.#moviesModel = moviesModel;
  }

  init = () => {
    this.#movies = [...this.#moviesModel.movies];
    this.#comments = [...this.#moviesModel.comments];

    this.#renderBoard();
  };

  #onLoadMoreButtonClick = () => {
    this.#movies
      .slice(
        this.#renderedMovieCount,
        this.#renderedMovieCount + MOVIE_COUNT_PER_STEP
      )
      .forEach((movie) =>
        this.#renderMovie(movie, this.#filmsListContainer.element)
      );
    this.#renderedMovieCount += MOVIE_COUNT_PER_STEP;

    if (this.#renderedMovieCount >= this.#movies.length) {
      remove(this.#showMoreButtonComponent);
    }
  };

  #renderMovie = (movie, container) => {
    const movieComponent = new FilmCardView(movie);
    const popup = new PopupView(movie, this.#comments);

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        document.querySelector('.film-details').remove();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    movieComponent.setShowClickHandler(() => {
      const siteFooterElement = document.querySelector('.footer');
      render(popup, siteFooterElement, RenderPosition.AFTEREND);
      document.addEventListener('keydown', onEscKeyDown);
    });

    popup.setCloseClickHandler(() => {
      document.querySelector('.film-details').remove();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    render(movieComponent, container);
  };

  #renderMovies = (from, to, container) => {
    this.#movies
      .slice(from, to)
      .forEach((movie) => this.#renderMovie(movie, container));
  };

  #renderSort=()=>{
    render(this.#sortComponent, this.#boardContainer);
  };

  #renderNoMovie=()=>{
    render(this.#noMovieComponent, this.#filmsList.element);
  };

  #renderMovieList = () => {
    render(this.#filmsContainer, this.#boardContainer);
    render(this.#filmsList, this.#filmsContainer.element);
    render(this.#filmsListContainer, this.#filmsList.element);
    const minValue = Math.min(this.#movies.length, MOVIE_COUNT_PER_STEP);
    this.#renderMovies(0, minValue, this.#filmsListContainer.element);
    if (this.#movies.length > MOVIE_COUNT_PER_STEP) {
      this.#onLoadMoreButtonClick();
      this.#showMoreButtonComponent.setClickHandler(
        this.#onLoadMoreButtonClick
      );
    }
  };

  #renderTopList=()=>{
    render(this.#containerListExtraTop, this.#filmsContainer.element);
    render(this.#showMoreButtonComponent, this.#filmsList.element);
    render(
      this.#filmsListContainerTop,
      this.#containerListExtraTop.element,
      RenderPosition.BEFOREEND
    );
    this.#renderMovies(0,EXTRA_CARDS_COUNT, this.#filmsListContainerTop.element);
  };

  #renderExtraMostList=()=>{
    render(this.#containerListExtraMostCommented, this.#filmsContainer.element);
    render(
      this.#filmsListContainerMostCommented,
      this.#containerListExtraMostCommented.element,
      RenderPosition.BEFOREEND
    );
    this.#renderMovies(0, EXTRA_CARDS_COUNT,this.#filmsListContainerMostCommented.element);
  };

  #renderBoard = () => {
    if (this.#movies.every((movie) => movie.isArchive)) {
      render(this.#filmsContainer, this.#boardContainer);
      render(this.#filmsList, this.#filmsContainer.element);
      this.#renderNoMovie();
      return;
    }
    this.#renderSort();
    this.#renderMovieList();
    this.#renderTopList();
    this.#renderExtraMostList();
  };
}
