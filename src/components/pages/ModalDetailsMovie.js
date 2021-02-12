import React, { lazy, useContext } from 'react'
import { useHistory, } from 'react-router-dom';

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
        <div onClick={back}>
            {fetchContext.loading ? <div><Spinner /></div> :
             
                    <button type="button" onClick={back}>
                        Close
          </button>
              
            }
        </div>
    );
};

export default ModalDetailsMovie;
