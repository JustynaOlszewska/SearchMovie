import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import { StyledSection, StyledNavLink, StyledLazyLoadImage } from '../../styles/styleComponents/StyledMovie';

import FetchContext from '../../context/fetch/fetchContext';

const Movie = React.memo(({ movie }) => {

    const fetchContext = useContext(FetchContext);

    let location = useLocation();

    const getId = () => {
        fetchContext.getMovie(movie.id)

    };

    return (
        <StyledSection>
            <h1>{movie?.title}</h1>
            <StyledNavLink to={{
                pathname: `/movie/${movie?.id}`,
                state: { background: location }
            }} onClick={getId}>
                {movie?.poster_path ?
                    <StyledLazyLoadImage
                        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                        loading="lazy" alt={movie?.title} /> : <i className="far fa-sad-tear"></i>}</StyledNavLink>
            <p>Rating users: {movie?.vote_average * 10}%</p>
        </StyledSection>
    );
});

Movie.propTypes = {
    movie: PropTypes.object.isRequired,
};
export default Movie;