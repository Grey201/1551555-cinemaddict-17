import SortView from '../view/sort-view.js';
import FilmCardView from '../view/film-card-view.js';
import FilmsContainerView from '../view/films-container-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmsListExtraTopView from '../view/films-list-extra-top-view.js';
import FilmsListExtraMostCommentedView from '../view/films-list-extra-most-commented-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import PopupView from '../view/popup-view.js';
import { render, RenderPosition} from '../render.js';

const EXTRA_CARDS_COUNT = 2;
export default class BoardPresenter {
  sortComponent = new SortView();
  filmsContainer = new FilmsContainerView();
  filmsList = new FilmsListView();
  filmsListContainer = new FilmsListContainerView();
  showMoreButton = new ShowMoreButtonView();
  filmsListContainerTop = new FilmsListContainerView();
  containerListExtraTop = new FilmsListExtraTopView();
  containerListExtraMostCommented = new FilmsListExtraMostCommentedView();
  filmsListContainerMostCommented = new FilmsListContainerView();

  init = (boardContainer, siteFooterElement, moviesModel) => {
    this.boardContainer = boardContainer;
    this.moviesModel = moviesModel;
    this.movies = [...this.moviesModel.getMovies()];
    this.comments = [...this.moviesModel.getComments()];
    render(this.sortComponent, this.boardContainer);
    render(this.filmsContainer, this.boardContainer);
    render(this.filmsList, this.filmsContainer.getElement());
    render(this.filmsListContainer, this.filmsList.getElement());
    this.movies.forEach((movie)=>render(new FilmCardView(movie),this.filmsListContainer.getElement()));
    render(this.showMoreButton, this.filmsList.getElement());
    render(this.containerListExtraTop, this.filmsContainer.getElement());
    render(
      this.filmsListContainerTop,
      this.containerListExtraTop.getElement(),
      RenderPosition.BEFOREEND
    );
    for (let i = 0; i < EXTRA_CARDS_COUNT; i++) {
      render(
        new FilmCardView(this.movies[i]),
        this.filmsListContainerTop.getElement()
      );
    }

    render(
      this.containerListExtraMostCommented,
      this.filmsContainer.getElement()
    );
    render(
      this.filmsListContainerMostCommented,
      this.containerListExtraMostCommented.getElement(),
      RenderPosition.BEFOREEND
    );

    for (let i = 0; i < EXTRA_CARDS_COUNT; i++) {
      render(
        new FilmCardView(this.movies[i]),
        this.filmsListContainerMostCommented.getElement()
      );
    }
    render(
      new PopupView(this.movies[0], this.comments),
      siteFooterElement,
      RenderPosition.AFTEREND
    );
  };
}
