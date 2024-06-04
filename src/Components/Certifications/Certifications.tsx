import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import { Certificate } from "../../Models/Resume";
import "./Certifications.css"


const Certifications = (props) => {

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
                <div className="card w-96 bg-base-100 shadow-xl" key={`${c.name}-${i}`}>
                    <figure>
                        <img src={c.img} alt={c.name[i18n.language]} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{c.name[i18n.language]}</h2>
                        <p>{c.description[i18n.language]}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
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