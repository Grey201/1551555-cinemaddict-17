import { createElement } from '../render.js';

const createFilmsListExtraMostCommentedTemplate = () =>(
  `<section class="films-list films-list--extra">
<h2 class="films-list__title">Most commented</h2>`
);

export default class FilmsListExtraMostCommentedView {
  #element =null;
  get template() {
    return createFilmsListExtraMostCommentedTemplate();
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
