import React, { useState } from "react";
import PropTypes from 'prop-types';
import Timeline from "../Timeline/Timeline";
import VerticalCarousel from "../VerticalCarousel/VerticalCarousel";
import { config } from "react-spring";

const Experience = (props) => {

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

    const updateState = (newIndex) => {
        setState({
            ...state,
            index: newIndex
        });
    }

    return (
        <div className='flex flex-row ' style={{ height: "100vh", width: "100vw" }}>
            <VerticalCarousel
                key={"experience-carousel"}
                slides={props.experience}
                state={state}
                setState={setState} />
            <Timeline state={state} experience={props.experience} onClickExperience={updateState}></Timeline>
        </div>
    );
}

Experience.proptypes = {
    experience: PropTypes.arrayOf(PropTypes.object)
}

export default Experience;