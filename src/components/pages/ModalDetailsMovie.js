import React, { lazy, useContext } from 'react'
import { useHistory, } from 'react-router-dom';

import { StylesModal, StylesContainerData, StylesH3 } from '../../styles/styleComponents/StyledModalDetailsMovie';

import FetchContext from '../../context/fetch/fetchContext';
import FavoriteContext from '../../context/favorite/favoriteContext';

const Spinner = lazy(() => import('../modules/spinner/Spinner'));

const ModalDetailsMovie = () => {

    const fetchContext = useContext(FetchContext);
    const favoriteContext = useContext(FavoriteContext);

    let history = useHistory();

    let back = e => {
        e.stopPropagation();
        history.goBack();
    };

    const handleClick = () => {
        favoriteContext.addFavoriteMovie(fetchContext.movie);
    };

    return (
        <StylesModal>
            {fetchContext.loading ? <div><Spinner /></div> :
                <StylesContainerData>
                    <h1>Original title: "{fetchContext?.movie?.original_title}" </h1>
                    <h4>Description: <p>{fetchContext?.movie?.overview}</p></h4>
                    <p>Release date: {fetchContext?.movie?.release_date}</p>
                    <p>Spoken languages: {fetchContext?.movie?.spoken_languages.map(language => language?.english_name)}</p>
                    <StylesH3 >Add to favorite movies  <i style={{ cursor: 'pointer' }} onClick={handleClick} className="fas fa-star"></i></StylesH3>
                    <button type="button" onClick={back}>Close </button>
                </StylesContainerData>
            }
        </StylesModal >
    );
};

export default ModalDetailsMovie;
