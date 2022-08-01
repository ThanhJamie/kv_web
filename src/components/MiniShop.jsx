import React from "react";
import homeshop from "../img/slideshow/Line cửa hàng.png";
import khungshop from "../img/slideshow/Group 3213.png";
import "../Styles/Minishop.css";
function MiniShop() {
    return (
        <section className="section bd_grid" id="">
            <img src={khungshop} alt="" className="khung_img" />
            <img src={homeshop} alt="" className="home_img" />
        </section>
    );
}

export { MiniShop };
