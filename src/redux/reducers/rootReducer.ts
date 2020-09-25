import { combineReducers } from 'redux';

import users from './users';
import filter from './filter';

const rootReducer = combineReducers({ users, filter });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
