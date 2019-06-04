"use strict";

var onDocumentLoaded = function () {

    var timer, figure, image, image_index;

    figure      = document.getElementById('slider');
    image       = figure.querySelector('img');
    image_index = 0;

    var images = [
        {filename: "1.jpg"},
        {filename: "2.jpg"},
        {filename: "3.jpg"},
        {filename: "4.jpg"},
        {filename: "5.jpg"},
        {filename: "6.jpg"}
    ];

    var display = function () {
        image.src ="img/slider/" + images[image_index].filename;
        // g�rer l'affichage d'une image
    };

    var pictureForward = function () {
        //it�ration de chacune des images
        image_index++;

        //SI it�ration d�passe taille du tableau 'images' -> retour � z�ro de l'index
        if(image_index > images.length) {
            image_index = 0;
        }

        //affichage
        display();
    };

    timer = setInterval(pictureForward, 2500);

    if (image_index > images.length) {
        clearInterval(timer); // remise � z�ro du compteur

        image_index = 0;
    }
};

document.addEventListener('DOMContentLoaded', onDocumentLoaded);