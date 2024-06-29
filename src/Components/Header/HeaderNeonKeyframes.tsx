import React from 'react';
import './NeonLightEffect.css';

interface NeonLightEffectProps {
    color: string; // The color prop should be in the format 'rgba(R, G, B, A)'
}
const NeonLightEffect: React.FC<NeonLightEffectProps> = ({ color }) => {
    const randomKeyframes = `
      @keyframes randomNeon {
        0% { box-shadow: 0 0 0px ${color}, 0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px ${color}; }
        
        50% { box-shadow: 0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}, 0 0 40px ${color}; }
        
        100% { box-shadow: 0 0 0px ${color}, 0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px ${color}; }
      }
    `;

    return (
        <style>
            {randomKeyframes}
        </style>
    );
};

export default NeonLightEffect;