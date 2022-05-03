import {createElement} from '../render.js';


const CreateFilmsTemplate=()=>(`<section class='films'></section>`);

  class FilmsView {
    getTemplate() {
      return CreateFilmsTemplate();
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


  export{FilmsView, FilmsListView, FilmsListContainerView};
  