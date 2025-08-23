import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    currentPage: 'dashboard',
  },
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;
export const selectCurrentPage = (state) => state.page.currentPage;
export default pageSlice.reducer;
