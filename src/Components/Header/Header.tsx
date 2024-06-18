import { useCallback, useContext, useEffect, useMemo } from 'react';
import './Header.css'
import { useTranslation } from "react-i18next";
import { MainContext } from '../../Providers/ContextProvider';
import React from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';

const Header = (props) => {

  const { headerStatus, setHeaderStatus, thresholds } = useContext(MainContext);

  const { t } = useTranslation(['home']);

  // init scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, []);


  // handle scroll system
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = (100 * window.scrollY) / window.innerHeight;
      setHeaderStatus(
        thresholds.length - 1 -
        thresholds.reduce((closestIndex: number, currentValue: number, currentIndex: number) => {
          return Math.abs(currentValue - scrollPosition) <= thresholds[closestIndex] - scrollPosition ? currentIndex : closestIndex;
        }, headerStatus));
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
      window.scrollTo({ top: (thresholds[newHeaderStatus] * window.innerHeight / 100), behavior: "smooth" });
    },
    [headerStatus, thresholds],
  );

  const previousThreshold = useCallback(
    () => {
      let scrollPosition = (100 * window.scrollY) / window.innerHeight;
      let newHeaderStatus = Math.abs(thresholds.lastIndexOf(thresholds.find(t => t < scrollPosition) || 0));
      window.scrollTo({ top: (thresholds[newHeaderStatus] * window.innerHeight / 100), behavior: "smooth" });
    },
    [headerStatus, thresholds],
  );

  const changeThreshold = useCallback((newValue) => {
    if (newValue === headerStatus) return;
    window.scrollTo({ top: (thresholds[newValue] * window.innerHeight / 100), behavior: "smooth" });
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
    [headerStatus],
  )



  return (
    <div className="relative flex justify-center max-h-[10dvh]">
      <header className={`fixed w-[auto] flex justify-center z-20 ${"header-" + (headerStatus == 0 ? "main" : "cta")}`}>
        <ul className={`menu menu-horizontal bg-base-200 rounded-box ul-style text shadow-xl`}>
          {/* MAIN START BTN */}
          <li className={`${getHeaderStatus() == 0 ? "li-active" : "li-inactive"}`}>
            <a className='a-section btn' onClick={nextThreshold}>
              {t('_start_header_1')}
              <kbd className="kbd kbd-md">
                {t('_space')}
              </kbd>
              {t('_start_header_2')}
            </a>
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
                      <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#000000" strokeWidth="2" >
                        <path d="M18 15l-6-6-6 6" />
                      </svg>
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
                    <a className='a-section btn' onClick={nextThreshold}>
                      <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#000000" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </a>
                  </li>
                </>

              }
              {isMobile &&
                <>
                  {/* UP ARROW */}
                  <li className="li-active">
                    <a className='a-section btn' onClick={previousThreshold}>
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="#000000" strokeWidth="2">
                        <path d="M18 15l-6-6-6 6" />
                      </svg>
                    </a>
                  </li>
                  <li className="li-active text-xl text-bold">
                    {props.sectionNames[headerStatus - 1]}
                  </li>
                  {/* DOWN ARROW */}
                  <li className={`${headerStatus >= 1 ? "li-active" : "li-inactive"}`}>
                    <a className='a-section btn' onClick={nextThreshold}>
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="#000000" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
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