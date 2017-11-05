var forest = false, cave = false, bpotion = false, box = false, 
    fairy = false;
function backgroundToggle(fileName) {
    var element = document.getElementById("mainCanvas");
    if(fileName == "forest_backdrop.jpg"){
        if(!forest){
           element.classList.toggle("forest");
           forest = true;
        }
    }
    else if(fileName == "cavern_backdrop.jpg"){
        element.classList.toggle("cave");
    }
    else if(fileName == "blue_potion.png"){
        document.getElementById("blue_potion").classList.toggle("display");
    }
    else if(fileName == "treasure_box.png"){
        document.getElementById("treasure_chest").classList.toggle("display");
    } 
    else if(fileName == "fairy.png"){
        document.getElementById("fairy").classList.toggle("display");
    }
    else if(fileName == "skull.png"){
        document.getElementById("skull").classList.toggle("display");
    }
    else if(fileName == "gold_mask.png"){
        document.getElementById("gold_mask").classList.toggle("display");
    }
    else if(fileName == "mace.png"){
        document.getElementById("mace").classList.toggle("display");
    }
}
