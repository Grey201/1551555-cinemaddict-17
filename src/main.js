import ProfileView from './view/profile-view.js';
import FilterView from './view/filter-view.js';
import PopupView from './view/popup-view.js';
import MoviesInsideView from './view/movies-inside-view.js';
import { render, RenderPosition} from './render.js';
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
boardPresenter.init(siteMainElement, moviesModel);
render(new MoviesInsideView(), filmsStatistic);
render(new PopupView(), siteFooterElement,RenderPosition.AFTEREND);
// console.log(PopupView(moviesModel));
