import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import exampleResume from '../Models/Resume';

// Create the context
const MainContext = createContext();

// Create a provider component
const MainProvider = ({ children }) => {
    const [headerStatus, setHeaderStatus] = useState(0);

    const [isdark, setIsdark] = useState(localStorage.getItem('isdark') === "true" ? true : false);

    const [thresholds, setThresholds] = useState([9999, 400, 200, 100, 0]);

    const ctx = { headerStatus, setHeaderStatus, isdark, setIsdark, thresholds, setThresholds };

    useEffect(() => {
        if (exampleResume.sections != null) {
            setThresholds(
                [...exampleResume.sections.map((section, $index) => (exampleResume.sections.length - $index) * 100), 0]
            );
        }
    }, [])


    return (
        <MainContext.Provider value={ctx}>
            {children}
        </MainContext.Provider>
    );
};

MainProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { MainContext, MainProvider };
