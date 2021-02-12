import React from 'react';

import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <>
            <img src={spinner} loading="lazy" alt="loading..." />
        </>
    );
};

export default Spinner;
