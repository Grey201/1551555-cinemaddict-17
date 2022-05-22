import AbstractView from '../framework/view/abstract-view.js';

const сreateFilmsListTemplate = () => '<section class="films-list">';

export default class FilmsListView extends AbstractView {
  get template() {
    return сreateFilmsListTemplate();
  }
}
