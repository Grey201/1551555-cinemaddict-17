import ProfileView from './view/profile-view.js';
import FilterView from './view/filter-view.js';
import MoviesInsideView from './view/movies-inside-view.js';
import { render} from './render.js';
import BoardPresenter from './presenter/board-presenter.js';
import MoviesModel from './model/movies-model.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement= document.querySelector('.footer');
const filmsStatistic = document.querySelector('.footer__statistics');

const moviesModel=new MoviesModel();
const boardPresenter = new BoardPresenter();

render(new ProfileView(), siteHeaderElement);
render(new FilterView(), siteMainElement);
boardPresenter.init(siteMainElement, siteFooterElement, moviesModel);
render(new MoviesInsideView(), filmsStatistic);

