import React from 'react';
import TextBlock from "./TextBlock/TextBlock";
import CardBlock from "./CardBlock/CardBlock";
import style from "./services.module.css";
const Services = () =>{
    return(
        <div className={style.services}>
            <TextBlock/>
            <CardBlock/>
        </div>
    )
};

export default Services;