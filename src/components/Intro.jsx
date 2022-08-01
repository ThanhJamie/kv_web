import React from "react";
import homeImg from "../img/introheading.png";
import "../Styles/Intro.css";
function Intro() {
    return (
        <section className="section bd_grid" id="">
            <img src={homeImg} alt="" className="home_img" />
            <div className="intro_des">
                <p className="sub_heading">XIN CHÀO CHÚNG TÔI LÀ</p>
                <h1 className="intro_heading">
                    NGÀY THÁNG NĂM <br></br>MUSIC SHOW
                </h1>
            </div>
        </section>
    );
}

export { Intro };
