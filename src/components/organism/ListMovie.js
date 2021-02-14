import React, { lazy, useContext } from 'react';
import styled from 'styled-components';

import Spinner from "../modules/spinner/Spinner";

import FetchContext from "../../context/fetch/fetchContext";

const Movie = lazy(() => import('../modules/Movie'));
//style takie jak w search StyledHeader
const StyledListMovie = styled.section`
width: 100%;
min-height: 100vh;
background-repeat: no-repeat;
background-size: cover;

`;
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