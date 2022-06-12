import AbstractView from '../framework/view/abstract-view.js';


const createFilterItemTemplate = (filter) =>{
  const {name, count} = filter;
  // return `<a href="#all" class="main-navigation__item main-navigation__item--active">${name}</a>`;
  return (`<a href="#watchlist" class="main-navigation__item">${name} <span class="main-navigation__item-count">${count}</span></a>`);
//   <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
//   <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
// </nav>`;
};

const createFilterTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems.map((filter) => createFilterItemTemplate(filter)).join('');
  // console.log(filterItemsTemplate);
    // .map((filter, index) => createFilterItemTemplate(filter, index === 0))
    // .join('');

  return (`<nav class="main-navigation">
  <<a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    ${filterItemsTemplate}
    </nav>`);
};

export default class FilterView extends AbstractView {
  #filters = null;
  constructor(filters){
    super();
    this.#filters=filters;
  }

  get template() {
    return createFilterTemplate(this.filters);
  }
}
