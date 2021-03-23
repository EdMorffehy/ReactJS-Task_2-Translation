import React from 'react';
import s from "../aboutUs.module.css";
import {useTranslation} from "react-i18next";
const TextBlock = () =>{
    const { t, i18n } = useTranslation();
    return(
        <div className={s.main}>
            <div>{t('aboutText.title')}</div>
            <span className={s.sp}></span>
            <p>{t('aboutText.text1')} <br/> </p> <p>{t('aboutText.text2')}</p>
        </div>
    )
};

export default TextBlock;