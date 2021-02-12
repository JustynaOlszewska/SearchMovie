import React, { lazy, useContext } from 'react';

import Spinner from "../modules/spinner/Spinner";

import FetchContext from "../../context/fetch/fetchContext";

const Movie = lazy(() => import('../modules/Movie'));

const ListMovie = () => {
    
    const fetchContext = useContext(FetchContext);

    return (     
            <div>{fetchContext.loading ? <div><Spinner /></div> : fetchContext.movies.map(element => {
                return (
                    <Movie key={element.id} movie={element} />
                )
            })}</div>
    );
};

export default ListMovie;