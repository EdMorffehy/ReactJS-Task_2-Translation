import React from "react";
import Slider from "./Slider/Slider";
import AboutUs from "./AboutUS/AboutUs";
import Services from "./Services/Services";
import Skills from "./Skills/Skills";
import Gallery from "./Galley/Gallery";
import Our from "./Our/Our";



const Home = () =>{
    return(
        <div>
            <Slider/>
            <AboutUs/>
            <Services/>
            <Skills/>
            <Gallery/>
            <Our/>
        </div>
    )
};

export default Home;