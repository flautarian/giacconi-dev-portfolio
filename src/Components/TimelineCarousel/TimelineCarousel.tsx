import React, { useCallback, useContext, useState } from "react";
import PropTypes from 'prop-types';
import Timeline from "../Timeline/Timeline";
import VerticalCarousel from "../VerticalCarousel/VerticalCarousel";
import { config } from "react-spring";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import formatDate from "../../Utils/utils";
import "./TimelineCarousel.css";
import { MainContext } from "../../Providers/ContextProvider";

const TimelineCarousel = (props) => {

    const { t, i18n } = useTranslation('home');

    const { headerStatus } = useContext(MainContext);

    const responsive = {
        superLargeDesktop: {
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
            items: 1,
        }
    };

    const [state, setState] = useState({
        index: 0,
        key: "vertical-carousel-state",
        prevPropsGoToSlide: 0,
        newSlide: false,
        offsetRadius: 3,
        showNavigation: false,
        config: config.gentle,
        animationState: { tension: 120, friction: 14, key: "animation-state" }
    });

    const updateState = useCallback((newIndex) => {
        setState({
            ...state,
            index: newIndex
        });
    },
        [headerStatus],
    )

    return (
        <>
            {/* MOBILE */}
            <MobileView style={{ height: "100dvh", width: "100dvw" }}>
                <Carousel responsive={responsive} className="size-full carousel" draggable arrows={!isMobile}>
                    {props.values.map((c: any, i: number) => (
                        <div key={`${c.name}-${i}`} className=" m-5 card bg-base-100 shadow-xl certification max-h-[75dvh]" >
                            <div className="card size-full bg-base-200 shadow-xl">
                                <div className="card-body pt-1 flex flex-col">
                                    {/* BASIC INFO */}
                                    <div className="pb-2 mt-5 text-xs">
                                        <p><span className="text-primary">{t("_name")}: </span>{c.name[i18n.language]}</p>
                                        <p><span className="text-primary">{t("_location")}: </span>{c.location}</p>
                                        <p><span className="text-primary">{t("_position")}: </span>{c.position}</p>
                                        <p><span className="text-primary">{t("_service_time")}: </span> {t("_from")} {formatDate(c.dateFrom)} - {!c.dateTo ? t("_continue_working") : `${t("_to")} ${formatDate(c.dateTo)}`}</p>
                                    </div>
                                    <hr/>
                                    {/* ADVANCED-INFO */}
                                    <div className="pt-0 text-xs overflow-auto max-h-[30dvh]">
                                        <p className="text-primary">{t("_responsabilities")}:</p>
                                        <ul className="overflow-auto list-disc pl-10">
                                            {c.responsabilities.map((responsability, rIndex) => <li className={`mt-${rIndex > 0 ? 5 : 0}`} key={`${c.enterprise}-r-${rIndex}`}>{t(responsability[i18n.language])}</li>)}
                                        </ul>
                                    </div>
                                    <hr />
                                    <div className="overflow-auto max-h-[20dvh]">
                                        <p className="text-primary mb-2">{t("_techs_and_skills")}:</p>
                                        <div className="card-actions">
                                            {c.tags.map((tag, tIndex) => <div key={`${c.enterprise}-t-${tIndex}`} className="badge badge-outline text-xs">{tag}</div>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>))}
                </Carousel>
            </MobileView>
            {/* OTHER */}
            <BrowserView className="flex flex-row">
                <div className='flex flex-row ' style={{ height: "100dvh", width: "100dvw" }}>
                    <VerticalCarousel
                        key={"values-carousel"}
                        slides={props.values}
                        state={state}
                        updateState={updateState} />
                    <Timeline state={state} values={props.values} onClickExperience={updateState}></Timeline>

                </div>
            </BrowserView>
        </>
    );
}

TimelineCarousel.proptypes = {
    values: PropTypes.arrayOf(PropTypes.object)
}

export default TimelineCarousel;