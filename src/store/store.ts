import { configureStore } from '@reduxjs/toolkit';
//@ts-ignore
import pageReducer from './slices/page.slice.ts';

const store = configureStore({
  reducer: {
    page: pageReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
