import { GET_MOVIES, GET_SINGLE_MOVIE, GET_MOVIE_BY } from '../actions/types';


export default function (state = {}, action) {

    switch (action.type) {
        case GET_MOVIES:
         return normalize(action.allMovies)
        case GET_SINGLE_MOVIE:
         return normalize(action.singleMovie)
        case GET_MOVIE_BY:
         return normalize(action.sortedMovies)
        default:
            return state;
    }
}

const normalize = (arr) => {
    let obj = {}
    arr.forEach(el => {
    obj[el.id] = el
    })
    return obj
}