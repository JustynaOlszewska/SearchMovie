import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


import FetchContext from "../../context/fetch/fetchContext";

// const Alert = lazy(() => import('../organism/Alert'));
const useStyles = makeStyles({
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
const StyledHeader = styled.header`
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


const Search = () => {

    const history = useHistory()
    const fetchContext = useContext(FetchContext);
    const classes = useStyles();

    useEffect(() => {
        fetchContext.getPopularMovies()

        fetchContext.searchMovies(fetchContext.value);

        // eslint-disable-next-line
    }, [fetchContext.value]);

    const handleChange = e => {
        history.push('/listMovies')
        fetchContext.setText(e.target.value);
    };

    return (
        <StyledHeader style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${fetchContext?.popularMovie})` }}>
            <h1>Search movies</h1>
            {/* <Alert /> */}
            <Autocomplete
                id="search-photo"
                options={fetchContext.movies.map(element => element.title)}
                getOptionSelected={(option) => option}
                value={fetchContext.value}
                onInputChange={(event, value) => fetchContext.setText(value)}
                renderInput={(params) => <TextField
                    className={classes.input}
                    onChange={handleChange}
                    id="filled-basic" {...params}
                    label="Search"
                    variant="filled" />}
            />
        </StyledHeader>
    );
};

export default Search;