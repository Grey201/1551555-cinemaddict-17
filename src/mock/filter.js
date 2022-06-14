import { FilterType } from '../const';

export const generateFilter = () =>
  Object.entries(FilterType).map(([filterKey, filterName]) => ({
    href: filterKey,
    name: filterName,
    count: 0,
  }));
