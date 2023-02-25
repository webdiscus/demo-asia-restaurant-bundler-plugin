import { createPage } from "./template";
import logo from "../images/nav/logo.png";
import arrowW from "../images/nav/arrow-white.png";
import paw from "../images/nav/white-paw-print.svg"

const slideGallery = (navClass) => {
    document.body.appendChild(createPage(`
    <div class=${navClass}-container>
            <div class="${navClass} slide-active" id="0"></div>
            <div class="${navClass}" id="1"></div>
            <div class="${navClass}" id="2"></div>
    </div>
    `))
}

const backgroundGallery = (destination, navClass) => {
    const newEl = document.createElement('div');
    newEl.style.width = "100vw";
    newEl.style.height = "99.5vh";
    newEl.classList.add(navClass);
    document.body.insertBefore(newEl, destination)
}

const embedVideo = (destination, vidWrapperClass, vidAttribute, vidSrc) => {
    document.body.insertBefore(createPage(`
    <div class=${vidWrapperClass}>
        <video ${vidAttribute}>
            <source src=${vidSrc} type="video/mp4">
        </video>
    </div>
    `), destination)
}

/* Logo */
const createLogo = (elementBefore) => {
    elementBefore.after(createPage(`
    <div class="logo-wrapper">
        <div class="logo">
            <img class="logo-image" src="${logo}">
            <div class="logo-text">
                <p>THE</p>
                <p>HEAVENLY</p>
                <p>PAW</p>
            </div>
        </div>
        <div class="logo-bottom">
            <div class="logo-bottom-left">
                <a href="">TO THE CANTEEN!<img src="${arrowW}"></a> 
            </div>    
            <div class="logo-bottom-right">
                <div class="award-1">
                    <div class="aw-imgs">
                        <img src="${paw}">
                        <img src="${paw}">
                    </div>
                    <p>MEOWCHELIN</p>
                </div>
                <div class="award-2">
                    <div class="line-1">MH</div>
                    <div class="line-2">WORLD'S</div>
                    <div class="line-3">50</div>
                    <div class="line-4">BEST</div>
                    <div class="line-5">RESTAURANT</div>
                </div>
                <div class="award-3">The New World Times</div>
            </div>
        </div>
    </div>
    `))
}

export { slideGallery, backgroundGallery, embedVideo, createLogo }