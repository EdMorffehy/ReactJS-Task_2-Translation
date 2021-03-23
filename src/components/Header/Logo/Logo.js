import React from 'react';
import style from "../header.module.css";
import {NavLink} from "react-router-dom";

const Logo = () =>{
    return(
        <div className={style.logo}>
           <NavLink to='/home' className={style.navLogo}>Mariala</NavLink>
        </div>
    )
};

export default Logo;