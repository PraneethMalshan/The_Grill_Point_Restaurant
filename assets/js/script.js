'use strict';

/*
* PRELOAD
*
* Loading will be end after document is loaded
* */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load",function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});


/*
* Add event listener on multiple elements
* */

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

/*
* NAVBAR
* */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavBar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavBar);


/*
*HEADER
*/

const header = document.querySelector("[data-header]");

let lastScrollPos = 0;

const hideHeader = function () {
    const isScrollBottom = lastScrollPos < window.scrollY;
    if (isScrollBottom){
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }
    lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
        header.classList.add("active");
        hideHeader();
    } else {
        header.classList.remove("active");
    }
})









