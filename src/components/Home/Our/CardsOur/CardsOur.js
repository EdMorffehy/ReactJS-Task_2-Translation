import React, {useContext} from "react";
import style from "../our.module.css";
import {ourCardsContext} from "../../../../state/State";
import { FaFacebookF } from 'react-icons/fa';
import { RiTwitterFill } from 'react-icons/ri';
import { GrLinkedinOption } from 'react-icons/gr';

const CardsOur = () =>{
    const cards = useContext(ourCardsContext);
    // console.log(cards);

    return(
        <div className={style.card}>
            {cards.map(c=>{
                return(
                    <div key={c.id}>
                        <div className={style.imgBlock}>
                            <img src={c.img} alt='img'  className={style.image}/>
                            <div className={style.middle}>
                                <div className={style.icons}>
                                    <a href='https://twitter.com/' className={style.tw}> <RiTwitterFill style={{
                                        color:'white',
                                    }}/></a>
                                    <a href='https://www.facebook.com/' className={style.fb}><FaFacebookF style={{
                                        color:'white',
                                    }}/></a>
                                    <a href='https://www.linkedin.com/' className={style.in}>
                                        <GrLinkedinOption style={{
                                            color:'white',
                                        }}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={style.cardTexts}>
                            <span className={style.name}>{c.name}</span>
                            <br/>
                            <span className={style.job}>{c.job}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )

};

export default CardsOur;