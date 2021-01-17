//Created for HackTheNorth++ 2020

//Creators:
//Zachary Lau - The Algorithm Person
//Robert Brown - The Website Person
//Samson Hua - The Random Mechanical Kid
//Risat Haque - The UI Person

//Create stylesheet
let stylesheet = document.createElement("style")
stylesheet.innerHTML = ".extensionOverlayLayer {z-index: 10000000000; position: absolute;  left: 0; top: 0;} .extensionContainer {background-color: white; opacity: 1; right: 0; bottom: 0;}";
document.body.append(stylesheet)

//Create ExtensionLayer
let overlayLayer = document.createElement("div");
overlayLayer.className = "extensionOverlayLayer";

//Create Green Scaffold
let ScaffoldImage = document.createElement("img");
ScaffoldImage.src = 'https://i.imgur.com/eYJ2Ds7.png';
ScaffoldImage.className = "UI-Image";
overlayLayer.append(ScaffoldImage);

//Create anchor
let Anchor1 = document.createElement("DIV")
Anchor1.innerHTML = '<a href="#"><img name="PlayButton" class="UI-Button" src="https://i.imgur.com/wgzcUv6.png"></a>';
Anchor1.onclick = toggle;
overlayLayer.append(Anchor1);

//Create Wand
let WandButton = document.createElement("img");
WandButton.src = 'https://i.imgur.com/2Pgy76v.png';
WandButton.className = "UI-Button1";
overlayLayer.append(WandButton);

//Create Exclamation
let ExclamationButton = document.createElement("img");
ExclamationButton.src = 'https://i.imgur.com/nn5772h.png';
ExclamationButton.className = "UI-Button2";
overlayLayer.append(ExclamationButton);

//Append
document.body.appendChild(overlayLayer);


//Functions
function PlayButtonDown()
{
PlayButton.src = "https://i.imgur.com/nn5772h.png";
console.log("Yeeet");
return true;
}

function PlayButtonUp()
{
PlayButton.src = "https://i.imgur.com/wgzcUv6.png";
console.log("Yeeet");
return true;
}

var toggled = true;
      function toggle(){
        if(!toggled){
          console.log("Streamline Flowing");
          button(toggled);
          toggled = true;
          PlayButton.src = "https://i.imgur.com/wgzcUv6.png";
          return;
        }
        if(toggled){
          console.log("Streamline Blocked");
          button(toggled);
          toggled = false;
          PlayButton.src = "https://i.imgur.com/2oHUXe1.png";
          return;
        }
      }

//WPM Information
var wpminfo = document.createElement("DIV");
wpminfo.id = "wpminfo"
document.body.appendChild(wpminfo);

// Implements the listener and state handler
function button(toggled){
if (!('webkitSpeechRecognition' in window)) {
  alert("Browser does not support the extension!");
} else {
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = false; // Unless we use this

  recognition.onstart = function() {
    // Add logic here to change the UI when we are recording
    console.log("Streamline Starting...");
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
            wpm = words / (currenttime - lasttime) * 60000; //convert ms to min
            console.log(lasttime, currenttime, words, wpm, newString);
            wpminfo.innerHTML = "<p> Wpm = " + wpm + "</p>"
        }
        recognition.onresult.lasttime = currenttime;
    }
    
  };
  recognition.onresult.lasttime = Date.now();
}

recognition.start(); //starts
    if(toggled === false){ //if false, stops
      recognition.stop();
    }
    return;
}
