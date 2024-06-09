import './HeaderOptions.css'
import I18nSwitch from '../I18nSwitch/I18nSwitch';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import React from 'react';
import { isMobile } from 'react-device-detect';

const HeaderOptions = () => {

  return (
    <div className="relative">
      <header className={`fixed w-full flex z-10 header ${isMobile ? 'justify-center mt-[15vh]' : 'justify-end mr-10 m-[2.5vh] right-0 w-[15vw]'}`}>
        <ul className={`menu menu-horizontal w-[45vw] justify-evenly bg-base-300 rounded-box ul-style`}>
          <I18nSwitch />
          <ThemeSwitch />
        </ul>
      </header>
    </div>
  );
};

export default HeaderOptions;