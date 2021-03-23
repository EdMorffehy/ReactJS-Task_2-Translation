import React, {useState} from "react";
import Carousel from 'react-elastic-carousel';
import style from "../home.module.css";
import "./slider.css";
import { RiDownload2Fill } from 'react-icons/ri';
import {useTranslation} from "react-i18next";

const Slider = () =>{
    const { t, i18n } = useTranslation();
    return(
        <div className={style.carousell}>
            <Carousel itemsToShow={1}   enableAutoPlay autoPlaySpeed={3000}>
               <div className={style.img1}>
                   <div className={style.slideTextBlock}>
                       <div>
                           <div className={style.title}>{t('slider.title')}</div>
                           <div className={style.text}>THE<span>PREMIUM</span>QUALITY PSD TAMPLATE FOR <span>FREE</span></div>
                       </div>
                       <div className={style.btn}>
                           <input id={5} type="file"  className={style.file}/>
                           <label htmlFor="5">{t('slider.btnName')} <RiDownload2Fill/></label>
                       </div>
                   </div>
               </div>
                <div className={style.img2}>
                    <div className={style.slideTextBlock}>
                        <div>
                            <div className={style.title}>{t('slider.title')}</div>
                            <div className={style.text}>THE<span>PREMIUM</span>QUALITY PSD TAMPLATE FOR <span>FREE</span></div>
                        </div>
                        <div className={style.btn}>
                            <input id={5} type="file"  className={style.file}/>
                            <label htmlFor="5">{t('slider.btnName')} <RiDownload2Fill/></label>
                        </div>
                    </div>
                </div>
                <div className={style.img3}>
                    <div className={style.slideTextBlock}>
                        <div>
                            <div className={style.title}>{t('slider.title')}</div>
                            <div className={style.text}>THE<span>PREMIUM</span>QUALITY PSD TAMPLATE FOR <span>FREE</span></div>
                        </div>
                        <div className={style.btn}>
                            <input id={5} type="file"   className={style.file}/>
                                <label htmlFor="5">{t('slider.btnName')} <RiDownload2Fill/></label>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
};

export default Slider;