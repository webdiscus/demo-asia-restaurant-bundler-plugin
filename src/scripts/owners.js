/* eslint-disable no-unused-vars */
import { clickOpen, clickClose, navScroll, carouselStart, carouselAutoRun, moveSlide, dotMove, universalObserver, tabNavStyle } from "../scripts/template";

window.addEventListener('DOMContentLoaded', () => {
    tabNavStyle();
    carouselStart(1);
    setInterval(carouselAutoRun, 7000);
    ['.intro-owners', '.intro-staff'].forEach((parentClass) => {
        universalObserver(parentClass, 0.3, parentClass, 'hidden', 'show')
    });

    ['.intro-chefs .header', '.intro-chefs .desc'].forEach((parentClass) => {
        universalObserver(parentClass, 0.3, parentClass, 'fadeOut', 'fadeIn')
    });
    ['.chef-1 .image'].forEach((parentClass) => {
        universalObserver(parentClass, 0.5, parentClass, 'fadeFromLeft', 'fadeToRight')
    });
    ['.chef-2 .image'].forEach((parentClass) => {
        universalObserver(parentClass, 0.5, parentClass, 'fadeFromRight', 'fadeToLeft')
    });
});

window.onscroll = navScroll;

document.body.addEventListener('click', (e) => {/* Use event delegation */
    const sideNavContent = document.querySelector('.sidebar.menu');

    if (e.target.matches('.sidebar.symbol') || e.target.matches('.menu-icon') || e.target.matches('.menu-text')) {
        clickOpen(sideNavContent);
    }
    if (e.target.matches('.closeBtn')) {
        clickClose(sideNavContent);
    }
    if (e.target.matches('.prev')) {
        moveSlide(-1);
    }
    if (e.target.matches('.next')) {
        moveSlide(1);
    }
    if (e.target.matches('.dot')) {
        dotMove(e.target);
    }
});

const preLoad = document.querySelector('#pre-loader')
window.onload = () => {
    preLoad.style.display = 'none';
}