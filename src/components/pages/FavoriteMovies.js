import React, { useEffect, useContext } from 'react';
import FetchContext from '../../context/fetch/fetchContext';

const FavoriteMovies = () => {

    const fetchContext = useContext(FetchContext);
    useEffect(() => {
        fetchContext.getFavoriteMovies()
        //eslint-disable-next-line
    }, [])

    return (
        <section style={{ color: 'red' }}>
            {fetchContext.favoriteMovie.map(element => element.title)}
        </section>
    );
}

export default FavoriteMovies;
