import { createElement } from '../render.js';

const сreateFilmsListTemplate = () => '<section class="films-list">';

export default class FilmsListView {
  #element = null;

  get template() {
    return сreateFilmsListTemplate();
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
