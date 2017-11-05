
var addToScene = undefined;

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

    addToScene = function(imgObject){
        var sprite;
        if(!imgObject || imgObject.fileName == null || imgObject.fileType == null) {
            console.log("imgObject was null or empty")
            return null;
        }
        try {
            var fileName = imgObject.fileName;
            var objectType = imgObject.fileType;
            sprite = new PIXI.Sprite.fromImage('../images/'+ objectType +'s/' + fileName);
            sprite.anchor.set(0.5, 0.5);

            //If this object has a scale property, set it
            if(imgObject.scale)
                sprite.scale(imgObject.scale);

            //Add it to the proper container
            if(objectType == 'backdrop')
                stage.zIndex = 0;

            else if (objectType == 'object') {
                if (imgObject.Sky)
                    foregroundSky.addChild(sprite);
                else
                    foreground.addChild(sprite);

                stage.addChild(sprite);
            }
            else
                throw error "Object \'" + fileName + "\' does not have an object type, YAZEED.";
        } catch(e){
            console.log("addToScene(imgObject : string) : something wrong with imgObject (probably). Value: " + imgObject + " Error Message: " + e);
            return null;
        }
    }



    setTimeout(renderer.render(stage), 100);
}
