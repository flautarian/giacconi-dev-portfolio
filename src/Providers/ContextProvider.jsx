import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import resume from '../Models/Resume';

const MainContext = createContext();

const MainProvider = ({ children }) => {
    const [headerStatus, setHeaderStatus] = useState(0);

    const [isdark, setIsdark] = useState(localStorage.getItem('isdark') === "true" ? true : false);

    const [thresholds, setThresholds] = useState([9999, 400, 200, 100, 0]);

    const [effects, setEffects] = useState([""]);

    const ctx = { headerStatus, setHeaderStatus, isdark, setIsdark, thresholds, setThresholds, effects };

    useEffect(() => {
        if (resume.sections != null) {
            setThresholds(
                [...resume.sections.map((section, $index) => (resume.sections.length - $index) * 100), 0]
            );
            
            setEffects([{name: "", color: "rgba(125, 0, 255, 1)"}, ...resume.sections.map(m=>{return {name: m.enteringEffect, color: m.neonMenuColor};})]);
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
