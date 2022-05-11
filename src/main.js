import ProfileView from './view/profile-view.js';
import FilterView from './view/filter-view.js';
import PopupView from './view/popup-view.js';
import MoviesInsideView from './view/movies-inside-view.js';
import { render } from './render.js';
import BoardPresenter from './presenter/board-presenter.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const filmsStatistic = document.querySelector('.footer__statistics');

const boardPresenter = new BoardPresenter();

render(new ProfileView(), siteHeaderElement);
render(new FilterView(), siteMainElement);
boardPresenter.init(siteMainElement);
render(new MoviesInsideView(), filmsStatistic);
render(new PopupView(), document.body);
