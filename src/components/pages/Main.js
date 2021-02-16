import React, { lazy } from 'react';
import { NavLink } from 'react-router-dom';

import { StyledMain } from '../../styles/styleComponents/StyledMain';

const Search = lazy(() => import('../organism/Search'));
const ListMovie = lazy(() => import('../organism/ListMovie'));
const MoreMovies = lazy(() => import('../organism/MoreMovies'));


const Main = () => {
    return (
        <StyledMain>
            <Search />
            <NavLink to='/favorite'>Go to your favorite movies</NavLink>
            <ListMovie />
            <MoreMovies />
        </StyledMain>
    );
}

export default Main;