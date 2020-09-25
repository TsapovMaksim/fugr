import { Dispatch } from 'redux';
import axios from 'axios';
import { UserI, UsersActionTypes } from '../../types/users';

export const SET_USERS = 'SET_USERS';
export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_LOADED = 'SET_LOADED';
export const ADD_USER = 'ADD_USER';

export const setLoaded = (loaded: boolean): UsersActionTypes => ({
  type: SET_LOADED,
  payload: loaded,
});

export const fetchUsers = (url: string | null) => (dispatch: Dispatch<UsersActionTypes>) => {
  if (!!url) {
    dispatch(setLoaded(false));
    axios.get<UserI[]>(url).then(({ data }) => dispatch({ type: SET_USERS, payload: data }));
  }
};

export const setActiveUser = (data: UserI): UsersActionTypes => ({
  type: SET_ACTIVE_USER,
  payload: data,
});

export const addUser = (data: UserI): UsersActionTypes => ({ type: ADD_USER, payload: data });

export const setCurrentPage = (currentPage: number): UsersActionTypes => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
});
