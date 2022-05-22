import AbstractView from '../framework/view/abstract-view.js';

const createMoviesInsideTemplate = () => '<p>130 291 movies inside</p>';
export default class MoviesInsideView extends AbstractView {
  get template() {
    return createMoviesInsideTemplate();
  }
}
