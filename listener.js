// Implements the listener and state handler

// We need to add some state tracking or something here

if (!('webkitSpeechRecognition' in window)) {
  alert("Browser does not support the extension!")
} else {
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = false; // Unless we use this

  recognition.onstart = function() {
    // Add logic here to change the UI when we are recording
  };

  // Could add an onerror or an on end thing but screw that for now 

  recognition.onresult = function(event) {
    static var lasttime = None;
    var newString = "";
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        newString += event.results[i][0].transcript;
      }
    }
    if (newString != ""){
        var currenttime = new Date().getTime();
        var words = newStirng.split().length();
        wpm = words / (currenttime - lasttime) * 60;
        console.log(wpm);
        wpminfo.innerHTML = "<p> Wpm = " + wpm + "</p>"
    }
    
  };
}

// Helper formatting functions
var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

var first_char = /\S/;
function capitalize(s) {
  return s.replace(first_char, function(m) { return m.toUpperCase(); });
}


// Don't have a button to start it yet
recognition.start()
