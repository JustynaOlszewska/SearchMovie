import React, { useReducer } from 'react';

import FetchContext from "./fetchContext";
import FetchReducer from "./fetchReducer";

import axios from "axios";

import { SEARCH_MOVIES, SET_LOADING, SET_TEXT } from "../types"

const FetchState = props => {
    const initialState = {
        movies: [],
        loading: false,
        value: ''
    };

    const [state, dispatch] = useReducer(FetchReducer, initialState);

    const setText = (value) => {
        dispatch({
            type: SET_TEXT,
            payload: value
        })
    };

    const searchMovies = async (text) => {

        setLoading(true);

        const res = await axios.get(`
        https://api.themoviedb.org/3/search/movie?query=${text}&api_key=53b639007e8194b06c05f0f35562dbb2`)

        dispatch({
            type: SEARCH_MOVIES,
            payload: res.data
        });

    };

    const setLoading = () => dispatch({ type: SET_LOADING });

    return <FetchContext.Provider value={{ value: state.value, movies: state.movies, loading: state.loading, searchMovies, setText }}> {props.children}</FetchContext.Provider>
};

export default FetchState;