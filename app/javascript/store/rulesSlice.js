import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch grants and rules from backend API
export const fetchGrantsAndRules = createAsyncThunk(
  'rules/fetchGrantsAndRules',
  async () => {
    const response = await fetch('/api/v1/grants');
    if (!response.ok) throw new Error('Failed to fetch grants and rules');
    return response.json();
  }
);

const rulesSlice = createSlice({
  name: 'rules',
  initialState: {
    grantsList: [],      // Array of grant strings
    rulesRegistry: {},   // Object where keys are rule names and values are array of grants required
    status: 'idle',      // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGrantsAndRules.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchGrantsAndRules.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.grantsList = action.payload.grants || [];
        state.rulesRegistry = action.payload.rules || {};
      })
      .addCase(fetchGrantsAndRules.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectGrantsList = (state) => state.rules.grantsList;
export const selectRulesRegistry = (state) => state.rules.rulesRegistry;
export const selectRulesStatus = (state) => state.rules.status;

export default rulesSlice.reducer;
