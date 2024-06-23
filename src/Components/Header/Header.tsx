import { useCallback, useContext, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { MainContext } from '../../Providers/ContextProvider';
import React from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import I18nSwitch from '../I18nSwitch/I18nSwitch';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import './Header.css'

const Header = (props) => {

  const { headerStatus, setHeaderStatus, thresholds } = useContext(MainContext);

  const { t } = useTranslation(['home']);

  // init scroll to top
  useEffect(() => {
    console.log(thresholds);
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, []);


  // handle scroll system
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

  const nextThreshold = useCallback(
    () => {
      let scrollPosition = (100 * window.scrollY) / window.innerHeight;
      let newHeaderStatus = Math.abs(thresholds.lastIndexOf(thresholds.find(t => t <= scrollPosition) || 0) - 1);
      const viewportHeight = window.innerHeight;
      window.scrollTo({ top: ((thresholds[newHeaderStatus] / 100) * viewportHeight), behavior: "smooth" });
    },
    [headerStatus, thresholds],
  );

  const previousThreshold = useCallback(
    () => {
      let scrollPosition = (100 * window.scrollY) / window.innerHeight;
      let newHeaderStatus = Math.abs(thresholds.lastIndexOf(thresholds.find(t => t < scrollPosition) || 0));
      const viewportHeight = window.innerHeight;
      window.scrollTo({ top: (thresholds[newHeaderStatus] / 100) * viewportHeight, behavior: "smooth" });
    },
    [headerStatus, thresholds],
  );

  const changeThreshold = useCallback((newValue) => {
    const viewportHeight = window.innerHeight;
    window.scrollTo({ top: ((thresholds[newValue] / 100) * viewportHeight), behavior: "smooth" });
  }, [headerStatus, thresholds],
  );

  const isCurrentSection = useCallback((value) => {
    return headerStatus == value;
  }, [headerStatus, thresholds],
  );

  const getHeaderStatus = useCallback(
    () => {
      return headerStatus;
    },
    [headerStatus, thresholds],
  )



  return (
    <div className="relative flex justify-center max-h-[10dvh]">
      <header className={`fixed w-[max-content] flex justify-center z-20 ${"header-" + (headerStatus == 0 ? "main" : "cta")}`}>
        <ul className={`menu menu-horizontal bg-base-200 rounded-box ul-style text shadow-xl`}>
          {/* MAIN START BTN */}
          <li className={`${getHeaderStatus() == 0 ? 'li-active' : 'li-inactive'}`}>
            <I18nSwitch />
          </li>
          <li className={`${getHeaderStatus() == 0 ? 'li-active' : 'li-inactive'}`}>
            <a className='a-section btn' onClick={nextThreshold}>
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
          <li className={`${getHeaderStatus() == 0 ? 'li-active' : 'li-inactive'}`}>
            <ThemeSwitch />
          </li>
          {
            getHeaderStatus() > 0 &&
            <>
              {
                !isMobile &&
                <>
                  {/* UP ARROW */}
                  <li className="li-active">
                    <a className='a-section btn' onClick={previousThreshold}>
                      <FaChevronUp size={28} />
                    </a>
                  </li>
                  {/* THRESHOLD NAMES */}
                  {
                    props.sectionNames.map((name, $index) => {
                      return (
                        <li className="li-active font-semibold" key={`header-section-${$index}`}>
                          <a className={`a-section btn ${isCurrentSection($index + 1) ? 'text-secondary' : 'text-primary'}`} onClick={() => changeThreshold(thresholds.length - 1 - ($index + 1))}>
                            {name}
                          </a>
                        </li>
                      );
                    })
                  }
                  {/* DOWN ARROW */}
                  <li className={`${headerStatus >= 1 ? "li-active" : "li-inactive"}`}>
                    <a className={`a-section ${headerStatus < thresholds.length -1 ? "btn": "btn btn-disabled"}`} onClick={nextThreshold}>
                      <FaChevronDown size={28} />
                    </a>
                  </li>
                </>

              }
              {isMobile &&
                <>
                  {/* UP ARROW */}
                  <li className="li-active">
                    <a className='a-section btn' onClick={previousThreshold}>
                      <FaChevronUp size={28} />
                    </a>
                  </li>
                  <li className="li-active text-xl text-bold">
                    {props.sectionNames[headerStatus - 1]}
                  </li>
                  {/* DOWN ARROW */}
                  <li className={`${headerStatus > 1 ? "li-active" : "li-inactive"}`}>
                    <a className='a-section btn' onClick={nextThreshold}>
                      <FaChevronDown size={28} />
                    </a>
                  </li>
                </>
              }
            </>
          }
        </ul>
      </header>
    </div>
  );
};

Header.propTypes = {
  sectionNames: PropTypes.arrayOf(PropTypes.string)
}

export default Header;