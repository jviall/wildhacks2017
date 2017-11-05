window.onload = function(){
    "use strict";
    var mainCanvas = document.getElementById('mainCanvas');
    var canvasW = 1080;
    var canvasH = 720;

    mainCanvas.width = canvasW;
    mainCanvas.height = canvasH;
    document.getElementById('speechBox').style.width = canvasH;
    var renderer = PIXI.autoDetectRenderer(canvasW, canvasH);

    var stage = new PIXI.Container();

    // Layer Containers





    setTimeout(renderer.render(stage), 100);
}
