import {render} from './framework/render.js';
import ProfileView from './view/profile-view.js';
import FilterView from './view/filter-view.js';
import MoviesInsideView from './view/movies-inside-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import MoviesModel from './model/movies-model.js';
import {generateFilter} from './mock/filter.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const filmsStatistic = document.querySelector('.footer__statistics');

const moviesModel=new MoviesModel();
const boardPresenter = new BoardPresenter(siteMainElement, moviesModel);
const filters = generateFilter(moviesModel.movies);

render(new ProfileView(), siteHeaderElement);
render(new FilterView(filters), siteMainElement);
render(new MoviesInsideView(), filmsStatistic);

boardPresenter.init();
