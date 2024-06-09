import { useCallback, useContext, useEffect, useMemo } from 'react';
import './Header.css'
import { useTranslation } from "react-i18next";
import { MainContext } from '../../Providers/ContextProvider';
import React from 'react';

const Header = () => {

  const { headerStatus, setHeaderStatus } = useContext(MainContext);

  const { t } = useTranslation(['home']);

  const thresholds = useMemo(() => [9999, 400, 200, 100, 0], []);

  // init scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = (100 * window.scrollY) / window.innerHeight;
      setHeaderStatus(thresholds.length - 1 - thresholds.indexOf(thresholds.find(t => t <= scrollPosition) || 0));
    };

    const restoreScroll = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', restoreScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [thresholds, headerStatus, setHeaderStatus]);

  const nextThreshold = useCallback(
    () => {
      const scrollPosition = (100 * window.scrollY) / window.innerHeight;
      const newHeaderStatus = Math.abs(thresholds.lastIndexOf(thresholds.find(t => t <= scrollPosition) || 0) - 1);
      window.scrollTo({ top: (thresholds[newHeaderStatus] * window.innerHeight / 100), behavior: "smooth" });
      setHeaderStatus(newHeaderStatus);
    },
    [headerStatus],
  )

  const previousThreshold = useCallback(
    () => {
      const scrollPosition = (100 * window.scrollY) / window.innerHeight;
      const newHeaderStatus = Math.abs(thresholds.lastIndexOf(thresholds.find(t => t < scrollPosition) || 0));
      window.scrollTo({ top: (thresholds[newHeaderStatus] * window.innerHeight / 100), behavior: "smooth" });
      setHeaderStatus(newHeaderStatus);
    },
    [headerStatus],
  )


  return (
    <div className="relative">
      <header className={`fixed w-full flex justify-center z-10 ${"header-" + headerStatus}`}>
        <ul className={`menu menu-horizontal bg-base-200 rounded-box ul-style text`}>
          <li className={`${headerStatus == 0 ? "li-active" : "li-inactive"}`}>
            <a className='a-section' onClick={nextThreshold}>{t('_start_header_1')} <kbd className="kbd kbd-md">{t('_space')}</kbd> {t('_start_header_2')}</a>
          </li>
          <li className={`${![0, thresholds.length - 1].includes(headerStatus) ? "li-active" : "li-inactive"}`}>
            <a className='a-section' onClick={previousThreshold}>
              <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#000000" strokeWidth="2" >
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </a>
          </li>
          <li className={`${headerStatus == 1 ? "li-active" : "li-inactive"}`}><a className='a-section'>Item 2</a></li>
          <li className={`${headerStatus == 1 ? "li-active" : "li-inactive"}`}><a className='a-section'>Item 3</a></li>
          <li className={`${headerStatus >= 1 ? "li-active" : "li-inactive"}`}>
            <a className='a-section' onClick={nextThreshold}>
              <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#000000" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;