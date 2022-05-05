
import SortView from '../view/sort-view.js';
import FilmCardView from '../view/card-view.js';
import  {FilmsBoardView, FilmsListView, FilmsListContainerView, ContainerListExtraView, TitleTopRaitedView, TitleMostCommentedView} from'../view/board-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js'
import FilmCardTopView from '../view/card-top-view.js';
import FilmCardMostCommentedView from '../view/card-most-commented-view.js';
import {render} from '../render.js';

const CARDS_ON_START=5;
const EXTRA_CARDS_COUNT=2;

export default class BoardPresenter {
  boardComponent = new SortView();
  FilmsContainer= new FilmsBoardView();
  FilmsList= new FilmsListView();
FilmsListContainer= new FilmsListContainerView();
ShowMoreButton=new ShowMoreButtonView();
ContainerListExtraTop= new ContainerListExtraView();
TitleTopRaited= new TitleTopRaitedView();
FilmsListContainerTop= new FilmsListContainerView();
ContainerListExtraMostCommented= new ContainerListExtraView();
TitleMostCommented= new TitleMostCommentedView();
FilmsListContainerMostCommented =new FilmsListContainerView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;
    render(this.boardComponent, this.boardContainer);
    render( this.FilmsContainer, this.boardContainer);
    render( this.FilmsList, this.FilmsContainer.getElement());
    render(this.FilmsListContainer, this.FilmsList.getElement());
    for (let i=0; i<CARDS_ON_START; i++){
render(new FilmCardView(), this.FilmsListContainer.getElement());
    };
    render(this.ShowMoreButton, this.FilmsList.getElement());

render (this.ContainerListExtraTop, this.FilmsContainer.getElement());
render (this.TitleTopRaited, this.ContainerListExtraTop.getElement());
render( this.FilmsListContainerTop, this.ContainerListExtraTop.getElement());
    for (let i=0; i<EXTRA_CARDS_COUNT; i++){
      render(new FilmCardTopView(), this.FilmsListContainerTop.getElement());
    }

render (this.ContainerListExtraMostCommented, this.FilmsContainer.getElement());
render(this.TitleMostCommented, this.ContainerListExtraMostCommented.getElement());
render( this.FilmsListContainerMostCommented, this.ContainerListExtraMostCommented.getElement());
for (let i=0; i<EXTRA_CARDS_COUNT; i++){
  render(new FilmCardMostCommentedView(), this.FilmsListContainerMostCommented.getElement());
}

  };
}
