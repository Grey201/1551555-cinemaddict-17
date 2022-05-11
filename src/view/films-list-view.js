import { createElement } from '../render.js';

const сreateFilmsListTemplate = () => '<section class="films-list">';

export default class FilmsListView {
  getTemplate() {
    return сreateFilmsListTemplate();
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
