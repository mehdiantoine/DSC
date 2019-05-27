"use strict";


var init = function (){

    var menu, nav;
    menu = $('.title-header');
    nav = $('.nav-header');

    if(window.matchMedia("(max-width: 750px)").matches) {
        /* La largeur minimum de l'affichage est 600 px inclus */
        nav.add('.hidden');

    }

    var onClickMenu = function () {

        nav.slideToggle();

    };

    menu.click(onClickMenu);

};


$(function () {

    init();

});