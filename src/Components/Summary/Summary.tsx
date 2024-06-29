import React from "react";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import "./Summary.css"
import AvatarImage from "../AvatarImage/AvatarImage";


const Certifications = (props) => {

    const { t } = useTranslation('home');

    return (
        <div id="avatar-container" className={`flex flex-col justify-start items-center`}>
            <div className="mt-[10dvh]">
                <AvatarImage img={props.img} url={props.linkedInUrl} />
            </div>
            <div className="text-center avatar-desc-animation flex flex-col items-center mt-[10dvh]">
                <div className="max-w-xl max-sm:max-w-[75dvw] p-4 bg-base-100 rounded-xl shadow-xl">
                    <h1 className="text-2xl max-sm:text-base">{`${t("_summary_label")}`}</h1>
                </div>
            </div>
        </div>
    )
}

Certifications.proptypes = {
    img: PropTypes.string
}

export default Certifications;