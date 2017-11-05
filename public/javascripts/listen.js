
//recognition.continuous = true;
var shouldRecord = true;

function startRecord(callback){
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 5;
    recognition.start();
    recognition.onresult = function (event) {
        recognition.stop();
        console.log('You said: ', event.results[0][0].transcript);
        callback(event.results[0][0].transcript);
        if(shouldRecord){
            startRecord(function (res) {
                callback(res);
            });
        }

        //recognition.start();
    };
    //callback();
}
function stopRecording(recognition){
    shouldRecord = false;
}

// generate HTML for scrolling text:


function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}





