import React, { useReducer } from 'react';

import FetchContext from "./fetchContext";
import FetchReducer from "./fetchReducer";

import axios from "axios";

import { SEARCH_MOVIES, SET_LOADING, SET_TEXT, GET_MOVIE, GET_POPULARMOVIES } from "../types"

const FetchState = props => {
    
    const initialState = {
        movies: [],
        movie: null,
        popularMovie: null,
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

    const getMovie = async (id) => {

        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=53b639007e8194b06c05f0f35562dbb2&language=en-US
        `);

        dispatch({
            type: GET_MOVIE,
            payload: res.data
        })
    };

    const getPopularMovies = async () => {
        const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=53b639007e8194b06c05f0f35562dbb2&language=en-US&page=1')

        dispatch({
            type: GET_POPULARMOVIES,
            payload: res.data.results
        })
    };

    const setLoading = () => dispatch({ type: SET_LOADING });

    return <FetchContext.Provider value={{ popularMovie: state.popularMovie, popularMovies: state.popularMovies, movie: state.movie, value: state.value, movies: state.movies, loading: state.loading, searchMovies, setText, getMovie, getPopularMovies }}> {props.children}</FetchContext.Provider>
};

export default FetchState;