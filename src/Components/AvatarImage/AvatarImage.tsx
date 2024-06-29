import React, { useEffect, useRef, useState } from "react";
import "./AvatarImage.css"
import PropTypes from 'prop-types';

const AvatarImage = (props) => {

    const [shadow, setShadow] = useState({ x: 0, y: 0, blur: 20 });

    const clampNumber = (num: number, min: number, max: number) =>
        Math.max(Math.min(num, Math.max(min, max)), Math.min(min, max));

    const pathRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const maxDistance = 20;
            const rect = pathRef.current ? pathRef.current.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 };
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
        <div id="avatar-img" ref={pathRef} className="avatar float-end max-sm:w-[50dvw]">
            <div className="min-w-xs max-w-xs rounded-full scale-hover" style={{ boxShadow: `${shadow.x}px ${shadow.y}px ${shadow.blur}px rgba(0, 0, 0, 0.2)` }}>
                <img src={props.img} onClick={() => window.open(props.url || "", "_blank")} />
            </div>
        </div>
    )
}

AvatarImage.propTypes = {
    img: PropTypes.string,
    url: PropTypes.string,
}

export default AvatarImage;