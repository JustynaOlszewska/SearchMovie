import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import FavoriteContext from '../../context/favorite/favoriteContext';

const FavoriteMovies = () => {

    const favoriteContext = useContext(FavoriteContext);

    useEffect(() => {
        favoriteContext.getFavoriteMovies()
        //eslint-disable-next-line
    }, [])

    return (
        <section style={{ color: 'red' }}>
            <ul>
                {favoriteContext.favoriteMovie.map(movie => <li key={movie.title}>{movie.title}</li>)}
            </ul>
            <NavLink to='/'>Back</NavLink>
        </section>
    );
}

export default FavoriteMovies;
