console.log('wudd aap');

function myNlp(str, callback){
	console.log(str);
	var nouns = nlp(str).nouns().out('array');
	console.log('nouns: ' + nouns);
	var verbs = nlp(str).verbs().out('array');
	console.log('verbs: ' + verbs);
	var adj = nlp(str).adjectives().out('array');
	console.log('adj: ' + adj);
	//console.log(parse.out('text'));
	// parse = nlp(str);
	// parse.verbs().data();
	// console.log(parse);
	// parse.adjectives().data();
	// console.log(parse);
	callback();
}