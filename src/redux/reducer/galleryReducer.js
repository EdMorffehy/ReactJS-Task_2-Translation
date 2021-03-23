import img1 from "../../images/galleryPhoto4.png"
import img2 from "../../images/galleryPhoto1.png"
import img3 from "../../images/galleryPhoto2.png"
import img4 from "../../images/galleryPhoto3.png"

let imgState={
    photos:[
        {id:1, img:img1},
        {id:2, img:img2},
        {id:3, img:img3},
        {id:4, img:img4}
    ]
};


const galleryReducer = (state=imgState, action) => {
    switch(action.type){
        default:
            return state
    }
};

export default galleryReducer;