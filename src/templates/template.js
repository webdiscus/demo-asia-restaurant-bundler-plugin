/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
const createPage = (html) => document.createRange().createContextualFragment(html);

/* Slideshow */

const carouselStart = (target) => {
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.slide');
    dots.forEach((dot) => dot.classList.remove('active'));
    slides.forEach((slide) => { slide.style.display = "none" });
    slides[target - 1].style.display = 'block';
    dots[target - 1].classList.add('active');
}

const carouselAutoRun = () => {
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.slide');

    for (let i = 0; i < slides.length; i += 1) {
        if (slides[i].style.display === "block" && (slides[i + 1])) {
            slides[i].style.display = "none";
            dots[i].classList.remove('active');
            slides[i + 1].style.display = "block";
            dots[i + 1].classList.add('active');
            break;
        } else if (i === slides.length - 1) {
            slides[i].style.display = "none";
            dots[i].classList.remove('active');
            carouselStart(1);
        }
    }
}


const moveSlide = (index) => {
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.slide');
    if (index === 1) {

        carouselAutoRun();
    } else if (index === -1) {

        for (let i = 0; i < slides.length; i += 1) {
            if (slides[i].style.display === "block" && (slides[i - 1])) {

                slides[i].style.display = "none";
                dots[i].classList.remove('active');
                slides[i - 1].style.display = "block";
                dots[i - 1].classList.add('active');
                break;
            }
            if (slides[i].style.display === "block" && i === 0) {/* if only i === 0 is the condition, the loop breaks rightaway at the start - resulting in duplicate or problematic flow */

                slides[0].style.display = "none";
                dots[0].classList.remove('active');
                carouselStart(slides.length);
                break;
            }
        }
    }
}

const dotMove = (target) => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot) => dot.classList.remove('selected'));
    target.classList.add('selected');
    const index = Array.from(dots).findIndex((a) => a.classList.contains('selected')) + 1;
    carouselStart(index);
}

/* Section style divider */

const intersectionObserve = (groupClass, tHold, curAtt, interAtt) => {
    const observerOptions = {
        root: null, /* Select the area that the observer is applied to, null = default to browser viewport */
        rootMargin: '0px', /* Margin around the root */
        threshold: tHold /* Excute callback at 50% of target visibility. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1] - Maybe good for dynamic color changing of background */
    }

    function observerCallback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {/* Many options. E.g. entry.intersectionRatio > prevRatio means that for each section of entries, we look to see if the ratio is going up (prevRatio = entry.intersectionRatio; meaning gradually checking the position - scroll up or scroll down) */
                Array.from(entry.target.children).forEach((child) => child.classList.replace(curAtt, interAtt))
                /* fade in elems that are in view */

            } else {
                Array.from(entry.target.children).forEach((child) => child.classList.replace(interAtt, curAtt))
                /* fade out elems that are no longer in view */
            }
        });
    }
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const targetGroup = document.querySelectorAll(groupClass);
    targetGroup.forEach(target => observer.observe(target));
}

const backgroundChanger = (groupClass, thold, targetEl) => {
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                /* document.body.style.backgroundColor = entry.target.dataset.color; */
                /* targetEl.style.background = targetCss;
                targetEl.style.backgroundRepeat = "no-repeat";
                targetEl.style.backgroundSize = "cover"; */
                for (let i = 0; i < targetEl.length; i += 1) {
                    document.querySelector(targetEl[0]).style.opacity = "1";
                    document.querySelector(targetEl[1]).style.opacity = "0";
                    document.querySelector(targetEl[2]).style.opacity = "0";
                }

            }
        })
    }
    const observer = new IntersectionObserver(callback, { threshold: thold });
    const targetGroup = document.querySelectorAll(groupClass);
    targetGroup.forEach(target => observer.observe(target))
}

const universalObserver = (groupClass, thold, targetElClass, currAtt, newAtt) => {
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetElAll = document.querySelectorAll(targetElClass);
                targetElAll.forEach((targetEl) => {
                    targetEl.classList.replace(currAtt, newAtt)
                })

            }
        })
    }
    const observer = new IntersectionObserver(callback, { threshold: thold });
    const targetGroup = document.querySelectorAll(groupClass);
    targetGroup.forEach(target => observer.observe(target))
}

/* const specificObserver = (groupClass, thold, targetEl, currAtt, newAtt) => {
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(targetEl)
                targetEl.setProperty('opacity', 1)
            }
        })
    }
    const observer = new IntersectionObserver(callback, { threshold: thold });
    const targetGroup = document.querySelectorAll(groupClass);
    targetGroup.forEach(target => observer.observe(target))
} */

