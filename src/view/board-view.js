import {createElement} from '../render.js';

const CreateFilmsBoardTemplate=()=>(`<section class='films'></section>`);

  class FilmsBoardView {
    getTemplate() {
      return CreateFilmsBoardTemplate();
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

  const CreateFilmsListTemplate=()=>('<section class="films-list">');

  class FilmsListView {
    getTemplate() {
      return CreateFilmsListTemplate();
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
  
  const CreateFilmsListContainerTemplate=()=>('<div class="films-list__container"></div>');

  class FilmsListContainerView {
    getTemplate() {
      return CreateFilmsListContainerTemplate();
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

  const CreateContainerListExtraTemplate=()=>('<section class="films-list films-list--extra"></section>');

  class ContainerListExtraView {
    getTemplate() {
      return CreateContainerListExtraTemplate();
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
  const CreateTitleTopRaitedTemplate=()=>('<h2 class="films-list__title">Top rated</h2>');

  class TitleTopRaitedView {
    getTemplate() {
      return CreateTitleTopRaitedTemplate();
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

  const CreateTitleMostCommentedTemplate=()=>('<h2 class="films-list__title">Most commented</h2>');

  class TitleMostCommentedView {
    getTemplate() {
      return CreateTitleMostCommentedTemplate();
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

  export{FilmsBoardView, FilmsListView, FilmsListContainerView, ContainerListExtraView, TitleTopRaitedView, TitleMostCommentedView};
  