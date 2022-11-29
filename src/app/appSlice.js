import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getMovies from '../api/getMovies';

export const getMoviesThunk = createAsyncThunk('app', getMovies);

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    moviesList: [],
    filterByList: ['', 'comedy', 'crime', 'documentary', 'drama', 'horror'],
    sortByList: [
      { name: 'release date', value: 'release_date' },
      { name: 'rating', value: 'vote_average' },
    ],
    sortBy: { name: 'release date', value: 'release_date' },
    filterBy: '',
  },
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setFilterBy: (state, action) => {
      state.filterBy = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getMoviesThunk.fulfilled, (state, action) => {
      state.moviesList = action.payload.data;
    });
  },
});

export const { setSortBy, setFilterBy } = appSlice.actions;

export default appSlice.reducer;
