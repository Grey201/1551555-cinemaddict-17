
import SortView from '../view/sort-view.js';

import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new BoardView();
// console.log(boardComponent);

  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    
  };
}
