import { UserI, UsersActionTypes } from '../../types/users';
import {
  ADD_USER,
  SET_ACTIVE_USER,
  SET_CURRENT_PAGE,
  SET_LOADED,
  SET_USERS,
} from '../actions/users';

interface InitialStateI {
  items: UserI[];
  currentPage: number;
  activeUser: UserI | {};
  isLoaded: boolean;
}

const initialState: InitialStateI = {
  items: [],
  currentPage: 1,
  activeUser: {},
  isLoaded: false,
};

const users = (state: InitialStateI = initialState, action: UsersActionTypes): InitialStateI => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_ACTIVE_USER:
      return {
        ...state,
        activeUser: action.payload,
      };
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    default:
      return state;
  }
};

export default users;
