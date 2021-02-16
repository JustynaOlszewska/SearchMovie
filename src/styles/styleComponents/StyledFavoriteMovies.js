import styled from 'styled-components';

export const StyledSection = styled.section`
color: white;
 text-align: center;
  text-transform: uppercase;
  @media(min-width: 760px) {
    font-size: 1.3rem;
};
@media(min-width: 1024px) {
    font-size: 1.8rem;
};
`;

export const StyledOl = styled.ol`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0;

& > li {
    border: 2px solid white;
    box-shadow: 5px 5px 18px #888888;
     width: 80%;
      margin-bottom: 7px;

}
`;