import { useState, useEffect, useContext } from 'react';
import './ThemeSwitch.css'
import React from 'react';
import { MainContext } from '../../Providers/ContextProvider';
import { GrMoon, GrSun } from 'react-icons/gr';

const ThemeSwitch = () => {
    const { isdark, setIsdark } = useContext(MainContext);
    useEffect(() => {
        localStorage.setItem('isdark', JSON.stringify(isdark));
    }, [isdark]);
    return (
        <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" checked={isdark} onChange={() => { setIsdark(!isdark) }} className="theme-controller" value="dark" />

            {/* sun icon */}
            <GrSun className="swap-off" size={36} />

            {/* moon icon */}
            <GrMoon className="swap-on" style={{ rotate: "-45deg" }} size={36} />
        </label>
    )
}

export default ThemeSwitch;