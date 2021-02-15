import React, { lazy, useContext } from 'react';

import { StyledListMovie } from "../../styles/styleComponents/StyledListMovie";

import Spinner from "../modules/spinner/Spinner";

import FetchContext from "../../context/fetch/fetchContext";

const Movie = lazy(() => import('../modules/Movie'));

const ListMovie = () => {

    const fetchContext = useContext(FetchContext);

    return (
        <StyledListMovie>{fetchContext.loading ? <div><Spinner /></div> : fetchContext.movies.map(element => {
            return (
                <Movie key={element.id} movie={element} />
            
            )
        })}</StyledListMovie>
    );
};

export default ListMovie;