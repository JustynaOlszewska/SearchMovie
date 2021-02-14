import React, { lazy } from 'react';

import { StyledMain } from '../../styles/styleComponents/StyledMain';

const Search = lazy(() => import('../organism/Search'));
const ListMovie = lazy(() => import('../organism/ListMovie'));


const Main = () => {
    return (
        <StyledMain>
            <Search />
            <ListMovie />
        </StyledMain>
    );
}

export default Main;