import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    input: {
        background: 'linear-gradient(45deg, rgb(255, 142, 83) 10%, rgb(0,0,0) 90%)',
        width: '80%',
        margin: '0 auto',
        textAlign: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: '70%',
        left: '10%'

    },
});
export const StyledHeader = styled.header`
width: 100%;
height: 500px;
text-align:center;
background-repeat: no-repeat;
background-size: cover;
background-position-x: center;
position: relative;
color: white;
margin-top: 15px;
font-size: 1.2rem;
#search-photo, #search-photo-label, #search-photo-popup, .MuiSvgIcon-root{
    color: white;
};
@media(min-width: 760px) {
    font-size: 1.5rem;
};
@media(min-width: 1150px) {
    height: 700px
};
@media(min-width: 1800px) {
    height: 900px
};
`;

