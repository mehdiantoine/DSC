"use strict";

var onDocumentLoaded = function () {

    var timer, figure, image, image_index;
    figure = document.getElementById('slider');
    image = figure.querySelector('img');
    image_index = 0;

    var images = [
        {filename: "1.jpg"},
        {filename: "2.jpg"},
        {filename: "3.jpg"},
        {filename: "4.jpg"}
    ];

    var display = function () {
        image.src ="img/slider/" + images[image_index].filename;
        // gerer l'affichage d'une image
    };

    var pictureForward = function () {
        image_index++;
        if(image_index > images.length) {
            image_index = 0;
        }
        display();
    };

    timer = setInterval(pictureForward, 3000);
    if (image_index > images.length) {
        clearInterval(timer); // remise à zéro du compteur
        image_index = 0;
    }
};



document.addEventListener('DOMContentLoaded', onDocumentLoaded);
