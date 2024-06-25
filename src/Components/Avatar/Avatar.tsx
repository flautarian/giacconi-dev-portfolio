import React, { useEffect, useState } from "react";
import "./Avatar.css"
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import { isMobile } from "react-device-detect";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { GrDocument } from "react-icons/gr";

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
        <div id="avatar-container" className={`flex max-2xl:flex-row max-sm:flex-col justify-around items-center`}>
            <div id="avatar-img-container" className={`w-[60dvw] max-sm:w-[50dvw] ml-[-25dvw] max-sm:ml-[0dvw] bg-base-100 max-sm:bg-inherit rounded-full shadow-xl ${!isMobile ? 'translation-img-animation' : 'mt-[20dvh]'}`}>
                <div className={`w-[100dvw] max-sm:w-[50dvw] ml-[-25dvw] max-sm:ml-[0dvw] bg-base-100 max-sm:bg-inherit rounded-full shadow-xl`}>
                </div>
                <div id="avatar" className="avatar float-end max-sm:w-[50dvw]">
                    <div className="min-w-xs max-w-xs rounded-full scale-hover" style={{ boxShadow: `${shadow.x}px ${shadow.y}px ${shadow.blur}px rgba(0, 0, 0, 0.2)` }}>
                        <img src={props.img} onClick={() => window.open(props.linkedInHref || "", "_blank")} />
                    </div>
                </div>
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