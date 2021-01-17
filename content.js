//Created for HackTheNorth++ 2020

//Creators:
//Zachary Lau - The Algorithm Person
//Robert Brown - The Website Person
//Samson Hua - The Random Mechanical Kid
//Risat Haque - The UI Person

//Create stylesheet
let stylesheet = document.createElement("style")
stylesheet.innerHTML = ".extensionOverlayLayer {z-index: 10000000000; position: absolute;  left: 0; top: 0;}";
document.body.append(stylesheet);

//Create ExtensionLayer
let overlayLayer = document.createElement("div");
overlayLayer.className = "extensionOverlayLayer";

//Create Container
let container = document.createElement("div");
container.className = "extensionContainer";

//Create Green Scaffold
let ScaffoldImage = document.createElement("img");
ScaffoldImage.src = 'https://i.imgur.com/eYJ2Ds7.png';
ScaffoldImage.className = "UI-Image";
container.append(ScaffoldImage);

//Create anchor
let Anchor1 = document.createElement("DIV")
Anchor1.innerHTML = '<a href="#"><img name="PlayButton" class="UI-Button" src="https://i.imgur.com/wgzcUv6.png"></a>';
Anchor1.onclick = toggle;
// Anchor1.className = "UI-Image";
container.append(Anchor1);

//Create Wand
let Anchor2 = document.createElement("DIV")
Anchor2.innerHTML = '<a href="#"><img name="WandButton" class="UI-Button1" src="https://i.imgur.com/2Pgy76v.png"></a>';
Anchor2.onclick = console.log("test!");
// Anchor2.className = "UI-Image1";
container.append(Anchor2);


//Create Exclamation
let Anchor3 = document.createElement("DIV")
Anchor3.innerHTML = '<a href="#"><img name="ExclamationButton" class="UI-Button2" src="https://i.imgur.com/nn5772h.png"></a>';
Anchor3.onclick = console.log("test!");
container.append(Anchor3);
// Anchor3.className = "UI-Image1";

//Append
overlayLayer.appendChild(container);
document.body.appendChild(overlayLayer);

//Table creation
let InputTable = document.createElement("table");
InputTable.style.width = "100%";
InputTable.style.border = '1px solid black';

overlayLayer.append(InputTable);


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
