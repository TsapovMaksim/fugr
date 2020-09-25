import { SET_CATEGORY_SORT, SET_SEARCH_BY_STRING, SET_SORT_BY } from './../redux/actions/filter';

export type CategorySortTypes = 'id' | 'firstName' | 'lastName' | 'email' | 'phone';
export type SortByTypes = 'inc' | 'dec';

export interface SetCategorySortAction {
  type: typeof SET_CATEGORY_SORT;
  payload: CategorySortTypes;
}

export interface SetSortByAction {
  type: typeof SET_SORT_BY;
  payload: SortByTypes;
}

export interface SetSearchByStringAction {
  type: typeof SET_SEARCH_BY_STRING;
  payload: string;
}

export type FilterActionTypes = SetCategorySortAction | SetSortByAction | SetSearchByStringAction;
