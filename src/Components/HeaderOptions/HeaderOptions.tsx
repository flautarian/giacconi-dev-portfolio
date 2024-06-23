import './HeaderOptions.css'
import I18nSwitch from '../I18nSwitch/I18nSwitch';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import React, { useContext } from 'react';
import { MainContext } from '../../Providers/ContextProvider';
import { isMobile } from 'react-device-detect';

const HeaderOptions = () => {

  const {headerStatus, thresholds} = useContext(MainContext);

  const isHidden = () => {
    let threshold = thresholds.indexOf(headerStatus) || 0;
    return threshold < thresholds.length-1 ? 'fade-out' : '';
  }

  return (
    <div className="relative">
      <header className={`fixed w-[100dvw] flex z-10 header justify-end max-sm:justify-center xl:m-[2.5dvh] max-sm:mt-[15dvh] xl:right-0 ${ isMobile && isHidden() }`}>
        <ul className={`flex justify-evenly menu menu-horizontal xl:w-[15dvw] max-sm:w-[45dvw] bg-base-300 rounded-box ul-style`}>
          <I18nSwitch />
          <ThemeSwitch />
        </ul>
      </header>
    </div>
  );
};

export default HeaderOptions;