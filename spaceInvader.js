"use strict";

let size = 50;

drawAvatar();

function drawAvatar() {

    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');

    context.beginPath();
    context.rect(25, 75, 300, 300);
    context.fillStyle = "black";
    context.fill();

    context.beginPath();
    context.rect(100, 100, size, size);
    context.rect(100, 150, size, size);
    context.rect(150, 150, size, size);
    context.rect(200, 100, size, size);
    context.rect(200, 200, size, size);
    context.rect(200, 250, size, size);
    context.rect(150, 250, size, size);
    context.rect(200, 150, size, size);
    context.rect(100, 200, size, size);
    context.rect(100, 250, size, size);
    context.rect(150, 300, size, size);
    context.fillStyle = "#00FF00";

    context.fill();

}