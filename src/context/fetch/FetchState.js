import React, { useReducer } from 'react';

import FetchContext from "./fetchContext";
import FetchReducer from "./fetchReducer";

import axios from "axios";

import { SEARCH_MOVIES, SET_LOADING, SET_TEXT, GET_MOVIE, GET_POPULARMOVIES, LOAD_MOREPAGES, RESET_MOVIES, ADD_FAVORITEMOVIE, FAVORITE_ERROR, GET_FAVORITEMOVIES } from "../types"

const FetchState = props => {

    const initialState = {
        movies: [],
        movie: null,
        popularMovie: null,
        loading: false,
        value: '',
        loadPages: 2,
        favoriteMovie: [],
        error: null
    };

    const [state, dispatch] = useReducer(FetchReducer, initialState);

    const setText = (value) => {
        dispatch({
            type: SET_TEXT,
            payload: value
        })
    };

    const resetMovies = () => {
        dispatch({
            type: RESET_MOVIES,

        });
    };
    const loadMorePages = () => {
        dispatch({
            type: LOAD_MOREPAGES,

        });
    };

    const searchMovies = async (text, page) => {
        setLoading(true);

        const res = await axios.get(`
        https://api.themoviedb.org/3/search/movie?query=${text}&page=${page}&api_key=${process.env.REACT_APP_MOVIESDB_CLIENT_ID}`)

        dispatch({
            type: SEARCH_MOVIES,
            payload: res.data,
        });
    };

    const getMovie = async (id) => {

        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIESDB_CLIENT_ID}&language=en-US
        `);

        dispatch({
            type: GET_MOVIE,
            payload: res.data
        })
    };

    const getPopularMovies = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIESDB_CLIENT_ID}&language=en-US&page=1`)

        dispatch({
            type: GET_POPULARMOVIES,
            payload: res.data.results
        })
    };
    const getFavoriteMovies = async () => {
        try {
            const res = await axios.get('http://localhost:5000/favorite');

            dispatch({
                type: GET_FAVORITEMOVIES,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: FAVORITE_ERROR,
                payload: err.response.statusText
            });
        }
    };
    const addFavoriteMovie = async (data) => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('http://localhost:5000/favorite', data, config);
            dispatch({
                type: ADD_FAVORITEMOVIE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: FAVORITE_ERROR,
                payload: err.response.statusText
            });
        }
    };

    const setLoading = () => dispatch({ type: SET_LOADING });

    return <FetchContext.Provider value={{ error: state.error, favoriteMovie: state.favoriteMovie, loadPages: state.loadPages, popularMovie: state.popularMovie, movie: state.movie, value: state.value, movies: state.movies, loading: state.loading, searchMovies, setText, getMovie, getPopularMovies, loadMorePages, resetMovies, addFavoriteMovie, getFavoriteMovies }}> {props.children}</FetchContext.Provider>
};

export default FetchState;