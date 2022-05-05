import {createElement} from '../render.js';

const CreateMoviesInsideTemplate=()=>(`<p>130 291 movies inside</p>`);

export default class MoviesInsideView {
    getTemplate() {
      return CreateMoviesInsideTemplate();
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