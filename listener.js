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
    // Handle the results 
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        // Search for key phrase and move to next slide
      }
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
