import img1 from "../../images/servicesImg1.png"
import img2 from "../../images/servicesImg2.png"
import img3 from "../../images/servicesImg3.png"

let blockState = {
    blocks:[
        {id:1, img:img1, title:'ConsulTancy', text:'Claritas est etiam processus dynaicus qui sequitur mutationem consuetudium lectorum. Mirum est notare quam '},
        {id:2, img:img2, title:'Maketing', text:'Claritas est etiam processus dynaicus qui sequitur mutationem consuetudium lectorum. Mirum est notare quam '},
        {id:3, img:img3, title:'Reaserch', text:'Claritas est etiam processus dynaicus qui sequitur mutationem consuetudium lectorum. Mirum est notare quam '},
        ]
};


const servicesReducer = (state=blockState, action) => {
    switch(action.type){
        default:
            return state
    }
};

export default servicesReducer;