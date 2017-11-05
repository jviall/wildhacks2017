var loader = PIXI.loader;
var addToScene = undefined;
var renderer = undefined;
window.onload = function(){
    "use strict";
    var canvasW = 1080;
    var canvasH = 720;

    mainCanvas.width = canvasW;
    mainCanvas.height = canvasH;
    document.getElementById('speechBox').style.width = canvasH;
    renderer = PIXI.autoDetectRenderer(canvasW, canvasH);
    document.getElementById("mainCanvas").appendChild(renderer.view);

    var stage = new PIXI.Container();
    var imgObject;

    addToScene = function(obj){
        try {
            imgObject = obj;
            var fileName = imgObject.fileName;
            var objectType = imgObject.fileType;
            var filePath = '../images/'+ objectType +'s/' + fileName;

            loader.add(imgObject.name, filePath).load(setupSprite);

        } catch(e){
            console.log("addToScene(imgObject : string) : something wrong with imgObject (probably). Value: " + imgObject + " Error Message: " + e);
            return null;
        }
    }
    var setupSprite = function () {

        var fileName = imgObject.fileName;
        var objectType = imgObject.fileType;
        var filePath = '../images/'+ objectType +'s/' + fileName;

        var sprite = new PIXI.Sprite(
            loader.resources[imgObject.name].texture
        );

        //If this object has a scale property, set it
        if (imgObject.scale)
            sprite.scale(imgObject.scale);

        //Add it to the proper container
        if (objectType == 'backdrop') {
            console.log('succesfully identified the backdrop');
            sprite.zIndex = 0;
            sprite.x = 0;
            sprite.y = 0;

            var bdCoords = scaleToRatio(imgObject.x, imgObject.y);
            if(bdCoords[0] == imgObject.x)
                sprite.height = bdCoords[1];
            else
                sprite.width = bdCoords[0];

            stage.addChild(sprite);
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

        renderer.render(stage);
    }
    function scaleToRatio(img_x, img_y){
        var wi = img_x;
        var hi = img_y;
        var ri = wi/hi;
        var rs = canvasW/canvasH;

        return (rs > ri ? [wi * canvasH/hi, canvasH] : [canvasW, hi * canvasW/wi]);
    }

    // addToScene(ds_sprites.backdrops.forest_backdrop);


    //setTimeout(renderer.render(stage), 100);
}
