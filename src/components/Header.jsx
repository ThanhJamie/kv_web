/* eslint-disable */
import React, { useEffect, useState } from "react";
// import { MenuList } from "./Menu";
import { HiViewList } from "react-icons/hi";
import Logo from "../img/LOGO.png";
import "../Styles/Header.css";
function Header() {
    // const [isMenuActiave, setMenuActive] = useState(false);

    // useEffect(() => {
    //     const menu = document.getElementById("menu");
    //     const allLi = menu.querySelectorAll("li");

    //     function linkAction() {
    //         allLi.forEach((n) => n.classList.remove("active"));
    //         this.classList.add("active");

    //         setMenuActive(!setMenuActive);
    //     }

    //     allLi.forEach((n) => n.addEventListener("click", linkAction));
    // }, []);

    // const toggleActive = () => {
    //     setMenuActive(!isMenuActiave);
    // };

    return (
        <header>
            <nav className="nav bd_grid">
                <div className="name_logo">
                    <img src={Logo} alt="" className="header_logo" />
                </div>
                <div className="sign">
                    <div className="box_sign">
                        <a className="box_signin">ĐĂNG NHẬP</a>
                        <a className="box_signup">ĐĂNG KÝ</a>
                    </div>
                    <a href="" className="card_icon">
                        <svg
                            width="31"
                            height="30"
                            viewBox="0 0 31 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.6289 30C11.8715 30 12.8789 28.9926 12.8789 27.75C12.8789 26.5074 11.8715 25.5 10.6289 25.5C9.38627 25.5 8.37891 26.5074 8.37891 27.75C8.37891 28.9926 9.38627 30 10.6289 30Z"
                                fill="white"
                                fill-opacity="0.75"
                            />
                            <path
                                d="M24.2988 30C25.5415 30 26.5488 28.9926 26.5488 27.75C26.5488 26.5074 25.5415 25.5 24.2988 25.5C23.0562 25.5 22.0488 26.5074 22.0488 27.75C22.0488 28.9926 23.0562 30 24.2988 30Z"
                                fill="white"
                                fill-opacity="0.75"
                            />
                            <path
                                d="M30.3793 3.36999C30.2863 3.25527 30.1689 3.1626 30.0358 3.09862C29.9027 3.03465 29.757 3.00096 29.6093 2.99999H8.7893L9.43931 4.99999H28.2993L25.6293 17H10.6293L6.05931 2.52999C6.00987 2.37645 5.92403 2.23714 5.80911 2.12396C5.69418 2.01077 5.55358 1.92707 5.39931 1.87999L1.2993 0.619987C1.17324 0.581247 1.04077 0.567717 0.909473 0.580171C0.778176 0.592624 0.650616 0.630817 0.534079 0.692568C0.298721 0.81728 0.122544 1.03038 0.0443047 1.28499C-0.0339341 1.53959 -0.00782592 1.81486 0.116886 2.05021C0.241597 2.28557 0.454697 2.46175 0.709305 2.53999L4.2993 3.63999L8.88931 18.14L7.2493 19.48L7.1193 19.61C6.71364 20.0775 6.48371 20.6718 6.4691 21.2906C6.4545 21.9094 6.65615 22.5139 7.0393 23C7.31186 23.3314 7.65821 23.5945 8.05064 23.7682C8.44308 23.9418 8.8707 24.0212 9.2993 24H25.9893C26.2545 24 26.5089 23.8946 26.6964 23.7071C26.8839 23.5196 26.9893 23.2652 26.9893 23C26.9893 22.7348 26.8839 22.4804 26.6964 22.2929C26.5089 22.1053 26.2545 22 25.9893 22H9.13931C9.02415 21.9961 8.91196 21.9625 8.81356 21.9025C8.71517 21.8426 8.6339 21.7583 8.5776 21.6577C8.5213 21.5572 8.49188 21.4439 8.49218 21.3286C8.49248 21.2134 8.52249 21.1002 8.5793 21L10.9893 19H26.4293C26.6605 19.0056 26.8864 18.931 27.0688 18.7888C27.2511 18.6466 27.3785 18.4456 27.4293 18.22L30.5993 4.21999C30.6297 4.0709 30.6257 3.91685 30.5876 3.76955C30.5495 3.62225 30.4782 3.4856 30.3793 3.36999Z"
                                fill="white"
                                fill-opacity="0.75"
                            />
                        </svg>
                    </a>
                    <a className="toggleMenu">
                        <HiViewList />
                    </a>
                </div>
            </nav>
        </header>
    );
}

export { Header };
