import NewUserProfileView from './view/new-user-profile-view.js';
import FilterView from './view/filter-view.js';
import {FilmsView, FilmsListView, FilmsListContainerView} from './view/container-view';
import ShowMoreButtonView from './view/show- more-button-view.js';
import {render} from './render.js';
import BoardPresenter from './presenter/board-presenter.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');

const boardPresenter = new BoardPresenter();


render(new NewUserProfileView(), siteHeaderElement);
render(new FilterView(), siteMainElement);
// render(new SortView(), siteMainElement);
render(new FilmsView(), siteMainElement);
const filmsList=siteMainElement.querySelector('.films');
render(new FilmsListView(), filmsList);
const filmsContainer=filmsList.querySelector('.films-list');
render(new FilmsListContainerView(), filmsContainer);
render(new ShowMoreButtonView(), filmsList);
boardPresenter.init(siteMainElement);
