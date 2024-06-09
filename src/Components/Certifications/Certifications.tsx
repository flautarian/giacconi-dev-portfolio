import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import { Certificate } from "../../Models/Resume";
import "./Certifications.css"


const Certifications = (props) => {

    const { t } = useTranslation('home');

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const { i18n } = useTranslation(['home']);

    return (
        <Carousel responsive={responsive} className="carousel">
            {props.certifications.map((c: Certificate, i: number) => (
                <div className="card w-96 bg-base-100 shadow-xl h-[60vh] certification" key={`${c.name}-${i}`}>
                    <figure className="w-[100%] h-[30vh]">
                        <img src={c.img} alt={c.name[i18n.language]} className="w-[100%] h-[35vh] object-cover"/>
                    </figure>
                    <div className="p-5 flex flex-col h-[30vh]">
                        <h2 className="card-title">{c.name[i18n.language]}</h2>
                        <p>{c.description[i18n.language]}</p>
                    </div>
                    <div className="w-full flex justify-end h-[5vh]">
                        <div className="w-[50%] flex flex-row justify-between">
                            {c.url.length > 0 && <a href={c.url} target="_blank" rel="noopener noreferrer" className="btn btn-xs btn-primary">{t("_go_to_course")}</a>}
                            {c.urlCert.length > 0 && <a href={c.urlCert} target="_blank" rel="noopener noreferrer" className="btn btn-xs btn-secondary">{t("_go_to_certificate")}</a>}
                        </div>
                    </div>
                </div>))}
        </Carousel>
    );
}

Certifications.proptypes = {
    certifications: PropTypes.arrayOf(PropTypes.object)
}

export default Certifications;