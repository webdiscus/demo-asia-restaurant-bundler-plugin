/* eslint-disable no-unused-vars */
import { clickOpen, clickClose, navScroll, universalObserver, tabNavStyle } from "../scripts/template";

window.addEventListener('DOMContentLoaded', () => {
    tabNavStyle();

    ['.showcase', '.home-menu', '.intro', '.fixed-bg1-text'].forEach((parentClass) => {
        universalObserver(parentClass, 0.3, parentClass, 'fadeOut', 'fadeIn')
    })
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
});

const preLoad = document.querySelector('#pre-loader')
window.onload = () => {
    preLoad.style.display = 'none';
}