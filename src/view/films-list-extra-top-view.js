import AbstractView from '../framework/view/abstract-view.js';

const createFilmsListExtraTopTemplate = () =>
  `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Top rated</h2>
  </section>`;

export default class FilmsListExtraTopView extends AbstractView {
  get template() {
    return createFilmsListExtraTopTemplate();
  }
}
