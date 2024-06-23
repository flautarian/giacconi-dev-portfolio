import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "./Timeline.css"

const Timeline = (props) => {

  const { i18n, t } = useTranslation(['home']);

  const visitedElement = (index) => {
    return props.state.index > index || props.state.index === props.values.length - 1;
  }

  return (
    <ul className="timeline timeline-vertical flex items-center mt-[7.5dvh] size-full">
      {props.values.map((c, $index) => {
        return (
          <li key={`timeline-${c.key}-${$index}`} style={{ height: `${100 / props.values.length - 5}dvh` }}>
            {
              $index > 0 && <hr className={`${props.state.index >= $index ? 'bg-primary' : 'timeline-middle'} animate-fade`} />
            }
            <div className="timeline-start text-m">
              {`${c.dateFrom.getMonth()}/${c.dateFrom.getFullYear()} - ${!!c.dateTo ? c.dateTo.getMonth() + "/" : ""}${!!c.dateTo ? c.dateTo.getFullYear() : t("_continue_working")}`}
            </div>
            <div className="timeline-middle">
              {
                true && (props.state.index >= $index || visitedElement($index)) ? "🟣" : "⚪"
              }
            </div>
            <div className="timeline-end">
              <a className="btn text-xl" onClick={() => props.onClickExperience($index)}>{c.name[i18n.language]}</a>
            </div>
            {
              ($index != props.values.length - 1 || !c.dateTo) &&
              <hr className={`${visitedElement($index) ? 'bg-primary' : 'timeline-middle'} animate-fade`} />
            }
          </li>
        );
      })}
    </ul>
  );
};

Timeline.propTypes = {
  state: PropTypes.object,
  values: PropTypes.arrayOf(PropTypes.object),
  onClickExperience: PropTypes.func,
};

export default Timeline;
