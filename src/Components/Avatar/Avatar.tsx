import React, { useEffect, useState } from "react";
import "./Avatar.css"
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

const Avatar = (props) => {

    const { t } = useTranslation(['home']);

    const [shadow, setShadow] = useState({ x: 0, y: 0, blur: 20 });

    const clampNumber = (num: number, min: number, max: number) =>
        Math.max(Math.min(num, Math.max(min, max)), Math.min(min, max));

    useEffect(() => {
        const handleMouseMove = (e) => {
            const maxDistance = 20;
            const rect = document.getElementById('avatar')?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const distance = Math.sqrt(x * x + y * y) / 10;
            setShadow({
                x: clampNumber(x / 10 * -1, -maxDistance, maxDistance),
                y: clampNumber(y / 10 * -1, -maxDistance, maxDistance),
                blur: clampNumber(distance, -maxDistance, maxDistance)
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <div id="avatar-container" className="flex flex-row justify-around items-center">
            <div id="avatar" className="avatar">
                <div className="min-w-xs max-w-xs rounded-full" style={{ boxShadow: `${shadow.x}px ${shadow.y}px ${shadow.blur}px rgba(0, 0, 0, 0.2)` }}>
                    <img src={props.img} />
                </div>
            </div>
            {/* <kbd className="kbd mt-10">{t('_welcome_label')}</kbd> */}
            <div className="hero-content text-left">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">{`${props.name} ${props.surnames}`}</h1>
                    <p className="py-8 whitespace-pre-wrap">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

Avatar.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    surnames: PropTypes.string,
    description: PropTypes.string,
}

export default Avatar;