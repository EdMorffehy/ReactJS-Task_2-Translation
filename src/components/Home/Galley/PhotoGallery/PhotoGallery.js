import React from "react";
import {useSelector} from "react-redux";
import { BsArrowRight } from 'react-icons/bs';
import s from "../gallery.module.css";
const PhotoGallery = () =>{
    const images = useSelector(state=>state.galleryStore.photos);
    console.log(images);

    return(
        <div>
            <div className={s.block1}>
            {images.map(i=>{
                return(
                    <div key={i.id} className={s.imgBlock1}>
                        <img src={i.img}/>
                    </div>
                )
            })}
            </div>
            <div className={s.block2}>
                <div className={s.block2Title}>
                    LATES FROM TWITTER
                </div>
                <div className={s.block2Text}>
                    Trying out velositey - a simple website building extension for Photoshop.
                </div>
                <a href='buff.ly/NC8gog'>buff.ly/NC8gog</a>
            </div>
                <div className={s.block3}>
                    {images.map(i=>{
                        return(
                            <div key={i.id} className={s.imgBlock2}>
                                <img src={i.img}/>
                            </div>
                        )
                    })}
                </div>
            <div className={s.blockBTN}>
                <button>SEE ALL <BsArrowRight/></button>
            </div>
        </div>
    )
};

export default PhotoGallery;
