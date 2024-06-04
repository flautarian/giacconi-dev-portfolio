import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import React from "react";
import './I18nSwitch.css'

const flags = [
    {
        code: "en",
        img: "/img/englishFlag.png"
    }, {
        code: "es",
        img: "/img/spanishFlag.png"
    }, {
        code: "fr",
        img: "/img/frenchFlag.png"
    },
]

const I18nSwitch = () => {

    const { i18n, t } = useTranslation(['home']);

    const onClickLanguageChange = (evt: string) => {
        const language = evt;
        i18n.changeLanguage(language);
    }

    return (
        <>
            <div className="dropdown" key={"i18n-switch"}>
                <button className="btn btn-sm btn-primary">
                    {t(i18n.language)}
                </button>
                <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-auto mt-5">
                    {
                        flags.map((flag: any, index: number) => (
                            <li key={`"i18n-switch-${flag.code}"`}>
                                <a className="btn btn-neutral mt-2 max-w-20" key={index} onClick={(evt) => { onClickLanguageChange(flag.code); }} >
                                    {t(flag.code)}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
};

export default I18nSwitch;