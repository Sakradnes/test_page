import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Page = {
  id: number;
  color: string;
};

const pageSlice = createSlice({
  name: 'page',
  initialState: [] as Page[],
  reducers: {
    addPage: (state, action: PayloadAction<string>) => {
      state.unshift({ id: Date.now(), color: action.payload });
    },
    removePage: (state) => {
      state.pop();
    },
  },
});

export const { addPage, removePage } = pageSlice.actions;
export default pageSlice.reducer;
