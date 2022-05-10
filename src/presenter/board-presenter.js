import SortView from '../view/sort-view.js';
import FilmCardView from '../view/card-view.js';
import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmsListExtraTopView from '../view/films-list-extra-top-view.js';
import FilmsListExtraMostCommentedView from '../view/films-list-extra-most-commented-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';

import { render } from '../render.js';

const CARDS_ON_START = 5;
const EXTRA_CARDS_COUNT = 2;

export default class BoardPresenter {
  boardComponent = new SortView();
  filmsContainer = new FilmsView();
  filmsList = new FilmsListView();
  filmsListContainer = new FilmsListContainerView();
  showMoreButton = new ShowMoreButtonView();
  filmsListContainerTop = new FilmsListContainerView();
  containerListExtraTop = new FilmsListExtraTopView();
  containerListExtraMostCommented = new FilmsListExtraMostCommentedView();
  filmsListContainerMostCommented = new FilmsListContainerView();


  init = (boardContainer, moviesModel) => {
    this.boardContainer = boardContainer;
    this.moviesModel=moviesModel;
    // this.boardTasks = [...this.tasksModel.getTasks()];
    this.moviesBoard=[...this.moviesModel.getMovies()];
    console.log(this.moviesBoard);
    render(this.boardComponent, this.boardContainer);
    render(this.filmsContainer, this.boardContainer);
    render(this.filmsList, this.filmsContainer.getElement());
    render(this.filmsListContainer, this.filmsList.getElement());
    for (let i = 0; i < this.moviesBoard.length; i++) {
      render(new FilmCardView(this.moviesBoard[i]), this.filmsListContainer.getElement());
    }
    render(this.showMoreButton, this.filmsList.getElement());

    render(this.containerListExtraTop, this.filmsContainer.getElement());
    render(this.filmsListContainerTop, this.containerListExtraTop.getElement(), 'beforeend');
    for (let i = 0; i < EXTRA_CARDS_COUNT; i++) {
      render(new FilmCardView(), this.filmsListContainerTop.getElement());
    }

    render(
      this.containerListExtraMostCommented,
      this.filmsContainer.getElement()
    );
    render(
      this.filmsListContainerMostCommented,
      this.containerListExtraMostCommented.getElement(), 'beforeend'
    );

    for (let i = 0; i < EXTRA_CARDS_COUNT; i++) {
      render(
        new FilmCardView(),
        this.filmsListContainerMostCommented.getElement()
      );
    }
  };
}
