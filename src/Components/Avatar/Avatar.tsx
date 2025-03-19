import React, { useEffect, useState } from "react";
import "./Avatar.css"
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import { isMobile } from "react-device-detect";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { GrDocument } from "react-icons/gr";
import AvatarImage from "../AvatarImage/AvatarImage";

const Avatar = (props) => {

    const { t, i18n } = useTranslation(['home']);

    return (
        <div id="avatar-container" className={`flex max-2xl:flex-row max-sm:flex-col justify-around items-center`}>
            <div id="avatar-img-container" className={`w-[60dvw] max-sm:w-[50dvw] ml-[-25dvw] max-sm:ml-[0dvw] bg-base-100 max-sm:bg-inherit rounded-full shadow-xl ${!isMobile ? 'translation-img-animation' : 'mt-[20dvh]'}`}>
                <AvatarImage img={props.img} url={props.linkedInUrl} maxSize={isMobile ? "50dvw" : "25dvw"} alt="Go to my LikedIn page" title="Go to my LikedIn page" />
            </div>
            <div className="max-2xl:text-left max-sm:text-center avatar-desc-animation mr-[5dvw] max-sm:mr-[0dvw] flex flex-col items-center">
                <div className="max-w-xl p-5 bg-base-100 rounded-xl shadow-xl">
                    <h1 className="text-5xl max-sm:text-2xl font-bold">{`${props.name} ${props.surnames}`}</h1>
                    <p className="py-4 whitespace-pre-wrap">{props.job}</p>
                    {
                        !isMobile &&
                        <p className="py-4 whitespace-pre-wrap">{props.description}</p>
                    }
                </div>

                <div className="h-[10dvh] w-[25dvw] max-sm:w-[70dvw] mt-5 p-5 bg-base-100 rounded-xl shadow-xl flex flex-row justify-around items-center">
                    <FaLinkedin title={t("linkedin_label")} className="scale-hover" size={isMobile ? 32 : 48} onClick={() => window.open(props.linkedInUrl, "_blank")} />
                    <FiMail title={t("mail_label")} className="scale-hover" size={isMobile ? 32 : 48} onClick={() => window.open("mailto:" + props.emailUrl, "_blank")} />
                    <FaGithub title={t("github_label")} className="scale-hover" size={isMobile ? 32 : 48} onClick={() => window.open(props.githubUrl, "_blank")} />
                    <GrDocument title={t("cv_label")} className="scale-hover" size={isMobile ? 32 : 48} onClick={() => window.open(props.cv, "_blank")} />
                </div>
            </div>
        </div>
    )
}

Avatar.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    surnames: PropTypes.string,
    job: PropTypes.string,
    description: PropTypes.string,
    linkedInUrl: PropTypes.string,
    emailUrl: PropTypes.string,
    githubUrl: PropTypes.string,
    cv: PropTypes.string,
}

export default Avatar;