import { SEARCH_MOVIES, SET_TEXT } from "../types";

const FetchReducer = (state, action) => {
    switch (action.type) {

        case SEARCH_MOVIES:
            return {
                ...state,
                movies: action.payload.results,
                loading: false,

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