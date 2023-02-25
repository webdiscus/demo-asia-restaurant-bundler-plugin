import { createPage } from "./template";
import img from "../images/Home/chef-chic.jpg";
import img2 from "../images/Home/icy-kitchen.jpg";
import img3 from "../images/Home/catastrophic.png";
import img4 from "../images/Home/palico-hunt.jpg";
import img5 from "../images/Home/grandmeow.jpg";

const home = createPage(`
<div class="content home">
    <div class="intro fadeOut">
        <p class="intro-header">The one and only...</p>
        <p class="intro-text">Heavenly Paw can be found in Astera, Seliana, the two Gathering Hubs, and any Base Camp. Its canteen serves up a variety of mouthwatering and stat-boosting dishes to provide hunters with the nourishment they need before departing on a hunt. Never <span>EVER</span> fight on an empty stomach!</p>
    </div>

    <div class="fixed-bg1">
        <div class="fixed-bg1-text fadeOut">
            <p class="header">...Meowster Chefs...</p>
            <p class="desc">Chef's knife wielding Warriors on a succulent journey to find the ultimate foodie experience!</p>
        </div>
    </div>
    
    <section class="home-menu fadeOut">
        <p class="header">...who can satisfy your every gastronomic desire!</p>
        <div class="desc">
            <p>Day or Night.</p>
            <p>Winter or Summer.</p>
            <p>Everything everywhere all at once.</p>
        </div>
    </section>
    
    
    <div class="showcase fadeOut">
        <div class="cattagram"></div>
        <div class="img-wrapper">
            <img src="${img}" alt="showcase-1">
        </div>
        <div class="img-wrapper">
            <img src="${img2}" alt="showcase-2">
        </div>
        <div class="img-wrapper">
            <img src="${img3}" alt="showcase-3">
        </div>
        <div class="img-wrapper">
            <img src="${img4}" alt="showcase-4">
        </div>
        <div class="img-wrapper">
            <img src="${img5}" alt="showcase-5">
        </div>
    </div>
</div>
`);

export default home;

