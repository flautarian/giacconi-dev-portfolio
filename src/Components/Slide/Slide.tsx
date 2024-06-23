import React from "react";
import { Spring } from "react-spring/renderprops";
import PropTypes from "prop-types";
import "./Slide.css";

const Slide = (props) => {

  const distanceFactor = props.index == 0 ? 1 : 1 - Math.abs((1 / (props.offsetRadius)) * props.index);

  // FIRST TRANSLATION
  let translate = {
    x: -1 * props.index,
    y: -42 - (2 * props.index),
  };

  // MOVEMENT EVENTS
  if (props.index === 0 && props.down) {
    translate.y += props.delta[1] / (props.offsetRadius + 1);
    if (translate.y > -40) {
      props.moveSlide(-1);
    }
    if (translate.y < -100) {
      props.moveSlide(1);
    }
  }

  return (
    <Spring
      to={{
        transform: `translateX(${translate.x}dvw) translateY(${translate.y}dvh)`,
        opacity: distanceFactor,
      }}
      config={props.animationConfig}
    >
      {(style) => (
        <div className="absolute w-full md:w-[45dvw] h-full md:h-[75dvh] overflow-auto"
          style={{
            ...style,
            zIndex: Math.abs(Math.abs(props.index) - 2),
          }}
          onClick={() => props.moveSlide(props.index)}
        >
          {props.children}
        </div>
      )}
    </Spring>
  );
};

Slide.proptypes = {
  key: PropTypes.string,
  content: PropTypes.object,
  offsetRadius: PropTypes.number,
  index: PropTypes.number,
  animationConfig: PropTypes.object,
  moveSlide: PropTypes.func,
  delta: PropTypes.any,
  down: PropTypes.func,
  up: PropTypes.func,
  children: PropTypes.node,
};

export default Slide;
