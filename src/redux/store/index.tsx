import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../reducers/theme';
import userTypeReducer from '../reducers/user-type';


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    userType: userTypeReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;