import React, { useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import FetchContext from "../../context/fetch/fetchContext";

// const Alert = lazy(() => import('../organism/Alert'));

const Search = () => {
    
    const history = useHistory()
    const fetchContext = useContext(FetchContext);

    useEffect(() => {
        fetchContext.searchMovies(fetchContext.value);

        // eslint-disable-next-line
    }, [fetchContext.value]);


    const handleChange = e => {
        history.push('/listMovies')
        fetchContext.setText(e.target.value);
    };

    return (
        <>
            <h1>Search movies</h1>
            {/* <Alert /> */}
            <form>
                <Autocomplete
                    id="search-photo"
                    options={fetchContext.movies.map(element => element.title)}
                    getOptionSelected={(option) => option}
                    value={fetchContext.value}
                    onInputChange={(event, value) => fetchContext.setText(value)}
                    ListboxProps={{
                        style: {
                            position: "absolute",
                            top: 10,
                            bottom: 0,
                            right: 0,
                            left: 0,
                            height: 100,
                            width: "100%",
                            overflowY: "auto",
                        },
                    }}
                    style={{ width: '200px' }}
                    renderInput={(params) => <TextField
                        onChange={handleChange}
                        id="filled-basic" {...params}
                        label="Search"
                        variant="filled" />}
                />
            </form>
        </>
    );
};

export default Search;