import React, { lazy, useContext } from 'react'
import { useHistory, } from 'react-router-dom';

import { StylesModal, StylesContainerData } from "../../styles/styleComponents/StyledModalDetailsMovie";

import FetchContext from "../../context/fetch/fetchContext";

const Spinner = lazy(() => import('../modules/spinner/Spinner'));

const ModalDetailsMovie = () => {

    const fetchContext = useContext(FetchContext);

    let history = useHistory();

    let back = e => {
        e.stopPropagation();
        history.goBack();
        // fetchContext.clearPhoto();
    };

    return (
        <StylesModal onClick={back}>
            {fetchContext.loading ? <div><Spinner /></div> :
                <>
                    <h1>Original title {fetchContext?.movie?.original_title}</h1>
                    <p>overview{fetchContext?.movie?.overview}</p>
                    <p>release date{fetchContext?.movie?.release_date}</p>
                    <p>spoken_languages{fetchContext?.movie?.spoken_languages.map(language=> language?.english_name)}</p>
                    <button type="button" onClick={back}>
                        Close
          </button>
                </>
            }
        </StylesModal>
    );
};

export default ModalDetailsMovie;
