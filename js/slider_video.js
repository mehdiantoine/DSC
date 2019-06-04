"use strict";

var onDocumentLoaded = function () {

    var container, video, video_index, fw_btn, bw_btn;

    container   = document.getElementById('video_slider');
    video       = container.querySelector('video');
    video_index = 0;
    fw_btn      = document.getElementById('fw_btn');
    bw_btn      = document.getElementById('bw_btn');

    var videos = [
        {filename: "video_01.mp4"},
        {filename: "video_02.mp4"},
        {filename: "video_03.mp4"},
        {filename: "video_04.mp4"},
        {filename: "video_05.mp4"}
    ];

    var display = function () {
        video.src ="videos/" + videos[video_index].filename;
        // gérer l'affichage d'une image
    };

    var onClickForward = function () {
        //itération de chacune des images
        video_index++;
        //SI itération dépasse taille du tableau 'images' -> retour à zéro de l'index
        if(video_index > videos.length) {
            video_index = 0;
        }
        //affichage
        display();
    };

    var onClickBackward = function () {
        video_index--;
        if(video_index < 0) {
            video_index = 4;
        }
        display();
    };

    if (video_index > videos.length) {
        video_index = 0;
    }

    fw_btn.addEventListener('click', onClickForward);
    bw_btn.addEventListener('click', onClickBackward);
};

document.addEventListener('DOMContentLoaded', onDocumentLoaded);