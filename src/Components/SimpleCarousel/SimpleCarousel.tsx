import React, { useContext, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import "./SimpleCarousel.css"
import { isMobile } from "react-device-detect";
import { MainContext } from "../../Providers/ContextProvider";


const SimpleCarousel = (props) => {

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
        <div ref={rootRef} className={`${!isMobile ? "flex" : ""} ${isdark ? 'gradient-dark' : 'gradient-light'}`} style={{ height: "100dvh", width: "100dvw" }}>
            <Carousel responsive={responsive} focusOnSelect={true} draggable infinite={true} arrows={!isMobile} className={`${!isMobile ? "size-full" : ""}`}>
                {props.values.map((c: any, i: number) => (
                    <div className="card m-5 bg-base-100 drop-shadow-[0px_7px_10px_rgba(0,0,0,0.7)] h-[60dvh] max-sm:h-[80dvh] certification" key={`${c.name}-${i}`}>
                        <figure className="w-[100%] h-[30dvh]">
                            <img src={c.img} alt={c.name[i18n.language]} className="w-[100%] h-[35dvh] object-cover" />
                        </figure>
                        <div className="p-5 flex flex-col h-[30dvh]">
                            <h2 className="card-title">{c.name[i18n.language]}</h2>
                            <p className="text-balance hyphens-auto">{c.description[i18n.language]}</p>
                            {
                                !!c.buttons && <div className="w-full flex justify-end h-[5dvh] mt-5">
                                    <div className="w-[50%] flex flex-row justify-around">
                                        {
                                            c.buttons.map((button, $index) => (
                                                <a key={`${c.name[i18n.language]}-${button.name}-${$index}`} href={button.url} target="_blank" rel="noopener noreferrer" className={`${button.css}`}>{t(button.label)}</a>
                                            ))
                                        }
                                    </div>
                                </div>
                            }
                        </div>

                    </div>))}
            </Carousel>
        </div>
    );
}

SimpleCarousel.proptypes = {
    values: PropTypes.arrayOf(PropTypes.object)
}

export default SimpleCarousel;