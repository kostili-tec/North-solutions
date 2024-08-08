import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchReducer';
import { githubApi } from './githubApi';

const rootReducer = combineReducers({
  searchReducer,
  [githubApi.reducerPath]: githubApi.reducer
});

export const setupStore = () =>
  configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
