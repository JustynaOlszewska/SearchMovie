import React, { useContext } from 'react';

import FetchContext from '../../context/fetch/fetchContext';

const MoreMovies = () => {

    const fetchContext = useContext(FetchContext);

    const handleClick = () => {

        fetchContext.loadMorePages();
        fetchContext.searchMovies(fetchContext.value, fetchContext.loadPages);

    };

    return (
        <button onClick={handleClick}>More movies</button>
    );
};

export default MoreMovies;