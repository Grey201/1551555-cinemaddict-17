import { createElement } from '../render.js';

const createFilmsBoardTemplate = () => '<section class=\'films\'></section>';

export default class FilmsView {
  getTemplate() {
    return createFilmsBoardTemplate();
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

