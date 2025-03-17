import { useTranslation } from "react-i18next";
import React from "react";
import './I18nSwitch.css'
import { GrLanguage } from "react-icons/gr";

const flags = ["en", "es", "fr"]

const I18nSwitch = () => {

    const { i18n, t } = useTranslation(['home']);

    const onClickLanguageChange = (evt: string) => {
        const language = evt;
        i18n.changeLanguage(language);
    }

    return (
        <>
            <details  className="dropdown dropdown-bottom flex flex-col justify-center" key={"i18n-switch"}> 
                <summary title="languages" role="button" className="btn">
                    <GrLanguage size={32} />
                </summary>
                <ul tabIndex={0} className="shadow dropdown-content z-[1] menu bg-base-100 rounded-box mt-5" role="list">
                    {
                        flags.map((flag: string, index: number) => (
                            <li key={`"i18n-switch-${flag}"`} role="listitem">
                                <a className={`btn ${i18n.language == flag ? "btn-primary" : ""} mt-2 max-w-20`} key={index} role="button" onClick={(evt) => { onClickLanguageChange(flag); }} >
                                    {t(flag)}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </details>
        </>
    );
};

export default I18nSwitch;