import React, { useReducer } from 'react';

import FavoriteContext from "./favoriteContext";
import FavoriteReducer from "./favoriteReducer";

import axios from "axios";

import { ADD_FAVORITEMOVIE, FAVORITE_ERROR, GET_FAVORITEMOVIES } from "../types"

const FetchState = props => {

    const initialState = {
        favoriteMovie: [],
        error: null
    };

    const [state, dispatch] = useReducer(FavoriteReducer, initialState);


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

            const res = await axios.post('http://localhost:5000/favorite', { title: data.title, id: data.id }, config);
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


    return <FavoriteContext.Provider value={{ error: state.error, favoriteMovie: state.favoriteMovie, addFavoriteMovie, getFavoriteMovies }}> {props.children}</FavoriteContext.Provider>
};

export default FetchState;