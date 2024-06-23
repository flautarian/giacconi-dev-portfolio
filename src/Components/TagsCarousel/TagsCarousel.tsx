import React, { useCallback, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import "./TagsCarousel.css"
import { DiJavascript, DiMongodb, DiPython } from "react-icons/di";
import { FaAngular, FaDocker, FaFlask, FaJava, FaReact, FaWifi, FaWindowMaximize } from "react-icons/fa6";
import { isMobile } from "react-device-detect";
import { SiGunicorn, SiLatex, SiRender, SiSpringboot, SiTypescript } from "react-icons/si";
import { TbJson } from "react-icons/tb";
import { IoLanguage } from "react-icons/io5";
import { BsGithub, BsWindow } from "react-icons/bs";


const TagsCarousel = (props) => {

    const { t } = useTranslation('home');

    const [currentValue, setCurrentValue] = useState(0);

    const updateCurrentValue = useCallback(
        (previousSlide, { currentSlide }) => {
            console.log(currentSlide % props.values.length);
            setCurrentValue(currentSlide % props.values.length);
        },
        [currentValue],
    )


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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
        <div className="flex flex-row" style={{ height: "100dvh", width: "100dvw" }}>
            <Carousel responsive={responsive} focusOnSelect={true} className="w-[50dvw] mt-[5dvh] max-sm:w-[100dvw] h-[80dvh]" draggable arrows={!isMobile} afterChange={updateCurrentValue} infinite={true}>
                {
                    props.values.map((c: any, i: number) => (
                        <div className="flex flex-col items-center justify-around">
                            {/*TITLE*/}
                            <div className="card h-[10dvh] w-[25dvw] max-sm:w-[80dvw] bg-base-200 shadow-xl flex justify-center items-center" key={`${c.name[i18n.language]}-title-${i}`}>
                                <span className="inline-block text-3xl align-c" key={`${c.name[i18n.language]}-title`}>
                                    {c.name[i18n.language]}
                                </span>
                            </div>
                            {/*BODY*/}
                            <div className="card h-[55dvh] max-sm:h-[60dvh] w-[35dvw] max-sm:w-[80dvw] mt-5 bg-base-200 shadow-xl" key={`${c.name["en"]}-${i}`}>
                                <div className="card-body pt-0 pb-2 mt-10 max-sm:text-xs">
                                    <p><span className="text-primary">{t("_description")}: </span>{c.purpose[i18n.language]}</p>
                                    <p><span className="text-primary">{t("_position")}: </span>{c.description[i18n.language]}</p>
                                </div>
                            </div>
                            {/*LINKS*/}
                            {(!!c.github || !!c.webUrl) &&
                                <div className="card bg-base-300 w-[15dvw] flex flex-row justify-around items-center p-5 mt-2">
                                    {!!c.github && <BsGithub className="clicable-content" size={32} onClick={() => window.open(c.github, "_blank")} />}
                                    {!!c.webUrl && <BsWindow className="clicable-content" size={32} onClick={() => window.open(c.webUrl, "_blank")} />}
                                </div>
                            }

                        </div>
                    ))
                }
            </Carousel>
            {!isMobile &&
                <div className="w-[25dvw] m-[5dvw] mt-[6.25dvh] h-[80dvh]">
                    {/*TITLE*/}
                    <div className="card h-[10dvh] w-[25dvw] bg-base-200 shadow-xl flex justify-center items-center">
                        <span className="inline-block text-3xl align-c">
                            {t("_stack_used")}
                        </span>
                    </div>
                    <span className="mt-[2.5dvh] grid grid-cols-2 gap-4 justify-center">
                        {
                            !!props.values[currentValue] && props.values[currentValue].stack.map((element) => {
                                return (
                                    <span className="card h-[15dvh] max-w-[10dvw] bg-base-200 shadow-xl flex justify-center items-center clicable-content" key={`${props.values[currentValue].name["en"]}-${element}`} title={`${element}`}>
                                        {element === "python" && <DiPython size={72} onClick={() => window.open("https://www.python.org/", "_blank")} />}
                                        {element === "flask" && <FaFlask size={64} onClick={() => window.open("https://flask.palletsprojects.com/en/3.0.x/", "_blank")} />}
                                        {element === "mongo" && <DiMongodb size={72} onClick={() => window.open("https://www.mongodb.com/", "_blank")} />}
                                        {element === "gunicorn" && <SiGunicorn size={72} onClick={() => window.open("https://gunicorn.org/", "_blank")} />}
                                        {element === "render" && <SiRender size={48} onClick={() => window.open("https://render.com/", "_blank")} />}
                                        {element === "react" && <FaReact size={72} onClick={() => window.open("https://react.dev/", "_blank")} />}
                                        {element === "angular" && <FaAngular size={72} onClick={() => window.open("https://angular.io/", "_blank")} />}
                                        {element === "tkinter" && <FaWindowMaximize size={72} onClick={() => window.open("https://docs.python.org/3/library/tkinter.html", "_blank")} />}
                                        {element === "json" && <TbJson size={72} onClick={() => window.open("https://www.json.org/json-en.html", "_blank")} />}
                                        {element === "latex" && <SiLatex size={72} onClick={() => window.open("https://www.latex-project.org/", "_blank")} />}
                                        {element === "typescript" && <SiTypescript size={72} onClick={() => window.open("https://www.typescriptlang.org/", "_blank")} />}
                                        {element === "javascript" && <DiJavascript size={72} onClick={() => window.open("https://www.javascript.com/", "_blank")} />}
                                        {element === "i18n" && <IoLanguage size={72} onClick={() => window.open("https://www.javascript.com/", "_blank")} />}
                                        {element === "rest" && <FaWifi size={72} onClick={() => window.open("https://www.javascript.com/", "_blank")} />}
                                        {element === "springboot" && <SiSpringboot size={72} onClick={() => window.open("https://spring.io/projects/spring-boot", "_blank")} />}
                                        {element === "java" && <FaJava size={72} onClick={() => window.open("https://www.java.com", "_blank")} />}
                                        {element === "docker" && <FaDocker size={72} onClick={() => window.open("https://www.docker.com/", "_blank")} />}
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