'use strict';

const addEventOnElem = function(elem,type,callback){
    if(elem.length > 1){
        for(let i =0; i < elem.length; i++){
            elem[i].addEventListener(type,callback);
        }
    } else {
        elem.addEventListener(type,callback);
    }
}

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overLay  = document.querySelector("[data-overlay]");

const toggleNavBar = function() {
    navbar.classList.toggle("active");
    overLay.classList.toggle("active");
    document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavBar);

const closeNavBar = function() {
    navbar.classList.remove("active");
    overLay.classList.remove("active");
    document.body.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavBar);

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function() {
    if(window.scrollY>100){
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", activeElemOnScroll);