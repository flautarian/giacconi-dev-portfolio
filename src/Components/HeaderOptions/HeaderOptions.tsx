import './HeaderOptions.css'
import I18nSwitch from '../I18nSwitch/I18nSwitch';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import React from 'react';

const HeaderOptions = () => {

  return (
    <div className="relative">
      <header className={`fixed justify-end flex z-10 mr-10 header`}>
        <ul className={`menu menu-horizontal w-full justify-evenly bg-base-300 rounded-box ul-style`}>
          <I18nSwitch />
          <ThemeSwitch />
        </ul>
      </header>
    </div>
  );
};

export default HeaderOptions;