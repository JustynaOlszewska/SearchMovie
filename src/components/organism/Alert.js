import React, { useContext } from 'react';

import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
    const alertContext = useContext(AlertContext);
    
    return (
        alertContext.alert !== null && (
            <p>
                {alertContext?.alert?.alert?.msg}
            </p>
        )
    );
};

export default Alert;