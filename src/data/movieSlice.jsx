import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    popularMovies: null,
    trending: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrending: (state, action) => {
      state.trending = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addPopularMovies,
  addTrending,
  addTrailerVideo,
} = movieSlice.actions;

export default movieSlice.reducer;
