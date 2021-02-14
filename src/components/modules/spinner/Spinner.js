import React from 'react';

import {StyledImg} from '../../../styles/styleComponents/StyledSpinner';

import spinner from './spinner.gif';


const Spinner = () => {
    return (
        <>
            <StyledImg src={spinner} loading="lazy" alt="loading..." />
        </>
    );
};

export default Spinner;
