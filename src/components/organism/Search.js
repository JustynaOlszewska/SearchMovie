import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import FetchContext from "../../context/fetch/fetchContext";

// const Alert = lazy(() => import('../organism/Alert'));
import { useStyles, StyledHeader } from '../../styles/styleComponents/StyledSearch';

const Search = () => {

    const history = useHistory()
    const fetchContext = useContext(FetchContext);
    const classes = useStyles();

    useEffect(() => {
        if (fetchContext.value === '') fetchContext.getPopularMovies()
        else if (fetchContext.value !== '') {
            fetchContext.resetMovies()

            fetchContext.searchMovies(fetchContext.value, 1);
        }
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