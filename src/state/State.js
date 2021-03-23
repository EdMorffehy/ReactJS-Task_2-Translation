import React, {createContext} from "react";
import img from "../images/img6.png";
const state={
    navs:[
        {id:1, name:'home'},
        {id:2, name:'about'},
        {id:3, name:'portfolio'},
        {id:4, name:'team'},
        {id:5, name:'blog'},
        {id:6, name:'contact'},
    ],
    ourCards:[
        {id:1, img:img, name:'Michel Anderson', job:'Creativ Director'},
        {id:2, img:img, name:'Michel Anderson', job:'Creativ Director'},
        {id:3, img:img, name:'Michel Anderson', job:'Creativ Director'},
    ]
};

export const navsContext = createContext(state.navs);
export const ourCardsContext = createContext(state.ourCards);