/* Gallery interval */

const interval = {
    intervals: new Set(),

    makeInterval(...args) {
        const newInterval = setInterval(...args);
        this.intervals.add(newInterval);
        return newInterval;
    },

    makeTimeout(...args) {
        const newTimeout = setTimeout(...args);
        this.intervals.add(newTimeout);
        return newTimeout;
    },

    clear(id) {
        this.intervals.delete(id);
        return clearInterval(id);
    },

    clearAll() {
        this.intervals.clear();
    }
}

const shuffleImage = (imageClass) => {
    const images = Array.from(document.querySelectorAll(imageClass));
    const imgArray = [];

    interval.intervals.forEach((value) => {
        if ([...interval.intervals].indexOf(value) >= 2) {
            interval.intervals.delete(value)
        }
    })

    images.forEach((image) => {
        if (image.classList.contains('slide-active')) {
            imgArray.splice(0, imgArray.length);
            imgArray.push(image);
        }
    })

    const prevSlide = document.getElementById(imgArray[0].id);
    let curSlide;
    let nextSlide;

    const setSlideStyles = () => {
        curSlide.style.zIndex = '10';
        curSlide.style.display = 'block';
        nextSlide.style.zIndex = '9';
        nextSlide.style.display = 'block';
    }
    const setPrevSlide = () => {
        prevSlide.classList.remove('slide-active');
    }

    if ((Number(imgArray[0].id) < images.length - 1)) {
        curSlide = document.getElementById((Number(imgArray[0].id) + 1).toString());

        if (Number(curSlide.id) < images.length - 1) {
            nextSlide = document.getElementById(Number(curSlide.id) + 1);
        } else if (Number(curSlide.id) >= images.length - 1) {
            nextSlide = document.getElementById('0');
        }
        curSlide.classList.add('slide-active');

        interval.makeTimeout(setSlideStyles, 5000);


    } else if ((Number(imgArray[0].id) >= images.length - 1)) {
        curSlide = document.getElementById('0');


        if (Number(curSlide.id) < images.length - 1) {
            nextSlide = document.getElementById(Number(curSlide.id) + 1);
            nextSlide.style.zIndex = '9';
        } else if (Number(curSlide.id) >= images.length - 1) {
            nextSlide = document.getElementById('0');
            nextSlide.style.zIndex = '9';
        }
        curSlide.classList.add('slide-active');

        interval.makeTimeout(setSlideStyles, 5000);
    }

    interval.makeTimeout(setPrevSlide, 5000);

    for (let i = 0; i < images.length; i += 1) {
        if (images[i] !== curSlide && images[i] !== nextSlide) {
            const setImagesStyles = () => {
                images[i].style.zIndex = '8';
                images[i].style.display = 'none';
            }
            interval.makeTimeout(setImagesStyles, 5000);
        }
    }
}



/* Nav styles */

const clickOpen = (target) => {
    target.style.transform = "translate3d(0, 0, 0)";
}
const clickClose = (target) => {
    target.style.transform = "translate3d(-450px, 0, 0)";
}

const navScroll = () => {
    const sticky = document.querySelector('.sticky-navbar')
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        /* scroll 20px from top of the element (body or ROOT) - change this into original nav bar height */
        sticky.style.top = '0';
    } else {
        sticky.style.top = '-180px';
    }
}

const tabNavStyle = () => {
    const currentNav = document.querySelectorAll('.left-content a');
    const currentContent = document.querySelector('.content');
    for (let i = 0; i < currentNav.length; i += 1) {
        if (currentNav[i].id === currentContent.classList[1]) {
            currentNav[i].classList.replace('nav-inactive', 'nav-active')
        }
    }

}


//! Unused

/* const spliceObject = (obj, num1, num2) => {
    const newObj = {};
    if (!num2) {
        num2 = 1;
    }
    obj.forEach((value) => {
        const index = [...obj].indexOf(value)
        console.log(index)
        if (index < num1 || index >= num1 + num2) {
            Object.assign(newObj, value)
        }
        
    })
    console.log(newObj)
    return newObj;
}


const switchTab = (target, newContent) => {
    const curContent = document.querySelector('.content');
    const htmlNewContent = newContent.cloneNode(true);
    if (!curContent.classList.contains(`${target.id}`)) {
        curContent.parentNode.replaceChild(htmlNewContent, curContent);
    }
} */

export { createPage, clickOpen, clickClose, carouselStart, carouselAutoRun, moveSlide, dotMove, intersectionObserve, navScroll, shuffleImage, interval, backgroundChanger, universalObserver, tabNavStyle };