import React from "react";
import TextOur from "./TextOut/TextOur";
import style from "./our.module.css";
import CardsOur from "./CardsOur/CardsOur";
const Our = () =>{
    return(
        <div className={style.our}>
            <TextOur/>
            <CardsOur/>
        </div>
    )
};

export default Our;