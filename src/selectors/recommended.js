import isEmpty from 'lodash/isEmpty';

const selectRecommendedMovies = (state) =>
  isEmpty(state.movies.recommendedMovies.movies)
    ? Array(6).fill({})
    : state.movies.recommendedMovies.movies;

export default selectRecommendedMovies;
