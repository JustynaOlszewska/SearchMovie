import { SEARCH_MOVIES, SET_TEXT, GET_MOVIE, GET_POPULARMOVIES, LOAD_MOREPAGES, RESET_MOVIES, ADD_FAVORITEMOVIE, FAVORITE_ERROR, GET_FAVORITEMOVIES } from "../types";

const FetchReducer = (state, action) => {
    switch (action.type) {

        case SEARCH_MOVIES:
            return {
                ...state,
                movies: [...state.movies, ...action.payload.results],
                loading: false,
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
                popularMovie: action.payload[0].backdrop_path,
            }
        case GET_FAVORITEMOVIES:
            return {
                ...state,
                favoriteMovie: action.payload,
                movie: null
            }
        case ADD_FAVORITEMOVIE:
            return {
                ...state,
                favoriteMovie: state.favoriteMovie.concat(action.payload)
            }
        case FAVORITE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case RESET_MOVIES:
            return {
                ...state,
                movies: []
            }

        case LOAD_MOREPAGES:
            return {
                ...state,
                loadPages: state.loadPages + 1
            }

        case SET_TEXT:
            return {
                ...state,
                value: action.payload,
                loadPages: 2,
                movie: null
            }

        default:
            return state
    };
};

export default FetchReducer;