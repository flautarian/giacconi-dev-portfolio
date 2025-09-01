import React, { useContext, useEffect, useRef } from "react";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import "./Summary.css"
import AvatarImage from "../AvatarImage/AvatarImage";
import { isMobile } from "react-device-detect";
import { MainContext } from "../../Providers/ContextProvider";


const Summary = (props) => {

    const { t } = useTranslation('home');

    const rootRef = useRef<HTMLDivElement>(null);

    const { isdark } = useContext(MainContext);

    useEffect(() => {
        if (rootRef.current && !!props.backgroundLights) {
            let lightColorStart = props.backgroundLights["lightColorStart"];
            let lightColorEnd = props.backgroundLights["lightColorEnd"];
            let darkColorStart = props.backgroundLights["darkColorStart"];
            let darkColorEnd = props.backgroundLights["darkColorEnd"];

            rootRef.current.style.background =
                `linear-gradient(90deg, ${lightColorStart}, ${lightColorEnd}, ${darkColorStart}, ${darkColorEnd})`;
            rootRef.current.style.backgroundSize = '400% 400%';
        }
    }, []);

    return (
        <div ref={rootRef} id="avatar-container" className={`flex flex-col justify-evently items-center ${isdark ? 'gradient-dark' : 'gradient-light'}`}>
            <div className="mt-10">
                <AvatarImage img={props.img} url={props.linkedInUrl} maxSize={isMobile ? "50dvw" : "25dvw"} alt="Go to my LikedIn page" title="Go to my LikedIn page" />
            </div>
            <div className="text-center avatar-desc-animation flex flex-col items-center mt-10 drop-shadow-[0px_7px_10px_rgba(0,0,0,0.7)]">
                <div className="max-w-2xl max-sm:max-w-[75dvw] p-4 bg-base-100 rounded-xl shadow-xl">
                    <h1 className="text-2xl max-sm:text-base">{`${t("_summary_label")}`}</h1>
                </div>
            </div>
        </div>
    )
}

Summary.proptypes = {
    img: PropTypes.string
}

export default Summary;