import {render, RenderPosition}  from '../framework/render.js';
import PopupView from '../view/popup-view.js';
import FilmCardView from '../view/film-card-view.js';

export default class MoviePresenter{
#movieListContainer = null;

  #movieComponent = null;
  #popup = null;

  #movie = null;

  constructor(movieListContainer) {
    this.#movieListContainer = movieListContainer;
  }

  init = (movie) => {
    this.#movie = movie;
    // this.#comment=comment;
    this.#movieComponent = new FilmCardView(movie);
    // this.#popup = new PopupView(movie);
  //  console.log(this.#movieComponent);
    // this.#movieComponent.setShowClickHandler(this.#editClickHandler);
    // this.#taskEditComponent.setFormSubmitHandler(this.#handleFormSubmit);

    // render(this.#taskComponent, this.#taskListContainer);
    render(this.#movieComponent, this.#movieListContainer);

    
  };

  #editClickHandler =()=>{
    this.#popupOpen();
  }
//   }
    #popupOpen=() => {
        const siteFooterElement = document.querySelector('.footer');
        render(this.#popup, siteFooterElement, RenderPosition.AFTEREND);
        document.addEventListener('keydown', onEscKeyDown);
      };
// const movieComponent = new FilmCardView(movie);
//     const popup = new PopupView(movie, this.#comments);
//todo
    // const onEscKeyDown = (evt) => {
    //   if (evt.key === 'Escape' || evt.key === 'Esc') {
    //     evt.preventDefault();
    //     document.querySelector('.film-details').remove();
    //     document.removeEventListener('keydown', onEscKeyDown);
    //   }
    // };

    // movieComponent.setShowClickHandler(() => {
    //   const siteFooterElement = document.querySelector('.footer');
    //   render(popup, siteFooterElement, RenderPosition.AFTEREND);
    //   document.addEventListener('keydown', onEscKeyDown);
    // });

    // popup.setCloseClickHandler(() => {
    //   document.querySelector('.film-details').remove();
    //   document.removeEventListener('keydown', onEscKeyDown);
    // });

    // render(movieComponent, container);
}