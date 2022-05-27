import { configureStore } from '@reduxjs/toolkit';
import stateReducer from '../features/display/ThemeWordSlice';

export const store = configureStore({
  reducer: {
    hangmanState: stateReducer
  },
});
