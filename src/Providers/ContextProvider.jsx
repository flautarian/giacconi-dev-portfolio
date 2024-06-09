import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create the context
const MainContext = createContext();

// Create a provider component
const MainProvider = ({ children }) => {
    const [headerStatus, setHeaderStatus] = useState(0);
    const [isdark, setIsdark] = useState(localStorage.getItem('isdark') === "true" ? true : false);

    const ctx = { headerStatus, setHeaderStatus, isdark, setIsdark };

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
