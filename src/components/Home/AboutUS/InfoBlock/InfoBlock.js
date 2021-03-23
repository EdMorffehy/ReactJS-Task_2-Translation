import React from "react";
import style from "../aboutUs.module.css";
import img from "../../../../images/aboutUsImg.png";
import { BsArrowRight } from 'react-icons/bs';

const InfoBlock = () =>{
    return(
        <div className={style.i_block_main}>
            <div className={style.i_div_1}>
                <div className={style.i_title}>We Are the best</div>
                <div className={style.i_text_1}>
                    Consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt
                    ut laoreet dolore magna aliquam erat
                </div>
                <div className={style.i_text_2}>
                    Volutpat wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper
                    suscipit lobortis nisl ut aliquip ex ea
                    commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum
                    dolore eu feugiat nulla facilisis at vero
                    eros et accumsan et iusto odio dignissim
                    qui blandit praesent luptatum zzril delenit
                    augue duis dolore te feugait nulla facilisi.
                    Nam liber tempor cum
                </div>
                <button>Read More <BsArrowRight/></button>
            </div>
            <div className={style.i_div_2}>
                    <div className={style.imagesBlock}>
                                    
                    </div>
            </div>
        </div>
    )
};

export default InfoBlock;