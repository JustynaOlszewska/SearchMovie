import styled from 'styled-components';


export const StyledListMovie = styled.section`
width: 100%;
min-height: 100vh;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media(min-width: 400px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
@media(min-width: 1800px) {
    width: 70%;
    margin-top: 30px;
}
`;