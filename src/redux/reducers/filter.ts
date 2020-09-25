import { CategorySortTypes, FilterActionTypes, SortByTypes } from '../../types/filter';
import { SET_CATEGORY_SORT, SET_SEARCH_BY_STRING, SET_SORT_BY } from '../actions/filter';

interface InitialStateI {
  categorySort: CategorySortTypes;
  sortBy: SortByTypes;
  searchByString: string;
}

const initialState: InitialStateI = {
  sortBy: 'inc',
  categorySort: 'id',
  searchByString: '',
};

const filter = (state: InitialStateI = initialState, action: FilterActionTypes): InitialStateI => {
  switch (action.type) {
    case SET_CATEGORY_SORT:
      return {
        ...state,
        categorySort: action.payload,
      };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case SET_SEARCH_BY_STRING:
      return {
        ...state,
        searchByString: action.payload,
      };
    default:
      return state;
  }
};

export default filter;
