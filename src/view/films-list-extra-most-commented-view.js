import { createElement } from '../render.js';

const createFilmsListExtraMostCommentedTemplate = () =>(
  `<section class="films-list films-list--extra">
<h2 class="films-list__title">Most commented</h2>`
);

export default class FilmsListExtraMostCommentedView {
  getTemplate() {
    return createFilmsListExtraMostCommentedTemplate();
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
