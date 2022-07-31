import React from "react";
import homeImg from "../img/introheading.png";
import "../Styles/Slideshow.css"
function Slideshow() {
    return (
        <section className="section bd_grid slideshow" id="">
            <img src={homeImg} alt="" className="home_img" />
        </section>
    );
}

export { Slideshow };
