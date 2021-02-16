import { ADD_FAVORITEMOVIE, FAVORITE_ERROR, GET_FAVORITEMOVIES } from "../types";

const FetchReducer = (state, action) => {
    switch (action.type) {

        case GET_FAVORITEMOVIES:
            return {
                ...state,
                favoriteMovie: action.payload
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

        default:
            return state
    };
};

export default FetchReducer;