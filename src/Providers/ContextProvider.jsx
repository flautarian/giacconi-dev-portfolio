import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create the context
const MainContext = createContext();

// Create a provider component
const MainProvider = ({ children }) => {
    const [headerStatus, setHeaderStatus] = useState(0);

    const ctx = { headerStatus, setHeaderStatus };

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
