import React from "react";
import show from "../img/slideshow/THÔNG TIN SHOW DIỄN.png";
import "../Styles/Show.css";
import imgShow from "../img/listshow/Rectangle 435.png";
import { listShow } from "./listShow";
function Show() {
    return (
        <section className="section bd_grid" id="">
            <img src={show} alt="" />
            <div className="showImage">
                {listShow &&
                    listShow.map((item) => (
                        <div className="imgBox">
                            <img src={item.img} alt="" />
                            <div className="des">
                                <div className="des_title">
                                    KHOẢNG KHÔNG NHỎ
                                </div>
                                <div className="des_time">
                                    19H00 - 20/10/2022
                                </div>
                                <div className="des_button">ĐÃ XONG</div>
                            </div>
                        </div>
                    ))}
                <div className="imgBox">
                    <img src={imgShow} alt="" />
                    <div className="des">
                        <div className="des_title">COMMING SOON</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Show };
