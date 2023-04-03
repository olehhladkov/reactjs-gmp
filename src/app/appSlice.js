import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMovies, getMovieById } from '../api/getMovies';

export const getMoviesThunk = createAsyncThunk(
  'getMovies',
  async (arg, { getState, signal }) => {
    const {
      app: { searchFields },
    } = getState();

    const data = await getMovies(searchFields, signal);

    return data;
  }
);
export const getMovieByIdThunk = createAsyncThunk('getMovieById', getMovieById);

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    searchFields: {
      sortBy: 'vote_average',
      sortOrder: 'desc',
    },
    moviesList: [],
    currentMovie: {},
    filterOptionList: ['', 'comedy', 'crime', 'documentary', 'drama', 'horror'],
    sortOptionList: [
      { name: 'release date', value: 'release_date' },
      { name: 'name', value: 'name' },
    ],
  },
  reducers: {
    setSearchFields: (state, action) => {
      state.searchFields = {
        ...state.searchFields,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesThunk.fulfilled, (state, action) => {
        state.moviesList = action.payload.data;
      })
      .addCase(getMovieByIdThunk.fulfilled, (state, action) => {
        state.currentMovie = action.payload;
      });
  },
});

export const { setSearchFields } = appSlice.actions;

export default appSlice.reducer;
