import React from "react";
import { Intro } from "./Intro";
import { Slideshow } from "./Slideshow";

function MainContainer() {
    return (
        <main>
            <Intro />
            <Slideshow/>
        </main>
    );
}

export { MainContainer };
