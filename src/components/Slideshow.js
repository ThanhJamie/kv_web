import React from "react";
// import homeImg from "../img/introheading.png";
import "../Styles/Slideshow.css";
import img0 from "../img/Rectangle 261.png";
// import img1 from "../img/Rectangle 261-1.png";
// import img2 from "../img/Rectangle 261-2.png";
// import img3 from "../img/Rectangle 261-3.png";
import dot from "../img/slideshow/selcect.png";
import dotUn from "../img/slideshow/unselect.png";
function Slideshow() {
    function changeImg() {
        const x = document.getElementById("listImg");
        const y = x.getElementsByTagName("img");
        console.log(y);
    }
    return (
        <section className="section bd_grid" id="">
            <div className="slideshow">
                <div className="info">
                    <div className="info_heading">
                        KÌ 2: TRẠM DỪNG<br></br> CHÂN VŨ TRỤ
                    </div>
                    <div className="info_tag">#INDIE #POP</div>
                    <div className="info_subheading">
                        VŨ, THỊNH SUY, KIÊN TRỊNH, TRANG
                    </div>
                    <div className="info_des">
                        Với sự có mặt của Thái Vũ được mệnh danh là
                        “Hoàng tử Indie” âm nhạc của Thái Vũ có phần nhẹ nhàng
                        và dạt dào cảm xúc.<br></br> <br></br> Ngay từ khi còn
                        nhỏ tuổi, Minh Trang đã mang trong mình một tâm hồn yêu
                        nghệ thuật đặc biệt là ca hát. Đến năm 15 tuổi, Minh
                        Trang đã tập tành sáng tác và khi đó Trang theo đuổi
                        dòng nhạc Pop Ballad. <br></br>
                        <br></br>Khách mời tiếp theo là Kiên, nhạc Kiên tuy buồn
                        nhưng Kiên đã biến nỗi buồn trở nên tích cực trong bài
                        hát, pha lẫn chút gì đó đáng yêu, Kiên sẽ giúp bạn yêu
                        đời hơn thông qua những bài hát mà anh sẽ trình diễn
                        trong Ngày Tháng Năm.
                        <br></br>
                        <br></br>Khách mời cuối cùng là Thịnh Suy chất nhạc của
                        Thịnh mang nét gần gũi, hoài niệm. <br></br>
                        <br></br>Đặt vé ngay để có được vị trí ngồi đẹp bạn nhé.
                    </div>
                    <div className="info_subheading">
                        <br></br>Hẹn gặp!
                    </div>
                    {/* eslint-disable-next-line */}
                    <i className="buttonbuy">MUA NGAY</i>
                </div>
                <div className="imgshow">
                    <div class="mySlides fade">
                        <img src={img0} alt="" />
                    </div>
                    {/* <div class="mySlides fade">
                        <img src={img1} alt="" />
                    </div>
                    <div class="mySlides fade">
                        <img src={img2} alt="" />
                    </div>
                    <div class="mySlides fade">
                        <img src={img3} alt="" />
                    </div> */}
                </div>
                <div className="dot_pos" onClick={changeImg} id="listImg">
                    <img src={dot} alt="" />
                    <img src={dotUn} alt="" />
                    <img src={dotUn} alt="" />
                    <img src={dotUn} alt="" />
                </div>
            </div>
            {/* eslint-disable-next-line */}
        </section>
    );
}

export { Slideshow };
