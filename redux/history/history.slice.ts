import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { findAll, save } from './history.actions';

interface HistoryState {
  searches: string[];
  loading: boolean;
  error: string | null;
}

const HistorialEmptyState: HistoryState = {
  searches: [],
  loading: false,
  error: null,
};

const historySlice = createSlice({
  name: 'history',
  initialState: HistorialEmptyState,
  reducers: {
    resetHistory: () => HistorialEmptyState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(findAll.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(findAll.fulfilled, (state, action: PayloadAction<string[]>) => {
        state.loading = false;
        state.searches = action.payload;
      })
      .addCase(findAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(save.fulfilled, (state, action: PayloadAction<string[]>) => {
        state.searches = action.payload;
      })
      .addCase(save.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { resetHistory } = historySlice.actions;
export default historySlice.reducer;
