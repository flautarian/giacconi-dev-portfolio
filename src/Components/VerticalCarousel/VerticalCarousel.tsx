import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./VerticalCarousel.css";
import Slide from "../Slide/Slide";
import { useTranslation } from "react-i18next";
import formatDate from "../../Utils/utils";

function mod(a, b) {
  return ((a % b) + b) % b;
}

const VerticalCarousel = (props) => {

  const defaultProps = {
    offsetRadius: 2,
    animationConfig: { tension: 120, friction: 14 },
  };

  const { animationConfig, offsetRadius, showNavigation } = props.state;

  const { t, i18n } = useTranslation(['home']);

  useEffect(() => {
    document.addEventListener("keyup", keyEventListener);
    document.addEventListener("keydown", preventScrollEventListener);
    return () => {
      document.removeEventListener("keyup", keyEventListener);
      document.removeEventListener("keydown", preventScrollEventListener);
    };
  }, [props.state]);

  useEffect(() => {
    moveSlide(0);
  }, [props.state?.index]);

  const preventScrollEventListener = (event) => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.code)) {
      event.preventDefault();
    }
  }

  const keyEventListener = (event) => {
    if (event.isComposing || event.keyCode === 229) return;
    if (event.key === "ArrowUp") moveSlide(-1);
    else if (event.key === "ArrowDown") moveSlide(1);
  };

  const modBySlidesLength = (index) => {
    return mod(index, props.slides.length);
  };

  const moveSlide = (direction) => {
    props.setState({
      ...props.state,
      index: modBySlidesLength(props.state.index + direction),
    });
  };

  const getPresentableSlides = () => {
    const { slides } = props;
    const { index } = props.state;
    let { offsetRadius } = props.state;
    const presentableSlides = new Array();
    for (let i = index; i < index + offsetRadius; i++) {
      if (!presentableSlides.includes(slides[modBySlidesLength(i)]))
        presentableSlides.push(slides[modBySlidesLength(i)]);
    }
    return presentableSlides;
  };

  return (
    <div className="flex flex-col justify-around size-full">
      <div className="relative flex justify-center">
        {getPresentableSlides().map((slide, presentableIndex) => (
          <Slide
            key={slide.key}
            content={slide.content}
            moveSlide={moveSlide}
            offsetRadius={offsetRadius}
            index={presentableIndex}
            animationConfig={animationConfig || defaultProps.animationConfig}
          >
            <div className="card size-full bg-base-200 shadow-xl">
              {/* BASIC INFO */}
              <div className="card-body pt-0 pb-2 mt-10">
                <p><span className="text-primary">{t("_name")}: </span>{slide.name[i18n.language]}</p>
                <p><span className="text-primary">{t("_location")}: </span>{slide.location}</p>
                <p><span className="text-primary">{t("_position")}: </span>{slide.position}</p>
                <p><span className="text-primary">{t("_service_time")}: </span> {t("_from")} {formatDate(slide.dateFrom)} - {!slide.dateTo ? t("_continue_working") : `${t("_to")} ${formatDate(slide.dateTo)}`}</p>
              </div>

              {/* ADVANCED-INFO */}
              <div className="card-body pt-0  pb-2">
                <p className="text-primary">{t("_description")}:</p>
                <p className="max-h-[20vh] h-[10vh] overflow-auto">{slide.description[i18n.language]}</p>
                <p className="text-primary">{t("_responsabilities")}:</p>
                <ul className="max-h-[20vh] h-[15vh] overflow-auto list-disc pl-10 emoji-star">
                  {slide.responsabilities.map((responsability, rIndex) => <li className={`mt-${rIndex > 0 ? 5 : 0}`} key={`${slide.enterprise}-r-${rIndex}`}>{t(responsability[i18n.language])}</li>)}
                </ul>
                <hr />
                <div>
                  <p className="text-primary mb-2">{t("_techs_and_skills")}:</p>
                  <div className="card-actions mb-2">
                    {slide.tags.map((tag, tIndex) => <div key={`${slide.enterprise}-t-${tIndex}`} className="badge badge-outline">{tag}</div>)}
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        ))}
      </div>
      {showNavigation && (
        <div className="navigation-buttons">
          <div className="nav-btn" onClick={() => moveSlide(1)}>
            &#8593;
          </div>
          <div className="nav-btn" onClick={() => moveSlide(-1)}>
            &#8595;
          </div>
        </div>
      )}
    </div>
  );
};

VerticalCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      content: PropTypes.any,
    })
  ).isRequired,
  state: PropTypes.object,
  setState: PropTypes.func
};

export default VerticalCarousel;
