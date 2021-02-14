import { SEARCH_MOVIES, SET_TEXT, GET_MOVIE, GET_POPULARMOVIES } from "../types";

const FetchReducer = (state, action) => {
    switch (action.type) {

        case SEARCH_MOVIES:
            return {
                ...state,
                movies: action.payload.results,
                loading: false,
                // popularMovies: null,

            }
        case GET_MOVIE:
            return {
                ...state,
                movie: action.payload,
                loading: false,
            }
        case GET_POPULARMOVIES:
            return {
                ...state,
                movies: action.payload,
                popularMovie: action.payload[0].backdrop_path
            }
        case SET_TEXT:
            return {
                ...state,
                value: action.payload
            }

        default:
            return state
    };
};

export default FetchReducer;