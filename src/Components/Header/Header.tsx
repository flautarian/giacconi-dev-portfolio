import { FaChevronDown, FaChevronUp, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MainContext } from '../../Providers/ContextProvider';
import { useCallback, useContext, useEffect } from 'react';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import I18nSwitch from '../I18nSwitch/I18nSwitch';
import { isMobile } from 'react-device-detect';
import { useTranslation } from "react-i18next";
import { GrDocument } from 'react-icons/gr';
import { FiMail } from 'react-icons/fi';
import Confetti from 'react-confetti';
import PropTypes from 'prop-types';
import React from 'react';
import './Header.css';
import './Header.tsx';

const Header = (props) => {
  const { headerStatus, setHeaderStatus, thresholds, effects, isdark } = useContext(MainContext);
  const { t } = useTranslation(['home']);

  // Initial scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, []);


  // Handle scroll system useEffect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = (100 * window.scrollY) / window.innerHeight;
      const newStatus = thresholds.length - 1 -
        thresholds.reduce((closestIndex: number, currentValue: number, currentIndex: number) => {
          return Math.abs(currentValue - scrollPosition) <= thresholds[currentIndex] - scrollPosition ? currentIndex : closestIndex;
        }, headerStatus);
      setHeaderStatus(newStatus);
    };

    const restoreScroll = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleSpaceStepKeyPress);
    window.addEventListener('resize', restoreScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', restoreScroll);
      window.removeEventListener('keydown', handleSpaceStepKeyPress);
    };
  }, [headerStatus, setHeaderStatus]);

  const handleSpaceStepKeyPress = (event) => {
    if (event.code === "Space") {
      event.preventDefault();
      nextThreshold();
    }
  };

  /* Next window threshold function */
  const nextThreshold = useCallback(
    () => {
      let scrollPosition = (100 * window.scrollY) / window.innerHeight;
      let newHeaderStatus = Math.abs(thresholds.lastIndexOf(thresholds.find(t => t <= scrollPosition) || 0) - 1);
      const viewportHeight = window.innerHeight;
      window.scrollTo({ top: ((thresholds[newHeaderStatus] / 100) * viewportHeight), behavior: "smooth" });
    },
    [headerStatus, thresholds],
  );

  /* Previous window threshold function */
  const previousThreshold = useCallback(
    () => {
      let scrollPosition = (100 * window.scrollY) / window.innerHeight;
      let newHeaderStatus = Math.abs(thresholds.lastIndexOf(thresholds.find(t => t < scrollPosition) || 0));
      const viewportHeight = window.innerHeight;
      window.scrollTo({ top: (thresholds[newHeaderStatus] / 100) * viewportHeight, behavior: "smooth" });
    },
    [headerStatus, thresholds],
  );

  /* Change window threshold function */
  const changeThreshold = useCallback((newValue) => {
    const viewportHeight = window.innerHeight;
    window.scrollTo({ top: ((thresholds[newValue] / 100) * viewportHeight), behavior: "smooth" });
  }, [headerStatus, thresholds],
  );

  /* Current section function helper */
  const isCurrentSection = useCallback((value) => {
    return headerStatus == value;
  }, [headerStatus, thresholds],
  );

  /* NEON SHADOW BOX STYLE */

  const boxShadowStyle = `
      0 0 5px ${effects[headerStatus]?.color}, 
      0 0 10px ${effects[headerStatus]?.color}, 
      0 0 20px ${effects[headerStatus]?.color}
      /* 0 0 30px ${effects[headerStatus]?.color} */
    `;

  return (
    <div className="flex justify-center max-h-[10dvh]">
      {/* EFFECTS */}
      {effects[headerStatus]?.name == "confetti" && <div className='fixed size-full'>
        <Confetti className='size-full' /></div>}
      {/* HEADER */}
      <header className={`fixed w-[max-content] flex justify-center rounded-box z-10 ${"header-" + (headerStatus == 0 ? "main" : "cta")} neon-light-container smooth-animation`}>
        <ul className={`menu menu-horizontal bg-base-200 rounded-box ul-style text`}
          role="headermenu"
          style={isdark ? {
            boxShadow: boxShadowStyle,
            animation: `randomNeon 5s infinite`
          } : {}}>
          {/* MAIN START BTN */}
          <li className={`${headerStatus == 0 ? 'li-active' : 'li-inactive'}`}>
            <I18nSwitch />
          </li>
          <li className={`${headerStatus == 0 ? 'li-active' : 'li-inactive'} reflection rounded`}  role="none">
            <a className='a-section btn' onClick={nextThreshold} role="startheaderbutton">
              {
                isMobile && <> {t('_start_header_3')} </>
              }
              {
                !isMobile && <>
                  {t('_start_header_1')}
                  <kbd className="kbd kbd-md">
                    {t('_space')}
                  </kbd>
                  {t('_start_header_2')}
                </>
              }
            </a>
          </li>
          <li className={`${headerStatus == 0 ? 'li-active' : 'li-inactive'}`}  role="none">
            <ThemeSwitch />
          </li>
          {
            headerStatus > 0 && headerStatus < thresholds.length - 1 &&
            <>
              {
                !isMobile &&
                <>
                  {/* UP ARROW */}
                  <li className="li-active"  role="none">
                    <a className='a-section btn' onClick={previousThreshold} role="upbuttonmain">
                      <FaChevronUp size={28} />
                    </a>
                  </li>
                  {/* THRESHOLD NAMES */}
                  {
                    props.sectionNames.map((name, $index) => {
                      return (
                        <li className="li-active font-semibold" key={`header-section-${$index}`} role="none">
                          <a className={`a-section btn ${isCurrentSection($index + 1) ? 'text-secondary' : 'text-primary'}`} onClick={() => changeThreshold(thresholds.length - 1 - ($index + 1))}>
                            {name}
                          </a>
                        </li>
                      );
                    })
                  }
                  {/* DOWN ARROW */}
                  <li className={`${headerStatus >= 1 ? "li-active" : "li-inactive"}`} role="none">
                    <a className={`a-section ${headerStatus < thresholds.length - 1 ? "btn" : "btn btn-disabled"}`} onClick={nextThreshold} role="downbuttonmain">
                      <FaChevronDown size={28} />
                    </a>
                  </li>
                </>

              }
              {isMobile &&
                <>
                  {/* UP ARROW */}
                  <li className="li-active" role="none">
                    <a className='a-section btn' onClick={previousThreshold} role="upbuttonmobile">
                      <FaChevronUp size={28} />
                    </a>
                  </li>
                  <li className="li-active text-xl text-bold text-center pl-5 pr-5" role="none">
                    {props.sectionNames[headerStatus - 1]}
                  </li>
                  {/* DOWN ARROW */}
                  <li className={`${headerStatus >= 1 ? "li-active" : "li-inactive"}`} role="none">
                    <a className={`a-section ${headerStatus < thresholds.length - 1 ? "btn" : "btn btn-disabled"}`} onClick={nextThreshold} role="downbuttonmobile">
                      <FaChevronDown size={28} />
                    </a>
                  </li>
                </>
              }
            </>
          }
          {/* SUMMARY HEADER */}
          {
            headerStatus == thresholds.length - 1 &&
            <>
              {/* UP ARROW */}
              <li className="li-active" role="none">
                <a className='a-section btn' onClick={previousThreshold} role="upbuttonsummary">
                  <FaChevronUp size={28} />
                </a>
              </li>
              {/* LINKS */}
              <li className="li-active font-semibold" role="none">
                <FaLinkedin title={t("linkedin_label")} className="scale-hover" size={52} onClick={() => window.open(props.linkedInUrl, "_blank")}  role="linkedinbutton" />
              </li>
              <li className="li-active font-semibold" role="none">
                <FiMail title={t("mail_label")} className="scale-hover" size={52} onClick={() => window.open("mailto:" + props.emailUrl, "_blank")}  role="mailbutton" />
              </li>
              <li className="li-active font-semibold" role="none">
                <FaGithub title={t("github_label")} className="scale-hover" size={52} onClick={() => window.open(props.githubUrl, "_blank")}  role="gitbutton" />
              </li>
              <li className="li-active font-semibold" role="none">
                <GrDocument title={t("cv_label")} className="scale-hover" size={52} onClick={() => window.open(props.cvUrl, "_blank")}  role="cvbutton" />
              </li>
              {/* DOWN ARROW */}
              <li className={`${headerStatus >= 1 ? "li-active" : "li-inactive"}`} role="none">
                <a className={`a-section ${headerStatus < thresholds.length - 1 ? "btn" : "btn btn-disabled"}`} onClick={nextThreshold} role="downbuttonsummary">
                  <FaChevronDown size={28} />
                </a>
              </li>
            </>
          }
        </ul>
      </header>
    </div>
  );
};

Header.propTypes = {
  sectionNames: PropTypes.arrayOf(PropTypes.string),
  linkedInUrl: PropTypes.string,
  emailUrl: PropTypes.string,
  githubUrl: PropTypes.string,
  cvUrl: PropTypes.string,
}

export default Header;