import { nav, sideNav, stickyNav } from "../templates/nav";
import { clickOpen, clickClose, navScroll, shuffleImage, interval, backgroundChanger, universalObserver, tabNavStyle } from "../templates/template";
import { slideGallery } from "../templates/navGallery";
import menu from "../templates/menu";
import footer from "../templates/footer";
import breakfast from "../images/menu/bg_cloud.jpg";
import lunch from '../images/menu/bg_game-manual.jpg'
import "../styles/footer.css";

document.body.appendChild(nav);
document.body.appendChild(sideNav);
document.body.appendChild(stickyNav);
slideGallery('menuPics');
document.body.appendChild(menu);
document.body.appendChild(footer);

window.addEventListener('DOMContentLoaded', () => {
    tabNavStyle();
    /* Nav Gallery */
    const menuInterval = () => shuffleImage('.menuPics');
    const images = Array.from(document.querySelectorAll('.menuPics'));
    const firstImageInterval = () => {
        images[1].style.display = 'block';
    }
    interval.makeTimeout(firstImageInterval, 10000);
    interval.makeInterval(menuInterval, 10000);
    /* Background changing */

    backgroundChanger('.breakfast', 0.01, ['.bg-bf', '.bg-lch', '.bg-dnr'], `url(${breakfast})`);
    backgroundChanger('.lunch', 0.1, ['.bg-lch', '.bg-bf', '.bg-dnr'], `url(${lunch})`);
    backgroundChanger('.dinner', 0.1, ['.bg-dnr', '.bg-bf', '.bg-lch'], `url(${lunch})`);

    /* Section observe */
    ['#header-breakfast', '.special-dish'].forEach((parentClass) => {
        universalObserver(parentClass, 0.3, parentClass, 'hidden', 'show')
    });

    ['.quote-text', '.breakfast-menu.normal .food-container.first', '.breakfast-menu.normal .food-container.second', '.breakfast-menu.offset .food-img.first', '.breakfast-menu.offset .food-img.second', '.dnr-desc-left'].forEach((parentClass) => {
        universalObserver(parentClass, 0.3, parentClass, 'fadeFromLeft', 'fadeToRight')
    });
    ['.quote p:nth-of-type(1)', '.breakfast-menu.normal .food-img.first', '.breakfast-menu.normal .food-img.second', '.breakfast-menu.offset .food-container.first', '.breakfast-menu.offset .food-container.second', '.dnr-desc-right .dnr-desc', '.rgt-dnr-2'].forEach((parentClass) => {
        universalObserver(parentClass, 0.3, parentClass, 'fadeFromRight', 'fadeToLeft')
    });
    ['.lch-food-img', '.lft-dnr', '.rgt-dnr-1'].forEach((parentClass) => {
        universalObserver(parentClass, 0.3, parentClass, 'up', 'down')
    });
    ['.lunch .food-container', '.dnr-desc-btm .dnr-desc', '.btm-dnr'].forEach((parentClass) => {
        universalObserver(parentClass, 0.1, parentClass, 'fadeOut', 'fadeIn')
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
});