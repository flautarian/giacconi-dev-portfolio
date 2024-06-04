import { useContext, useEffect, useMemo } from 'react';
import './Header.css'
import { useTranslation } from "react-i18next";
import { MainContext } from '../../Providers/ContextProvider';
import React from 'react';

const Header = () => {

  const {headerStatus, setHeaderStatus} = useContext(MainContext);

  const { t } = useTranslation(['home']);

  const thresholds = useMemo(() => [9999, 400, 300, 100, 0], []);

  // init scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = (100 * window.scrollY) / window.innerHeight;
      setHeaderStatus(thresholds.length - 1 - thresholds.indexOf(thresholds.find(t => t <= scrollPosition) || 0));
    };

    const restoreScroll = () =>  {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', restoreScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [thresholds, headerStatus, setHeaderStatus]);

  const nextThreshold = () => {
    let index = thresholds.indexOf(headerStatus);
    window.scrollTo({ top: (thresholds[index - 1] * window.innerHeight / 100), behavior: "smooth" })
  }

  return (
    <div className="relative">
      <header className={`fixed w-full justify-center flex z-10 ${"header-" + headerStatus}`}>
        <ul className={`menu menu-horizontal bg-base-200 rounded-box ul-style`}>
          <li className={`${headerStatus == 0 ? "li-active" : "li-inactive"}`}>
            <a className='a-section' onClick={nextThreshold}>{t('_start_header_1')} <kbd className="kbd kbd-sm">{t('_space')}</kbd> {t('_start_header_2')}</a>
          </li>
          <li className={`${headerStatus == 1 ? "li-active" : "li-inactive"}`}><a className='a-section'>Item 2</a></li>
          <li className={`${headerStatus == 1 ? "li-active" : "li-inactive"}`}><a className='a-section'>Item 3</a></li>
          <li className={`${headerStatus == 1 ? "li-active" : "li-inactive"}`}><a className='a-section'>Item 4</a></li>
        </ul>
      </header>
    </div>
  );
};

export default Header;