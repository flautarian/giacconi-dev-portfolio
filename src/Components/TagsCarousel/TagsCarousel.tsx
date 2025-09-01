import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import "./TagsCarousel.css"
import { isMobile } from "react-device-detect";
import { BsGithub, BsWindow } from "react-icons/bs";
import Utils from "../../Utils/utils";
import { MainContext } from "../../Providers/ContextProvider";


const TagsCarousel = (props) => {

    const { t } = useTranslation('home');

    const [iconsActive, setIconsActive] = useState(true);

    const [currentValue, setCurrentValue] = useState(0);

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

    const updateCurrentValue = useCallback(
        (previousSlide, { currentSlide }) => {
            setCurrentValue(currentSlide % props.values.length);
            setIconsActive(true);
        },
        [currentValue],
    )


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const { i18n } = useTranslation(['home']);

    return (
        <div ref={rootRef} className={`flex flex-row ${isdark ? 'gradient-dark' : 'gradient-light'}`} style={{ height: "100dvh", width: "100dvw" }}>
            <Carousel responsive={responsive} className="w-[50dvw] max-sm:w-[100dvw] max-sm:mt-[0dvh] h-[100dvh]" containerClass="carousel-container" draggable arrows={!isMobile} beforeChange={(previousSlide, { currentSlide }) => setIconsActive(false)} afterChange={updateCurrentValue}>
                {
                    props.values.map((c: any, i: number) => (
                        <div className="flex flex-col items-center justify-start align-start" key={`${c.name[i18n.language]}-container-${i}`}>
                            {/*TITLE*/}
                            <div className="card h-[7dvh] w-[25dvw] max-sm:w-[70dvw] bg-base-200 flex justify-center items-center drop-shadow-[0px_7px_10px_rgba(0,0,0,0.7)]" key={`${c.name[i18n.language]}-title-${i}`}>
                                <span className="inline-block text-3xl max-sm:text-xl align-c" key={`${c.name[i18n.language]}-title`}>
                                    {c.name[i18n.language]}
                                </span>
                            </div>
                            {/*BODY*/}
                            <div className="card h-fit max-h-[60dvh] max-sm:h-[60dvh] w-[35dvw] max-sm:w-[90dvw] mt-5 max-sm:mt-[2dvw] bg-base-200 drop-shadow-[0px_7px_10px_rgba(0,0,0,0.7)]" key={`${c.name["en"]}-${i}`}>
                                <div className="card-body pt-0 pb-2 mt-2 max-sm:text-xs">
                                    <p className="text-balance hyphens-auto"><span className="text-primary text-xl">{t("_motivation")}: </span>{c.purpose[i18n.language]}</p>
                                    <p className="text-balance hyphens-auto mt-2"><span className="text-primary text-xl">{t("_description")}: </span>{c.description[i18n.language]}</p>
                                </div>
                            </div>
                            {/*LINKS*/}
                            {(!!c.github || !!c.webUrl) &&
                                <div className="card bg-base-300 drop-shadow-[0px_7px_10px_rgba(0,0,0,0.7)] w-fit gap-x-5 max-sm:w-[45dvw] flex flex-row justify-around items-center p-5 max-sm:p-2 mt-2">
                                    {!!c.github && <BsGithub className="clicable-content" size={32} onClick={() => window.open(c.github, "_blank")} />}
                                    {!!c.webUrl && <BsWindow className="clicable-content" size={32} onClick={() => window.open(c.webUrl, "_blank")} />}
                                </div>
                            }

                        </div>
                    ))
                }
            </Carousel>
            {!isMobile &&
                <div className={`w-[25dvw] m-[5dvw] mt-[5dvh] h-[80dvh] max-h[80dvh] overflow-auto flex flex-col items-center`}>
                    {/*TITLE*/}
                    <div className="card h-[7dvh] w-[25dvw] bg-base-200 drop-shadow-[0px_5px_5px_rgba(0,0,0,0.7)] flex justify-center items-center">
                        <span className="inline-block text-3xl align-c">
                            {t("_stack_used")}
                        </span>
                    </div>
                    <span className={`mt-[2.5dvh] w-full grid grid-cols-2 gap-6`}>
                        {
                            !!props.values[currentValue] && props.values[currentValue].stack.map((element) => {
                                return (
                                    <span
                                        className={`card h-[15dvh] bg-base-200 drop-shadow-[0px_5px_5px_rgba(0,0,0,0.7)] flex justify-center items-center clicable-content ${iconsActive ? "fadeIn" : "fadeOut"}`}
                                        key={`${props.values[currentValue].name["en"]}-${element}`}
                                        title={element}
                                        onClick={() => window.open(Utils.iconMap[element]?.url, "_blank")}
                                    >
                                        {Utils.iconMap[element]?.component}
                                    </span>
                                );
                            })
                        }
                    </span>
                </div>
            }
        </div>
    );
}

TagsCarousel.proptypes = {
    values: PropTypes.arrayOf(PropTypes.object)
}

export default TagsCarousel;