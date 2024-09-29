"use strict";

drawAvatar();

function drawAvatar() {

    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');

    context.beginPath();
    context.rect(25, 75, 300, 300);
    context.fillStyle = "black"
    context.fill();

    context.beginPath();
    context.rect(100, 100, 50, 50);
    context.rect(100, 150, 50, 50);
    context.rect(150, 150, 50, 50);
    context.rect(200, 100, 50, 50);
    context.rect(200, 200, 50, 50);
    context.rect(200, 250, 50, 50);
    context.rect(150, 250, 50, 50);
    context.rect(200, 150, 50, 50);
    context.rect(100, 200, 50, 50);
    context.rect(100, 250, 50, 50);
    context.rect(150, 300, 50, 50);
    context.fillStyle = "green"
    context.stroke();
    context.fill();

}