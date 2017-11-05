self.addEventListener('message', function(e) {
  importScripts('/javascripts/compromise.min.js');
  //console.log("shitty")
  //var r = self.nlp(e.data);
  var s = self.nlp(e.data).nouns().out('array');
  //console.log(s);

  self.postMessage(s);
}, false);