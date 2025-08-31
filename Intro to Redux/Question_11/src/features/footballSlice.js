import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = "https://jsonmock.hackerrank.com/api/football_matches?page=2";

export const fetchFootballMatches = createAsyncThunk(
  'football/fetchMatches',
  async (_, thunkAPI) => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      return data.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const footballSlice = createSlice({
  name: 'football',
  initialState: {
    isLoading: false,
    isError: false,
    footballMatches: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFootballMatches.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchFootballMatches.fulfilled, (state, action) => {
        state.isLoading = false;
        state.footballMatches = action.payload;
      })
      .addCase(fetchFootballMatches.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default footballSlice.reducer;
