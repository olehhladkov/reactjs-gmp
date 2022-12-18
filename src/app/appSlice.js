import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getMovies from '../api/getMovies';

export const getMoviesThunk = createAsyncThunk('app', getMovies);

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    moviesList: [],
    filterOptionList: ['', 'comedy', 'crime', 'documentary', 'drama', 'horror'],
    sortOptionList: [
      { name: 'release date', value: 'release_date' },
      { name: 'rating', value: 'vote_average' },
    ],
    sortOptionSelected: { name: 'release date', value: 'release_date' },
    filterOptionSelected: '',
  },
  reducers: {
    setSortOption: (state, action) => {
      state.sortOptionSelected = action.payload;
    },
    setFilterOption: (state, action) => {
      state.filterOptionSelected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMoviesThunk.fulfilled, (state, action) => {
      state.moviesList = action.payload.data;
    });
  },
});

export const { setSortOption, setFilterOption } = appSlice.actions;

export default appSlice.reducer;
