/* eslint-disable no-unused-vars */
import { createPage } from "./template";
import zenny from "../images/menu/Zenny.png";
import todaySpecial from "../images/menu/meals/Peiking-rathalos.jpg";
import "../styles/menu.css";

const menu = createPage(`
<div class="content menu">
    <div id="header-breakfast" class="hidden">
        <p class="header-breakfast">Menu</p>
        <div class="header-info">
            <div class="quote">
                <q class="fadeFromLeft quote-text">Supplements? At MY Canteen? Pfft! We're all organic, baby! If you need vitamin D, get some Gourmet Shroomcaps!</q>
                <p class="fadeFromRight">--The Meowscular Chef</p>
            </div>

            <div class="special-dish hidden">
                <p class="header-special">Today's special - Peking Rathalos</p>
                <p class="header-desc">"King of the Skies" - apex predator of the Ancient Forest - now comes to you in 7 explosive flavors. With each piece engulfed in his own fire breath, then masterfully marinated by the Meowster Chef with Five-spices and Teostra powder, it is guaranteed to invigorate every inch of your palate. Order now and get a chance to receive the extremely rare "Fatalis Menace Wailer"!</p>
                <img src=${todaySpecial}>
            </div>
        </div>
    </div>

    <div class="bg-bf hidden"></div>
    <div class="bg-lch"></div>
    <div class="bg-dnr"></div>
    <div class="breakfast">
        <p class="intro-breakfast" data-color="white">朝</p>
        
        <div class="breakfast-menu normal" data-color="white">
            <div class="food-container first fadeFromLeft">
                <div class="price">40000 <img src=${zenny}></div>
                <div class="food-desc"> 
                    <p class="food-desc-hdr">Kulu-Ya-Ku's Eggs</p>
                    <p>Eggs of glittering gold, super valuable and rare - also - full of purr-otein! Stolen by Kulu-Ya-Ku from nests in the Ancient Forest and Wildspire Waste. This time, the thief gets to meet a thief.</p>
                </div>
            </div> 
            <div class="food-img first fadeFromRight"></div>
        </div>
        
        <div class="breakfast-menu offset" data-color="white">
            <div class="food-container first fadeFromRight">
                <div class="price">185000 <img src=${zenny}></div>
                <div class="food-desc"> 
                    <p class="food-desc-hdr">Barroth Rib</p>
                    <p>Juicy rib wrapped inside a crunchy layer of mud from the most prestigious Hot Springs. You're not a real hunter till you chomp into that golden-brown roast.</p>
                </div>
            </div>
            <div class="food-img first fadeFromLeft"></div>
        </div>

        <div class="breakfast-menu normal" data-color="white">
            <div class="food-container second fadeFromLeft">
                <div class="price">275000 <img src=${zenny}></div>
                <div class="food-desc"> 
                    <p class="food-desc-hdr">Namielle Whisker</p>
                    <p>Chilly and freezy! Imbued with the Elder Dragon's watery power, its tenderness surpasses even the finest Gourmet Shroomcaps. Also leaves an electrifying aftertaste.</p>
                </div>
            </div>
            <div class="food-img fadeFromRight second"></div>
        </div>

        <div class="breakfast-menu offset" data-color="white">
            <div class="food-container second fadeFromRight">
                <div class="price">150000 <img src=${zenny}></div>
                <div class="food-desc"> 
                    <p class="food-desc-hdr">Paolumu Dango</p>
                    <p>Mysterious round-shaped wyvern gems only found inside the male Paolumus. Legend has it that once provoked, its neck is not the only body part inflated. Chewy...yet tender. Serve with first grade Honey from Botanical Research team for unbelievable sweetness.</p>
                </div>
            </div>
            <div class="food-img fadeFromLeft second"></div>
        </div>
    </div>

    <div class="lunch">
        <p class="intro-lunch" data-color="#ebcece">昼</p>

        <div class="lunch-menu-wrapper">
            <div class="lunch-menu" data-color="#ebcece">
                <div class="lch-food-img up"></div>

                <div class="food-container fadeOut">
                    <div class="price">525000 <img src=${zenny}></div>
                    <div class="lch-food-desc">
                        <p class="food-desc-hdr">Lavasioth Burger</p>
                        <p>Born in the depth of hell, molded by crimson inferno, melted in your mouth like explosive molten lava. The flavor will KNOCK.YOU.FLAT!</p>
                    </div>
                </div>
            </div>

            <div class="lunch-menu" data-color="#ebcece">
                <div class="lch-food-img up"></div>
                <div class="food-container fadeOut">
                    <div class="price">1 <img src=${zenny}></div>
                    <div class="lch-food-desc">
                        <p class="food-desc-hdr">Dodogama Belly</p>
                        <p>Dodogama belly is fried to purrr-fection thanks to the self-made additive from its diet of natural crystals.
                        Nothing beats sweet juice flowing out under crackling, crispy, crunchy sounds with each chompin'!</p>
                    </div>
                </div>
            </div>

            <div class="lunch-menu" data-color="#ebcece">
                <div class="lch-food-img up"></div>
                <div class="food-container fadeOut">
                    <div class="price">150000 <img src=${zenny}></div>
                    <div class="lch-food-desc">
                        <p class="food-desc-hdr">Rathian Wings</p>
                        <p>Zero colorant, 100% "Queen of the Land". The vibrant pink comes directly from its subspecies' genetic - faster, stronger and ... tastier. Give the literal meaning of "Flying without wings" to your 5 senses!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="dinner">
        <p class="intro-dinner" data-color="black">夜</p>

        <div class="dnr-container">
            <div class="dnr-header">MIDNIGHT COMBO</div>
            <div class="dnr-desc-left fadeFromLeft">
                <div class="dnr-desc">
                    <p class="food-desc-hdr">Kirin Cheese</p>
                    <p> The hidden diamond of culinary art. Each wheel is flawlessly cut into identical shapes and sizes while maintaining even the smallest microstructure features. Immaculate elasticity with just the right amount of juiciness.</p>
                </div>
            </div>

            <div class="dnr-pic-container">
                <div class="lft-dnr up"></div>
                <div class="rgt-dnr-1 up"></div>
                <div class="rgt-dnr-2 fadeFromRight"></div>
                <div class="btm-dnr fadeOut"></div>
            </div>

            <div class="dnr-desc-right">
                <div class="dnr-desc fadeFromRight">
                    <p class="food-desc-hdr">Kirin's Milk</p>
                    <p>Main ingredient for Kirin cheese. Self-explanatory.</p>
                </div>
                <div class="dnr-desc fadeFromRight">
                    <p class="food-desc-hdr">Kirin Charcuterie</p>
                    <p>Azure Horn, Thundertail, Silvermane and Finehide. You name it, we got it. Caution: Tough on the jaw.
                    </p>
                </div>
            </div>
            <div class="dnr-desc-btm">
                <div class="dnr-desc fadeOut">
                    <p class="food-desc-hdr">Thunderstriked rice</p>
                    <p>Fried rice with a high-voltage twist, shockingly delicious.
                    Prepare to be struck with awe and fill your tastebud with ec-"static" excitement. Crispy to the last grain.</p>
                </div>
                <p class="total">TOTAL: 2150000 <img src=${zenny}></p>
            </div>
        </div>
        
    </div>
</div>
`);

export default menu;