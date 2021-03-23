import React from 'react';
import s from "./aboutUs.module.css";
import TextBlock from "./TextBlock/TextBlock";
import InfoBlock from "./InfoBlock/InfoBlock";
const AboutUs = () =>{
    return(
        <div className={s.aboutUs}>
            <TextBlock/>
            <InfoBlock/>
        </div>
    )
};

export default AboutUs;