import {
  SET_ACTIVE_USER,
  SET_CURRENT_PAGE,
  SET_USERS,
  SET_LOADED,
  ADD_USER,
} from './../redux/actions/users';

export interface UserI {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: AddressI;
  description?: string;
}

interface AddressI {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
}

interface SetUsersAction {
  type: typeof SET_USERS;
  payload: UserI[];
}

interface SetActiveUserAction {
  type: typeof SET_ACTIVE_USER;
  payload: UserI;
}

interface SetCurrentPageAction {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
}

interface SetLoadedAction {
  type: typeof SET_LOADED;
  payload: boolean;
}

interface AddUserAction {
  type: typeof ADD_USER;
  payload: UserI;
}

export type UsersActionTypes =
  | SetUsersAction
  | SetActiveUserAction
  | SetCurrentPageAction
  | SetLoadedAction
  | AddUserAction;
