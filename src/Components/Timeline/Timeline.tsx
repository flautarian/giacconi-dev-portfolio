import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Timeline = (props) => {

  return (
    <ul className="timeline timeline-vertical flex items-center justify-center size-full">
      {props.experience.map((exp, $index) => {
        return (
          <li key={`timeline-${exp.enterprise}-${$index}`} style={{ height: `${100 / props.experience.length - 5}vh` }}>
            {
              $index > 0 && <hr className={`${props.state.index >= $index ? 'bg-primary' : 'timeline-middle'}`} />
            }
            <div className="timeline-start text-xl">{`${exp.dateFrom.getMonth()}/${exp.dateFrom.getFullYear()}`}</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end">
              <a className="btn text-xl" onClick={() => props.onClickExperience($index)}>{exp.enterprise}</a>
            </div>
            {
              ($index != props.experience.length - 1 || !exp.dateTo) &&
              <hr className={`${props.state.index > $index || props.state.index === props.experience.length - 1 ? 'bg-primary' : 'timeline-middle'}`} />
            }
          </li>
        );
      })}
    </ul>
  );
};

Timeline.propTypes = {
  state: PropTypes.object,
  experience: PropTypes.arrayOf(PropTypes.object),
  onClickExperience: PropTypes.func,
};

export default Timeline;
