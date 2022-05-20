import { configureStore } from '@reduxjs/toolkit';
import letterReducer from '../features/letters/LetterSlice';

export const store = configureStore({
  reducer: {
    letter: letterReducer
  },
});
