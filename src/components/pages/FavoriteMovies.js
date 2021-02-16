import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { StyledSection, StyledOl } from '../../styles/styleComponents/StyledFavoriteMovies';

import FavoriteContext from '../../context/favorite/favoriteContext';

const FavoriteMovies = () => {

    const favoriteContext = useContext(FavoriteContext);

    useEffect(() => {
        favoriteContext.getFavoriteMovies()
        //eslint-disable-next-line
    }, [])

    return (
        <StyledSection>
            <h1>My favorite movies</h1>
            <StyledOl>
                {favoriteContext.favoriteMovie.map(movie => <li key={movie.id}>{movie.title}</li>)}
            </StyledOl>
            <NavLink to='/'>Go back</NavLink>
        </StyledSection >
    );
};

export default FavoriteMovies;
