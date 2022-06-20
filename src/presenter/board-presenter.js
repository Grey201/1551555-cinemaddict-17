import { render, remove, RenderPosition } from '../framework/render.js';
import SortView from '../view/sort-view.js';
import MoviePresenter from './movie-presenter.js';
import FilmsContainerView from '../view/films-container-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmsListExtraTopView from '../view/films-list-extra-top-view.js';
import FilmsListExtraMostCommentedView from '../view/films-list-extra-most-commented-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import { updateItem } from '../utils/common.js';
import NoMovieView from '../view/no-movie-view.js';
import { sortDate, sortRating } from '../utils/movie.js';
import { SortType } from '../const.js';

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
  #noMovieComponent = new NoMovieView();
  #renderedMovieCount = MOVIE_COUNT_PER_STEP;
  #moviePresenterMain = new Map();
  #sourcedBoardMovies = [];
  #currentSortType = SortType.DEFAULT;

  constructor(boardContainer, moviesModel) {
    this.#boardContainer = boardContainer;
    this.#moviesModel = moviesModel;
  }

  get movies() {
    return this.#moviesModel.movies;
  }

  init = () => {
    this.#movies = [...this.#moviesModel.movies];
    this.#comments = [...this.#moviesModel.comments];
    // 1. В отличии от сортировки по любому параметру, исходный порядок можно сохранить только одним способом -
    // сохранив исходный массив:
    this.#sourcedBoardMovies = [...this.#moviesModel.movies];
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

  #handleMovieChange = (updatedMovie) => {
    this.#movies = updateItem(this.#movies, updatedMovie);
    this.#sourcedBoardMovies = updateItem(
      this.#sourcedBoardMovies,
      updatedMovie
    );
    this.#moviePresenterMain
      .get(updatedMovie.id)
      .init(updatedMovie, this.#comments);
  };

  #sortMovies = (sortType) => {
    // 2. Этот исходный массив задач необходим, потому что для сортировки мы будем мутировать
    // массив в свойстве movies
    this.#currentSortType = sortType;
    switch (this.#currentSortType) {
      case SortType.DATE:
        this.#movies.sort(sortDate);
        break;
      case SortType.RATING:
        this.#movies.sort(sortRating);
        break;
      default:
        // 3. А когда пользователь захочет "вернуть всё, как было",мы просто запишем в movies исходный массив
        this.#movies = [...this.#sourcedBoardMovies];
    }
  };

  #handleSortTypeChange = (sortType) => {
    // - Сортируем задачи
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#sortMovies(sortType);
    // - Очищаем список
    this.#clearMovieList();
    // - Рендерим список заново
    this.#renderMovieList();
    // this.#renderExtraMostList();
  };

  #renderMovie = (movie, container) => {
    const moviePresenter = new MoviePresenter(
      container,
      this.#handleMovieChange
    );
    moviePresenter.init(movie, this.#comments);
    this.#moviePresenterMain.set(movie.id, moviePresenter);
  };

  #renderMovies = (from, to, container) => {
    this.#movies
      .slice(from, to)
      .forEach((movie) => this.#renderMovie(movie, container));
  };

  #renderSort = () => {
    render(this.#sortComponent, this.#boardContainer);
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
  };

  #renderNoMovie = () => {
    render(this.#noMovieComponent, this.#filmsList.element);
  };

  #renderMovieList = () => {
    render(this.#filmsContainer, this.#boardContainer);
    render(
      this.#filmsList,
      this.#filmsContainer.element,
      RenderPosition.AFTERBEGIN
    );
    render(this.#filmsListContainer, this.#filmsList.element);
    render(this.#showMoreButtonComponent, this.#filmsList.element);
    const minValue = Math.min(this.#movies.length, MOVIE_COUNT_PER_STEP);
    if (this.#movies.length <= this.#renderedMovieCount) {
      this.#renderMovies(0, minValue, this.#filmsListContainer.element);
    }
    if (this.#movies.length > MOVIE_COUNT_PER_STEP) {
      this.#onLoadMoreButtonClick();
      this.#showMoreButtonComponent.setClickHandler(
        this.#onLoadMoreButtonClick
      );
    }
  };

  #clearMovieList = () => {
    this.#moviePresenterMain.forEach((presenter) => presenter.destroy());
    this.#moviePresenterMain.clear();
    this.#renderedMovieCount = MOVIE_COUNT_PER_STEP;
  };

  #renderTopList = () => {
    render(this.#containerListExtraTop, this.#filmsContainer.element);
    render(
      this.#filmsListContainerTop,
      this.#containerListExtraTop.element,
      RenderPosition.BEFOREEND
    );
    this.#renderMovies(
      0,
      EXTRA_CARDS_COUNT,
      this.#filmsListContainerTop.element
    );
  };

  #renderExtraMostList = () => {
    render(this.#containerListExtraMostCommented, this.#filmsContainer.element);
    render(
      this.#filmsListContainerMostCommented,
      this.#containerListExtraMostCommented.element,
      RenderPosition.BEFOREEND
    );
    this.#renderMovies(
      0,
      EXTRA_CARDS_COUNT,
      this.#filmsListContainerMostCommented.element
    );
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
