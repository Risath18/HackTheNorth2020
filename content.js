//Created for HackTheNorth++ 2020

//Creators:
//Zachary Lau - The Algorithm Person
//Robert Brown - The Website Person
//Samson Hua - The Random Mechanical Kid
//Risat Haque - The UI Person

//Rip DOM how does it work!?!?!

//Inject Green Scaffolding
var div = document.createElement("DIV");
div.id = "scaffold";
var img = document.createElement("IMG");
img.src = "https://i.imgur.com/cc1Dm2s.png";
div.appendChild(img);
document.body.appendChild(div);

//Inject Button
var div2 = document.createElement("DIV");
div2.id = "button";
var img2 = document.createElement("IMG");
img2.src = "https://i.imgur.com/wgzcUv6.png";
div2.appendChild(img2);
document.body.appendChild(div2);

//WPM Information
var wpminfo = document.createElement("DIV");
wpminfo.id = "wpminfo"
document.body.appendChild(wpminfo);

// Implements the listener and state handler

if (!('webkitSpeechRecognition' in window)) {65
  alert("Browser does not support the extension!");
} else {
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = false; // Unless we use this

  recognition.onstart = function() {
    // Add logic here to change the UI when we are recording
    console.log("Starting");
  };

  // Could add an onerror or an on end thing but screw that for now 


  recognition.onresult = function(event) {
    // Keep track of last time we calculated wpm
    lasttime = recognition.onresult.lasttime;

    // Collect the new strings
    var newString = "";
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        newString += event.results[i][0].transcript;
      }
    }
    // Calculate wpm and publish
    if (newString != ""){
        var currenttime = Date.now();
        if (lasttime != NaN){
            var words = newString.trim().split(" ").length;
            wpm = words / (currenttime - lasttime) * 60000; //convert ms to s
            console.log(lasttime, currenttime, words, wpm, newString);
            wpminfo.innerHTML = "<p> Wpm = " + wpm + "</p>"
        }
        recognition.onresult.lasttime = currenttime;
    }
    
  };
  recognition.onresult.lasttime = Date.now();
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

recognition.start();
