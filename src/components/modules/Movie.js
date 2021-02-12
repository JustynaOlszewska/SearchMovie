import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

const Movie = ({ movie }) => {

    return (
        <section>
            <h1>{movie?.title}</h1>
            <LazyLoadImage
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                loading="lazy" alt={movie?.title} />
            <p>{movie?.vote_average}</p>
        </section>
    );
};

export default Movie;