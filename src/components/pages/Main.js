import React, { lazy } from 'react';

import { StyledMain } from '../../styles/styleComponents/StyledMain';

const Search = lazy(() => import('../organism/Search'));
const ListMovie = lazy(() => import('../organism/ListMovie'));
const MoreMovies = lazy(() => import('../organism/MoreMovies'));


const Main = () => {
    return (
        <StyledMain>
            <Search />
            <ListMovie />
            <MoreMovies/>
        </StyledMain>
    );
}

export default Main;