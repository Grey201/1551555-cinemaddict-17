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
  #boardContainer = null;
  #moviesModel = null;
  #movies = [];
  #comments = [];
  #sortComponent = new SortView();
  #filmsContainer = new FilmsContainerView();
  #filmsList = new FilmsListView();
  #filmsListContainer = new FilmsListContainerView();
  #showMoreButton = new ShowMoreButtonView();
  #filmsListContainerTop = new FilmsListContainerView();
  #containerListExtraTop = new FilmsListExtraTopView();
  #containerListExtraMostCommented = new FilmsListExtraMostCommentedView();
  #filmsListContainerMostCommented = new FilmsListContainerView();

  init = (boardContainer, moviesModel) => {

    this.#boardContainer = boardContainer;
    this.#moviesModel = moviesModel;
    this.#movies = [...this.#moviesModel.movies];
    this.#comments = [...this.#moviesModel.comments];
    render(this.#sortComponent, this.#boardContainer);
    render(this.#filmsContainer, this.#boardContainer);
    render(this.#filmsList, this.#filmsContainer.element);
    render(this.#filmsListContainer, this.#filmsList.element);
    this.#movies.forEach((movie)=>this.#renderMovie((movie), this.#filmsListContainer.element));
    render(this.#showMoreButton, this.#filmsList.element);
    render(this.#containerListExtraTop, this.#filmsContainer.element);
    render(
      this.#filmsListContainerTop,
      this.#containerListExtraTop.element,
      RenderPosition.BEFOREEND
    );
    for (let i = 0; i < EXTRA_CARDS_COUNT; i++) {
      this.#renderMovie(this.#movies[i], this.#filmsListContainerTop.element);
    }

    render(
      this.#containerListExtraMostCommented,
      this.#filmsContainer.element
    );

    render(
      this.#filmsListContainerMostCommented,
      this.#containerListExtraMostCommented.element,
      RenderPosition.BEFOREEND
    );

    for (let i = 0; i < EXTRA_CARDS_COUNT; i++) {
      this.#renderMovie(this.#movies[i],
        this.#filmsListContainerMostCommented.element);
    }
  };

  #renderMovie = (movie, container) => {
    const movieComponent = new FilmCardView(movie);
    const popup=new PopupView(movie, this.#comments);

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        document.querySelector('.film-details').remove();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    movieComponent.element.querySelector('.film-card__link').addEventListener('click', ()=>{
      const siteFooterElement= document.querySelector('.footer');
      render(
        popup,
        siteFooterElement,
        RenderPosition.AFTEREND
      );
      document.addEventListener('keydown', onEscKeyDown);
    });

    popup.element.querySelector('.film-details__close-btn').addEventListener('click', ()=>{document.querySelector('.film-details').remove();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    render(movieComponent, container);
  };
}


