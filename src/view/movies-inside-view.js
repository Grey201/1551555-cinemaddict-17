import { createElement } from '../render.js';

const createMoviesInsideTemplate = () => '<p>130 291 movies inside</p>';

export default class MoviesInsideView {
  getTemplate() {
    return createMoviesInsideTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
