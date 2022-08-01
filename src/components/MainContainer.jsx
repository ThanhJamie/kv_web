import React from "react";
import { Intro } from "./Intro";
import { MiniShop } from "./MiniShop";
import { Show } from "./Show";
import { Slideshow } from "./Slideshow";

function MainContainer() {
    return (
        <main>
            <Intro />
            <Slideshow />
            <Show />
            <MiniShop />
        </main>
    );
}

export { MainContainer };
