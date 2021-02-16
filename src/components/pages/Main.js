import React, { lazy } from 'react';

import { StyledMain, StyledNavLink } from '../../styles/styleComponents/StyledMain';

const Search = lazy(() => import('../organism/Search'));
const ListMovie = lazy(() => import('../organism/ListMovie'));
const MoreMovies = lazy(() => import('../organism/MoreMovies'));


const Main = () => {
    return (
        <StyledMain>
            <Search />
            <StyledNavLink to='/favorite'>Go to your favorite movies</StyledNavLink>
            <ListMovie />
            <MoreMovies />
        </StyledMain>
    );
}

export default Main;