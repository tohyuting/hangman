import { configureStore } from '@reduxjs/toolkit';
import letterReducer from '../features/display/ThemeWordSlice';

export const store = configureStore({
  reducer: {
    letter: letterReducer
  },
});
