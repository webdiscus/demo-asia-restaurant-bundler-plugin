/* eslint-disable no-unused-vars */
import { nav, sideNav, stickyNav } from "../templates/nav";
import { clickOpen, clickClose, navScroll, carouselStart, carouselAutoRun, moveSlide, dotMove, universalObserver, tabNavStyle } from "../templates/template";
import { embedVideo, createLogo } from "../templates/navGallery";
import owners from "../templates/owners";
import footer from "../templates/footer";
import chefVid from "../videos/GrammeowsterChef4k.mp4";
import chefCutting from "../videos/CatChefCookingCutted.mp4"
import '../styles/owners.css';
import '../styles/logo.css';
import "../styles/footer.css";


document.body.appendChild(nav);
document.body.appendChild(sideNav);
document.body.appendChild(stickyNav);
document.body.appendChild(owners);
document.body.appendChild(footer);

/* backgroundGallery() */

window.addEventListener('DOMContentLoaded', () => {
    tabNavStyle();
    const mainContent = document.querySelector('.content.owners');
    embedVideo(mainContent, 'ownersVid', 'loop autoplay muted', chefCutting);
    createLogo(document.querySelector('.ownersVid'));
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