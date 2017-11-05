
var addToScene = undefined;
var renderer = undefined;
window.onload = function(){
    "use strict";
    var mainCanvas = document.getElementById('mainCanvas');
    var canvasW = 1080;
    var canvasH = 720;

    mainCanvas.width = canvasW;
    mainCanvas.height = canvasH;
    document.getElementById('speechBox').style.width = canvasH;
    renderer = PIXI.autoDetectRenderer(canvasW, canvasH);

    var stage = new PIXI.Container();
    // Layer Containers

    // var testimg = document.createElement('img');
    // testimg.setAttribute('src', '../images/backdrops/forest_backdrop.jpg');
    // document.body.appendChild(testimg);
    //stage.addChild(new PIXI.Sprite.fromImage('../images/backdrops/forest_backdrop.jpg'))

    addToScene = function(imgObject){
        try {
            var fileName = imgObject.fileName;
            var objectType = imgObject.fileType;
            var filePath = '../images/'+ objectType +'s/' + fileName;

            PIXI.Loader.add(imgObject.name, filePath).load(setupSprite);


        } catch(e){
            console.log("addToScene(imgObject : string) : something wrong with imgObject (probably). Value: " + imgObject + " Error Message: " + e);
            return null;
        }
    }
    var setupSprite = function () {
        var sprite = new PIXI.Sprite.(
        );
        console.log(sprite);
        //If this object has a scale property, set it
        if (imgObject.scale)
            sprite.scale(imgObject.scale);

        //Add it to the proper container
        if (objectType == 'backdrop') {
            console.log('succesfully identified the backdrop');
            sprite.zIndex = 0;
            sprite.x = 0;
            sprite.y = 0;
        }
        else { // the object type is 'objects
            sprite.zIndex = 5;
            sprite.anchor.set(0.5, 0.5);
            sprite.x = renderer.width / 2;
            sprite.y = renderer.height / 2;

            //put it in the sky
            //if (imgObject.sky)

            stage.addChild(sprite);
        }
    }
    addToScene(ds_sprites.backdrops.forest_backdrop);

    console.log(stage.children);

    setTimeout(renderer.render(stage), 10);
}
