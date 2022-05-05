import NewUserProfileView from './view/new-user-profile-view.js';
import FilterView from './view/filter-view.js';
import PopupView from './view/poopup.js';
import MoviesInsideView from './view/footer-view.js'
import {render} from './render.js';
import BoardPresenter from './presenter/board-presenter.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
// const footer=document.querySelector('.footer')
const filmsStatistic = document.querySelector('.footer__statistics');
console.log(filmsStatistic);
const boardPresenter = new BoardPresenter();

render(new NewUserProfileView(), siteHeaderElement);
render(new FilterView(), siteMainElement);
boardPresenter.init(siteMainElement);
render(new MoviesInsideView(), filmsStatistic);
render(new PopupView(), document.body);

