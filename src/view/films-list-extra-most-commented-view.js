import AbstractView from '../framework/view/abstract-view.js';

const createFilmsListExtraMostCommentedTemplate = () =>
  `<section class="films-list films-list--extra">
<h2 class="films-list__title">Most commented</h2>`;

export default class FilmsListExtraMostCommentedView extends AbstractView {
  get template() {
    return createFilmsListExtraMostCommentedTemplate();
  }
}
