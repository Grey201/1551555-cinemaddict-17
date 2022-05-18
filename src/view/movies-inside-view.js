import { createElement } from '../render.js';

const createMoviesInsideTemplate = () => '<p>130 291 movies inside</p>';

export default class MoviesInsideView {
  #element = null;

  get template() {
    return createMoviesInsideTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
