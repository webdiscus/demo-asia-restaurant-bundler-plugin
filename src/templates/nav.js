import { createPage } from "./template";
import menuIcon from "../images/nav/menu-icon.png";
import meatIcon from "../images/nav/Meat.png";
import "../styles/nav.css";

const nav = createPage(`
<div class="navbar" id="navbar">
    <div class="left-nav">
        <div class=symbol-container>
            <div class="sidebar symbol">
                <img class="menu-icon" src="${menuIcon}">
                <p class="menu-text">Takeoff</p>
            </div>
        </div>
        <div class="left-content">
            <a href="index.html" class="nav-inactive" id="home">HOME</a>
            <a href="owners.html" class="nav-inactive" id="owners">WHO WE ARE</a>
            <a href="menu.html" class="nav-inactive" id="menu">CUISINE</a>
            <a href="#guild" class="nav-inactive" id="contact">GUILD</a>
        </div>  
    </div>
    <div class="right-nav">
        <div class="order">
            <img class="order-img" src="${meatIcon}">
            <p class="order-text">ORDER</p>
        </div>
        <div class="reserve">
            <p class="reserve-text">RESERVE NOW</p>
        </div>
    </div>
</div>
`)

const stickyNav = createPage(`
<div class="sticky-navbar" id="sticky-navbar">
    <div class="left-nav">
        <div class=symbol-container>
            <div class="sidebar symbol">
                <img class="menu-icon" src="${menuIcon}">
                <p class="menu-text">Takeoff</p>
            </div>
        </div>
    </div>
</div>
`)


const sideNav = createPage(`
<div class="sidebar menu">
    <a href="javascript:void(0)" class="closeBtn">&#x2716;</a>
    <a href="index.html" id="home">Home</a>
    <a href="owners.html" id="owners" >Who we are</a>
    <a href="menu.html" id="menu">Menus</a>
    <a href="#guild" id="contact">Guild handler</a>
</div> 
`)



export { nav, sideNav, stickyNav };