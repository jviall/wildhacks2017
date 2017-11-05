console.log('wudd aap');
var text = ['forset', 'treasure chest', 'sword', 'mace', 'potion', 'golden mask', 'skull', 'fairy'];

function parseNouns(str, callback){
	var nouns = nlp(str).nouns().out('array');
	console.log('nouns: ' + nouns);
	callback(nouns);
}


function myNlp(str, callback){
	//console.log(str);
	parseNouns(function(nouns) {
		for(var i = 0; i<nouns.length; i++){
			if(text.indexOf(nouns[i]) > -1){
				switch(nouns[i]){
					case 'forset':
						break;
					case 'treasure chest':
						break;
					case 'sword':
						break;
					case 'mace':
						break;
					case 'potion':
						break;
					case 'golden mask':
						break;
					case 'skull':
						break;
					case 'fairy':
						break;
				}
			}
		}
	});

	
	var verbs = nlp(str).verbs().out('array');
	//console.log('verbs: ' + verbs);
	var adj = nlp(str).adjectives().out('array');
	//console.log('adj: ' + adj);
	
	callback();
}