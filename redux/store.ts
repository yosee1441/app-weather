import { configureStore } from '@reduxjs/toolkit';

import { weatherReducer } from './weather';
import { historyReducer } from './history';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
