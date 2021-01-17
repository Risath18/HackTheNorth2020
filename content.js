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

var toggled = false;
function toggle(){
  if(!toggled){
    console.log("Streamline Flowing");
    recognition.start();
    toggled = true;
    PlayButton.src = "https://i.imgur.com/wgzcUv6.png";
    return;
  }
  if(toggled){
    console.log("Streamline Blocked");
    recognition.stop();
    toggled = false;
    PlayButton.src = "https://i.imgur.com/2oHUXe1.png";
    return;
  }
}

//WPM Information
var wpminfo = document.createElement("DIV");
var finalwpm_info = document.createElement("DIV");
var interimwpm_info = document.createElement("DIV");
wpminfo.id = "wpminfo"
wpminfo.appendChild(interimwpm_info);
wpminfo.appendChild(finalwpm_info);
document.body.appendChild(wpminfo);

// Implements the listener and state handler
if (!('webkitSpeechRecognition' in window)) {
  alert("Browser does not support the extension!");
} else {
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = function() {
    // Add logic here to change the UI when we are recording
    console.log("Streamline Starting...");
  };

  // Could add an onerror or an on end thing but screw that for now 

  recognition.onresult = function(event) {
    // Use local copies cuz these names are long af
    var lasttime = recognition.onresult.lasttime;
    var speaking = recognition.onresult.speaking;

    // Collect the new strings
    var finalstring = "";
    var interimstring = "";
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      var phrase = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalstring += phrase;
      } else {
        interimstring += phrase;
      }
    }

    if (finalstring != ""){
        // Calculate wpm for the last confirmed section
        if (lasttime != NaN){
            var finalwpm = get_wpm(finalstring, lasttime);
            finalwpm_info.innerHTML = "<p> Paragraph level wpm: "+finalwpm+"</p>";
            console.log(finalwpm);
        }
        speaking = false;
    }

    if (interimstring != "") {
      // Tentaveily calculate wpm
      var currenttime = Date.now();
      if (lasttime != NaN){
          var interimwpm = get_wpm(interimstring, lasttime);
          interimwpm_info.innerHTML = "<p> Interim level wpm: "+interimwpm+"</p>"
          console.log(interimwpm); 
      }
      // If we weren't previously speaking start the timer
      if (!speaking){
        speaking = true;
        lasttime = Date.now();
      }
    }

    recognition.onresult.lasttime = lasttime;
    recognition.onresult.speaking = speaking;    
  };
  recognition.onresult.lasttime = NaN;
  recognition.onresult.speaking = false;
  // Helper function for wpm calcaultions
  function get_wpm(string, lasttime){
    var currenttime = Date.now();
    var words = string.trim().split(" ").length;
    var wpm = words / (currenttime - lasttime) * 60000; //convert ms to mins
    return wpm
  }

}
