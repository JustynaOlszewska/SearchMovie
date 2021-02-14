import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';

export const StyledLazyLoadImage = styled(LazyLoadImage)`
width: 100%;
/* border: 2px solid white; */

`;
export const StyledNavLink = styled(NavLink)`
width: 100%;

`;
export const StyledSection = styled.section`
width: 80%;
height: 500px;
text-align: center;
border: 2px solid white;
margin: 10px 0;
display: flex;
flex-direction: column;
justify-content: space-around;
& > h1 {
    font-size: 1rem;
}
@media(min-width: 400px) {
    width: 45%;
}
@media(min-width: 768px) {
    width: 25%;
    & > h1 {
    font-size: 1.2rem;
}
}
@media(min-width: 1024px) {
    width: 20%;
}
@media(min-width: 1100px) {
    height: 600px;
    & > h1 {
    font-size: 1.5rem;
}
}
@media(min-width: 1500px) {
    height: 700px;
    & > h1 {
    font-size: 1.7rem;
}
}
`;
