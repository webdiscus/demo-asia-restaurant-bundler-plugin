/* eslint-disable no-unused-vars */
import { nav, sideNav, stickyNav } from "../templates/nav";
import { clickOpen, clickClose, navScroll, intersectionObserve, universalObserver, tabNavStyle } from "../templates/template";
import { backgroundGallery, createLogo } from "../templates/navGallery";
import home from "../templates/home";
import footer from "../templates/footer";
import '../styles/home.css';
import '../styles/logo.css';
import "../styles/footer.css";
import '../styles/preloader.css'


document.body.appendChild(nav);
document.body.appendChild(sideNav);
document.body.appendChild(stickyNav);
document.body.appendChild(home);
document.body.appendChild(footer);

window.addEventListener('DOMContentLoaded', () => {
    tabNavStyle();
    const mainContent = document.querySelector('.content.home');
    backgroundGallery(mainContent, 'homePics');
    createLogo(document.querySelector('.sidebar.menu'));
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