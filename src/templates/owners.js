import { createPage } from "./template";
import img from "../images/chefs/palico-festival.jpg";
import img2 from "../images/chefAndMeat.jpg";
import img3 from "../images/chefs/Sittingcat.jpg";
import img4 from "../images/chefs/palico-team.jpg";
import img5 from "../images/chefs/palico-fun.jpg";
import twinChefs from "../images/chefs/twinChefs.png";
import chef1 from "../images/chefs/introChef1.jpg";
import chef2 from "../images/chefs/introChef2.jpg";
import frame from "../images/chefs/picture-frame.png";
import arrowW from "../images/chefs/arrow-white.png"

const owners = createPage(`
<div class="content owners">
    <div class="intro-owners hidden">
        <p class="header">The Legendary Crew</p>
        <p class="desc">Not your regular cat-like bipedal creatures. Our Palico team consists of the highest ranked Felyne Comrades - with extensive knowledge in New World's ecosystem and a fierce curiosity for taste and nutrition. Swords and hammers that once bring down Elder Dragons will now carve your apetite!</p>
        <div class="image">
            <img src="${twinChefs}" alt="owner-1">
        </div>
    </div>

    <div class="section-divider"></div>

    <div class="intro-chefs">
        <div class="chef-1">

            <div class="image fadeFromLeft">
                <img src="${chef2}" alt="chef-1">
            </div>

            <p class="header fadeOut">The Meowscular Chef</p>
            <p class="desc fadeOut">Once the Palico partner of the Admiral, Meowscular Chef had sworn to bulk up olds and youngs all over Astera. Hunters who managed to ignore this muscle head's critiques of their "scrawny" posture often return with massive "gain". He's all talk AND quality.</p>

        </div>

        <div class="chef-2">

            <div class="image fadeFromRight">
                <img src="${chef1}" alt="chef-2">
            </div>

            <p class="header fadeOut">Grammeowster Chef</p>
            <p class="desc fadeOut">Former member of the First Fleet, the mentor of Meowscular Chef and used to manage the Canteen in Seliana. Whoever had even the slightest taste of her food will have to agree that - though completely different to her mentee's brawny appearance - Grammeowster's technique packs enough dynamite to launch your gustatory cells all the way to 7th heaven. Best-seller author with 7 billion copies of "How to eat everything" sold.</p>

        </div>

    </div>

    <div class="section-divider"></div>

    <div class="intro-staff hidden">
        <p class="header">Our philosophy</p>
        <p class="desc">Just remember, treat people and food alike... with kindness and dignity!</p>

        <div class="slide-container">
            <div class="slide one fade-in">
                <div class="numbering">1/5</div>
                <img class="frame" src="${frame}">
                <img class="main" src="${img}" alt="emp-1" id="1">
                <div class="caption">Fuck</div>
            </div>
            
            <div class="slide two fade-in">
                <div class="numbering">2/5</div>
                <img class="frame" src="${frame}">
                <img class="main" src="${img2}" alt="emp-2" id="2">
                <div class="caption">This</div>
            </div>

            <div class="slide three fade-in">
                <div class="numbering">3/5</div>
                <img class="frame" src="${frame}">
                <img class="main" src="${img3}" alt="emp-3" id="3">
                <div class="caption">Shit</div>
            </div>

            <div class="slide four fade-in">
                <div class="numbering">4/5</div>
                <img class="frame" src="${frame}">
                <img class="main" src="${img4}" alt="emp-4" id="4">
                <div class="caption">I'm</div>
            </div>

            <div class="slide five fade-in">
                <div class="numbering">5/5</div>
                <img class="frame" src="${frame}">
                <img class="main" src="${img5}" alt="emp-5" id="5">
                <div class="caption">Out</div>
            </div>

            <img class="prev" src=${arrowW}>
            <img class="next" src=${arrowW}>
        </div>

        <div class="dot-container">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
    </div>
</div>
`)

export default owners;