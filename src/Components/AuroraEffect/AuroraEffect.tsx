import React from 'react';
import './AuroraEffect.css';
import PropTypes from 'prop-types';

const AuroraEffect = (props) => (
    <div className="neon-light-container">
        <div className="neon-light" style={{ background: props.color }}></div>
    </div>
);

AuroraEffect.proptypes = {
    img: PropTypes.string
}

export default AuroraEffect;