import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import FetchContext from "../../context/fetch/fetchContext";

const Movie = ({ movie }) => {

    const fetchContext = useContext(FetchContext);

    let location = useLocation();

    const getId = () => {
        fetchContext.getMovie(movie.id)

    };
    return (
        <section>
            <h1>{movie?.title}</h1>
            <NavLink to={{
                pathname: `/movie/${movie.id}`,
                state: { background: location }
            }} onClick={getId}>
                <LazyLoadImage
                    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                    loading="lazy" alt={movie?.title} /></NavLink>
            <p>{movie?.vote_average}</p>
        </section>
    );
};

export default Movie;