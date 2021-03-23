import React from 'react';
import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";
import style from "./header.module.css";
const Header = () =>{
    return(
        <div className={style.header}>
            <Logo/>
            <NavBar/>
        </div>
    )
}

export default Header;