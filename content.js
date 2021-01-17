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

//Create White Scaffold
let InputScaffold = document.createElement('img');
InputScaffold.src = "https://i.imgur.com/KFhpOYc.png";
InputScaffold.className = "UI-Input";
InputScaffold.style.display = "none";
container.append(InputScaffold);

//Create Input Field
let Input = document.createElement("INPUT");
Input.className = "UI-InputField";
Input.setAttribute("type", "text");
Input.setAttribute("value", "Enter your Transition Word");
container.append(Input);

//Create anchor
let Anchor1 = document.createElement("DIV")
Anchor1.innerHTML = '<a href="#"><img name="PlayButton" class="UI-Button" src="https://i.imgur.com/wgzcUv6.png"></a>';
Anchor1.onclick = toggle;
// Anchor1.className = "UI-Image";
container.append(Anchor1);

//Create Wand
let Anchor2 = document.createElement("DIV")
Anchor2.innerHTML = '<a href="#"><img name="WandButton" class="UI-Button1" src="https://i.imgur.com/2Pgy76v.png"></a>';
Anchor2.onclick = toggleInput;
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

var toggledInput = false;

function toggleInput(){
    if(!toggledInput){
        toggledInput = true;
        WandButton.src = "https://i.imgur.com/OKabhTu.png";
        InputScaffold.style.display = "block";
        return;
    }
    if(toggled){
        console.log("Streamline Blocked");
        toggledInput = false;
        WandButton.src = "https://i.imgur.com/2Pgy76v.png";
        InputScaffold.style.display = "none";
        return;
    }
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

//textbox selection from user to test condition
var userIndicatedWord;
function enterText() {
    userIndicatedWord = document.getElementById("myText").value;
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
          interimwpm_info.innerHTML = "<p> Instantaneous wpm: "+interimwpm+"</p>"
          console.log(interimwpm); 

          checkWord(interimstring, userIndicatedWord); //CALLS FUNCTION TO CHECKWARD

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

  function checkWord(saidWord, userIndicatedWord){
    //checking if it contains current word
  if (saidWord.includes(userIndicatedWord)){
      alert("Transitioning to Next Slide");
  }

}

}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // listen for messages sent from background.js
    if (request.message === 'urlChange') {
      var urlInfo = request.url.split("/");
      console.log(urlInfo[5]);
      var slideInfo = urlInfo[6].split(".");
      console.log(slideInfo[1]);
    }
});