import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "YOUR_TMDB_API_KEY"; // replace with real TMDB key
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch movies by search query
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (query, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/search/movie`, {
        params: { api_key: API_KEY, query },
      });
      return res.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: { list: [], isLoading: false, isError: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default movieSlice.reducer;
