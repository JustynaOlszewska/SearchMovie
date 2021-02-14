import React, { lazy } from 'react';

import styled from 'styled-components';

const Search = lazy(() => import('../organism/Search'));
const ListMovie = lazy(() => import('../organism/ListMovie'));

const StyledMain = styled.main`
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
`;

const Main = () => {
    return (
        <StyledMain>
            <Search />
            <ListMovie />
        </StyledMain>
    );
}

export default Main;