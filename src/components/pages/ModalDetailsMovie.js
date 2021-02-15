import React, { lazy, useContext } from 'react'
import { useHistory, } from 'react-router-dom';

import styled from 'styled-components';

import { StylesModal, StylesContainerData } from "../../styles/styleComponents/StyledModalDetailsMovie";

import FetchContext from "../../context/fetch/fetchContext";

const Spinner = lazy(() => import('../modules/spinner/Spinner'));

const StylesH3 = styled.h3`
& > i {
    color: red;
 font-size: 4rem;
 
}

`;

const ModalDetailsMovie = () => {

    const fetchContext = useContext(FetchContext);

    let history = useHistory();

    let back = e => {
        e.stopPropagation();
        history.goBack();
        // fetchContext.clearPhoto();
    };
    const handleClick = () => {
        console.log('ble', fetchContext.movie)
        fetchContext.addFavoriteMovie(fetchContext.movie)
    };

    return (
        <StylesModal>
            {fetchContext.loading ? <div><Spinner /></div> :
                <StylesContainerData>
                    <h1>Original title: "{fetchContext?.movie?.original_title}" </h1>
                    <h4>Description: <p>{fetchContext?.movie?.overview}</p></h4>
                    <p>Release date: {fetchContext?.movie?.release_date}</p>
                    <p>Spoken languages: {fetchContext?.movie?.spoken_languages.map(language => language?.english_name)}</p>
                    <StylesH3 >Add a favorite movie  <i className="far fa-star"></i></StylesH3>
                    <StylesH3>This is my favorite movie <i onClick={handleClick} className="fas fa-star"></i></StylesH3>
                    <button type="button" onClick={back}>Close </button>
                </StylesContainerData>
            }
        </StylesModal>
    );
};

export default ModalDetailsMovie;
