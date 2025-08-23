import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.error || 'Login failed');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for logout
export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async () => {
    await fetch('/logout', {
      method: 'DELETE',
      credentials: 'same-origin',
    });
  }
);

// Async thunk to check the session status and get user info
export const fetchAuthStatus = createAsyncThunk(
  'auth/fetchAuthStatus',
  async () => {
    const response = await fetch('/api/session_status');
    if (!response.ok) throw new Error('Failed to fetch auth status');
    return response.json();
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loggedIn: false,
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // loginUser handlers
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.loggedIn = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Login failed';
      })

      // logoutUser handlers
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.loggedIn = false;
        state.status = 'idle';
      })

      // fetchAuthStatus handlers
      .addCase(fetchAuthStatus.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAuthStatus.fulfilled, (state, action) => {
        if (action.payload.logged_in) {
          state.user = action.payload.user;
          state.loggedIn = true;
        } else {
          state.user = null;
          state.loggedIn = false;
        }
        state.status = 'succeeded';
      })
      .addCase(fetchAuthStatus.rejected, (state) => {
        state.status = 'failed';
        state.user = null;
        state.loggedIn = false;
      });
  },
});

export const selectUser = (state) => state.auth.user;
export const selectLoggedIn = (state) => state.auth.loggedIn;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;

export default authSlice.reducer;
