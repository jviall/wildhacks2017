console.log('wudd aap');
var text = { forest: ds_sprites.backdrops.forest_backdrop, 
			treasure_chest: ds_sprites.objects.treasure_box , 
			sword: ds_sprites.objects.sword, 
			mace: ds_sprites.objects.mace, 
			potion: ds_sprites.objects.blue_potion,
			golden_mask: ds_sprites.objects.golden_mask, 
			skull: ds_sprites.objects.skull,
			cave: ds_sprites.backdrops.cavern_backdrop,
			fairy: ds_sprites.objects.fairy};

function getNouns(noun,callback){
	//for(var i = 0; i<nouns.length; i++){
		//console.log("found noun is: " + nouns[i] + ' ' + text.nouns[i]);
		var splitted = noun.split(' ');
		var nou;
		if(splitted.length > 1){
			nou = splitted[0] + '_' + splitted[1];
		} else {
			nou = noun;
		}
		console.log(nou);
		if(nou in text){
			console.log("found noun is: " + nou + ' ' + text[nou].name);
			callback(text[nou]);
		}
	//}
}

//function parseNouns(str, callback){
	//var nouns = 
	//console.log('nouns: ' + nouns);
	//callback(nouns);
//}


function myNlp(str, callback){
	//console.log(str);
//	parseNouns(str, function(nouns) {
	var worker = new Worker('/javascripts/worker.js');
	worker.addEventListener('message', function(r){
		//console.log(r.data.length);
		console.log(r.data);
		for(var i = 0; i<r.data.length; i++){
			var temp = r.data.pop();
			getNouns(temp, function(obj) {
				console.log("Dis boi is obj: " + obj)
				callback(obj);
			});
		}
	}, false);
	
	worker.postMessage(str);
		//callback(obj);
	//});

	
	var verbs = nlp(str).verbs().out('array');
	//console.log('verbs: ' + verbs);
	var adj = nlp(str).adjectives().out('array');
	//console.log('adj: ' + adj);
	
	//callback();
}