var forest = false, cave = false, bpotion = false, box = false, 
    fairy = false, skull = false, gold = false, mace = false,;
function backgroundToggle(fileName) {
    var element = document.getElementById("mainCanvas");
    if(fileName == "forest_backdrop.jpg"){
        if(!forest){
           element.classList.toggle("forest");
           forest = true;
        }
    }
    else if(fileName == "cavern_backdrop.jpg"){
        if(!cave){
            element.classList.toggle("cave");
            cave = true;
        }
    }
    else if(fileName == "blue_potion.png"){
        if(!bpotion){
            document.getElementById("blue_potion").classList.toggle("display");
            bpotion = true;
        }
    }
    else if(fileName == "treasure_box.png"){
        if(!box){
            document.getElementById("treasure_chest").classList.toggle("display");
            box = true;
        }
    } 
    else if(fileName == "fairy.png"){
        if(!fairy){
            document.getElementById("fairy").classList.toggle("display");
            fairy = true;
        }
    }
    else if(fileName == "skull.png"){
        if(!skull){
            document.getElementById("skull").classList.toggle("display");
            skull = true;
        }
    }
    else if(fileName == "gold_mask.png"){
        if(!gold){
            document.getElementById("gold_mask").classList.toggle("display");
            gold = true;
        }
    }
    else if(fileName == "mace.png"){
        if(!mace){
            document.getElementById("mace").classList.toggle("display");
            mace = true;
        }
    }
}
