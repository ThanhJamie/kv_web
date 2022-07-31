import React from "react";
import homeImg from "../img/introheading.png";
import "../Styles/Intro.css";
function Intro() {
    return (
        <section className="section bd_grid" id="">
            <img src={homeImg} alt="" className="home_img" />
        </section>
    );
}

export { Intro };
