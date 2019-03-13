import axios from 'axios';
import { GET_MOVIES, GET_SINGLE_MOVIE, GET_MOVIE_BY } from './types'

export const recievedMovies = (allMovies) => {
    return {
    type: GET_MOVIES,
    allMovies: allMovies
    }
}

export const recievedMovie = (singleMovie) => {
    return {
    type: GET_SINGLE_MOVIE,
    singleMovie: singleMovie
    }
}

export const sortMovies = (sortedMovies) => {
    return {
    type: GET_MOVIE_BY,
    sortedMovies: sortedMovies
    }
}

///////////////////////////

export const getMovies = () => dispatch => {
    axios 
    .get('/movies')
    .then((movies) => {
        return dispatch(recievedMovies(movies.data.movies))
    })  
};

export const getSingleMovie = (id) => dispatch => {
    axios 
    .get('/movies/' + id)
    .then((movie) => {
        debugger
        return dispatch(recievedMovie(movie.data.movie))
    })  
};

export const getSortedMovies = (route) => dispatch => {
    axios 
    .get('/movies/' + route)
    .then((movies) => {
        debugger
        return dispatch(sortMovies(movies.data.movies))
    })  
};