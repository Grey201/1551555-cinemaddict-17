import {FilterType} from '../const';

export const generateFilter = (movies) => Object.entries(FilterType).map(
  ([filterKey, filterName]) => ({
    key:filterKey,
    name: filterName,
    count: 0,
  }),
);
// console.log(generateFilter());