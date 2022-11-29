import { combineReducers } from 'redux';
import { appReducer } from './reducers/appReducer';
import { noteReducer } from './reducers/noteReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  notes: noteReducer,
});

export type AppStoreType = ReturnType<typeof rootReducer>;
