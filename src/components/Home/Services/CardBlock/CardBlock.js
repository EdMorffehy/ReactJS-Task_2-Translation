import React from "react";
import {useDispatch, useSelector} from "react-redux";
import style from "../services.module.css";
const CardBlock = () =>{
    let block = useSelector(state=>state.servicesStorer.blocks);
    const dispatch = useDispatch();

    return(
        <div className={style.mainBlock}>
            {block.map(b=>{
                return(
                    <div key={b.id} className={style.card}>
                        <div>
                        <img src={b.img}/>
                        </div>
                        <div className={style.cardTitle}>
                            {b.title}
                        </div>
                        <div className={style.cardText}>
                            {b.text}
                        </div>
                    </div>
                )
            })}
        </div>
    )
};
export default CardBlock;