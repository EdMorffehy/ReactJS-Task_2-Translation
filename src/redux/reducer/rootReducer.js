import {combineReducers} from "redux";
import servicesReducer from "./servicesReducer";
import galleryReducer from "./galleryReducer";


const rootReducer = combineReducers({
    servicesStorer:servicesReducer,
    galleryStore:galleryReducer
});


export default rootReducer