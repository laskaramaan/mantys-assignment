import { configureStore } from '@reduxjs/toolkit';
import slotReducer from '../features/slot/slotSlice';

export const store = configureStore({
  reducer: {
    slot: slotReducer,
  },
});
