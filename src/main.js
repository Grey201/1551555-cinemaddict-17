import {render} from './framework/render.js';
import ProfileView from './view/profile-view.js';
import FilterView from './view/filter-view.js';
import MoviesInsideView from './view/movies-inside-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import MoviesModel from './model/movies-model.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const filmsStatistic = document.querySelector('.footer__statistics');

const moviesModel=new MoviesModel();
const boardPresenter = new BoardPresenter(siteMainElement, moviesModel);

render(new ProfileView(), siteHeaderElement);
render(new FilterView(), siteMainElement);
render(new MoviesInsideView(), filmsStatistic);

boardPresenter.init();
