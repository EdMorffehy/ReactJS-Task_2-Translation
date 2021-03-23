import React, {useContext, useState, useEffect} from 'react';
import {navsContext} from "../../../state/State";
import {NavLink} from "react-router-dom";
import style from "../header.module.css";
import {useMediaQuery} from "react-responsive";
import { FaRegCaretSquareLeft } from 'react-icons/fa';
import { FaRegCaretSquareRight } from 'react-icons/fa';
import { Trans, useTranslation } from "react-i18next";
import usa from "../../../images/united.png";
import arm from "../../../images/armenia.png";
import rus from "../../../images/russia.png";
const NavBar = () =>{
    useEffect(() => {
        if(localStorage.getItem('lang')) {
            i18n.changeLanguage(localStorage.getItem('lang'))
        }
    }, []);
    const nav = useContext(navsContext);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })
    const [show, setShow] = useState(false);
    const changeMenu = () =>{
        setShow(!show)
    };
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem('lang', language);
    };
    return(
        <div className={style.navBar}>
        <div className={style.language}>
            <div onClick={() => changeLanguage("en")}><img src={usa} alt='usa'/></div>
            <div onClick={() => changeLanguage("ru")}><img src={rus} alt='rus'/></div>
            <div onClick={() => changeLanguage("am")}><img src={arm} alt='arm'/></div>
        </div>

            {isTabletOrMobile && <div onClick={changeMenu}>
                {show ? <FaRegCaretSquareLeft style={{
                        color:'rgb(255, 255, 255)',
                        fontSize:'25px',
                        position:'relative',
                        top:'5px',
                    }}/>
                      : <FaRegCaretSquareRight style={{
                        color:'rgb(255, 255, 255)',
                        fontSize:'25px',
                        position:'relative',
                        left:'11px',
                    }}/>
                 }
            </div>}
            {(!isTabletOrMobile || !show) && <div className={style.nav}>
                {nav.map(n=>{
                    return(
                        <ul key={n.id}>
                            <NavLink to={`/${n.name}`} activeClassName={style.active}>{t('menu.' + n.name)}</NavLink>
                        </ul>
                    )
                })}
                {/*<NavLink to='/home' activeClassName={style.active}>{t('menu.Home')}</NavLink>*/}
                {/*<NavLink to='/about' activeClassName={style.active}>{t('menu.About')}</NavLink>*/}
                {/*<NavLink to='/portfolio' activeClassName={style.active}>{t('menu.Partfolio')}</NavLink>*/}
                {/*<NavLink to='/team' activeClassName={style.active}>{t('menu.Team')}</NavLink>*/}
                {/*<NavLink to='/blog' activeClassName={style.active}>{t('menu.BLOG')}</NavLink>*/}
                {/*<NavLink to='/contact' activeClassName={style.active}>{t('menu.Contact')}</NavLink>*/}
            </div>
            }

        </div>
    )
};

export default NavBar;