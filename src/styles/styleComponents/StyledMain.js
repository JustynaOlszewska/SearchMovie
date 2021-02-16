import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const StyledMain = styled.main`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
`;

export const StyledNavLink = styled(NavLink)`
@media (min-width: 769px) {
    font-size: 1.5rem;
}
@media (min-width: 1200px) {
    font-size: 2rem;
}
`;

