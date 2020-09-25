import {
  CategorySortTypes,
  FilterActionTypes,
  SetCategorySortAction,
  SetSortByAction,
  SortByTypes,
} from '../../types/filter';

export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_CATEGORY_SORT = 'SET_CATEGORY_SORT';
export const SET_SEARCH_BY_STRING = 'SET_SEARCH_BY_STRING';

export const setSortBy = (sortBy: SortByTypes): SetSortByAction => ({
  type: SET_SORT_BY,
  payload: sortBy,
});

export const setCategorySort = (categorySort: CategorySortTypes): SetCategorySortAction => ({
  type: SET_CATEGORY_SORT,
  payload: categorySort,
});

export const setSearchByString = (value: string): FilterActionTypes => ({
  type: SET_SEARCH_BY_STRING,
  payload: value,
});
