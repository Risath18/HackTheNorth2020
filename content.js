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

//Create Input Container
let InputContainer = document.createElement("div");
InputContainer.className = "InputContainer";
InputContainer.style.display = "none";

//Create Info Container
let InfoContainer = document.createElement("div");
InfoContainer.className = "InfoContainer";
InfoContainer.style.display = "none";

//Create Head
let Head = document.createElement("head");
InfoContainer.append(Head);
//Create Title
let Title = document.createElement("title");
Title.text = "Document";
Head.append(Title); 
//Create Body
let Body = document.createElement("body");
InfoContainer.append(Body);

let BodyDiv = document.createElement("div");
BodyDiv.className = "v70_0";
//Header 1
let Header1 = document.createElement("H1");
let StreamlineNode = document.createTextNode("Streamline");
StreamlineNode.className = "Streamline"
Header1.appendChild(StreamlineNode);
BodyDiv.append(Header1);
//Header 2
let Header2 = document.createElement("H1");
let StreamlineNode2 = document.createTextNode("Streamline is here for you! Speak away, and present hands-free.");
StreamlineNode2.className = "Streamline2"
Header2.appendChild(StreamlineNode2);
BodyDiv.append(Header2);
//Header 3
let Header3 = document.createElement("H1");
let StreamlineNode3 = document.createTextNode("sline.tech");
StreamlineNode3.className = "Streamline3"
Header3.appendChild(StreamlineNode3);
BodyDiv.append(Header3);
//Header 4
let Header4 = document.createElement("H1");
let StreamlineNode4 = document.createTextNode("Words Per Minute");
StreamlineNode4.className = "Streamline4"
Header4.appendChild(StreamlineNode4);
BodyDiv.append(Header4);
//Header 5
let Header5 = document.createElement("H1");
let StreamlineNode5 = document.createTextNode("0");
StreamlineNode5.className = "Streamline5"
Header5.appendChild(StreamlineNode5);
BodyDiv.append(Header5);


//Append BodyDiv
Body.append(BodyDiv);

//Create form
let Form = document.createElement("form");
InputContainer.append(Form);

let question = document.createElement("div");
question.className = "question";
Form.append(question);

let input = document.createElement("input");
input.setAttribute("type", "mText");
input.id = "mText";
input.setAttribute("required", "");
input.required = true;
question.append(input);

let label = document.createElement("label");
label.textContent = "Enter your Transition Queue";
question.append(label);

let InputButton = document.createElement("button");
InputButton.textContent = "Submit"
InputButton.setAttribute("type", "button");
InputButton.onclick = enterText;
question.append(InputButton);

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
Anchor2.onclick = toggleInput;
// Anchor2.className = "UI-Image1";
container.append(Anchor2);


//Create Exclamation
let Anchor3 = document.createElement("DIV")
Anchor3.innerHTML = '<a href="#"><img name="ExclamationButton" class="UI-Button2" src="https://i.imgur.com/nn5772h.png"></a>';
Anchor3.onclick = toggleInfo;
container.append(Anchor3);
// Anchor3.className = "UI-Image1";

//Append
container.appendChild(InfoContainer);
container.appendChild(InputContainer);
overlayLayer.appendChild(container);
document.body.appendChild(overlayLayer);

var toggledInput = false;

function toggleInput(){
    if(!toggledInput){

        if(toggledInfo){
            toggleInfo();
        }

        toggledInput = true;
        WandButton.src = "https://i.imgur.com/OKabhTu.png";
        InputContainer.style.display = "block";
        return;
    }
    if(toggledInput){
        console.log("Streamline Blocked");
        toggledInput = false;
        WandButton.src = "https://i.imgur.com/2Pgy76v.png";
        InputContainer.style.display = "none";
        return;
    }
}

var toggledInfo = false;

function toggleInfo(){
    if(!toggledInfo){

        if(toggledInput){
            toggleInput();
        }

        toggledInfo = true;
        ExclamationButton.src = "https://i.imgur.com/iyYtnnM.png";
        InfoContainer.style.display = "block";
        return;
        
    }
    if(toggledInfo){
        toggledInfo = false;
        ExclamationButton.src = "https://i.imgur.com/nn5772h.png";
        InfoContainer.style.display = "none";
        return;
    }
}

var toggled = false;
function toggle(){
  if(!toggled){
    console.log("Streamline Flowing");
    recognition.start();
    toggled = true;
    PlayButton.src = "https://i.imgur.com/2oHUXe1.png";
    return;
  }
  if(toggled){
    console.log("Streamline Blocked");
    recognition.stop();
    toggled = false;
    PlayButton.src = "https://i.imgur.com/wgzcUv6.png";
    return;
  }
}


function enterText() {
    var userIndicatedWord = document.getElementById("mText").value;
    var storage_value = {};
    storage_value[slideid] = userIndicatedWord;
    chrome.storage.local.set(storage_value, ()=>{
      console.log("Set value for " + userIndicatedWord);
    });
    toggleInput();
}

//WPM Information
var wpminfo = document.createElement("DIV");
var finalwpm_info = document.createElement("DIV");
var interimwpm_info = document.createElement("DIV");
wpminfo.id = "wpminfo"
wpminfo.appendChild(interimwpm_info);
wpminfo.appendChild(finalwpm_info);
document.body.appendChild(wpminfo);

wpminfo.style.display = "none";
finalwpm_info.style.display = "none";
interimwpm_info.style.display = "none";

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
            finalwpm = Math.round(finalwpm);
            StreamlineNode5.nodeValue = finalwpm.toString();
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

          console.log("Checking for " + slideid + " with " + interimstring);
          chrome.storage.local.get([slideid], function(result){
            checkWord(interimstring, result[slideid]); //CALLS FUNCTION TO CHECKWARD
          });

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
    document.getElementsByClassName("punch-viewer-content")[0].click();
      // alert("Transitioning to Next Slide");
  }

}

}

var slideid = "p";
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // listen for messages sent from background.js
    if (request.message === 'urlChange') {
      var urlInfo = request.url.split("/");
      console.log(urlInfo[5]);
      var slideInfo = urlInfo[6].split(".");
      console.log(slideInfo[1]);
      slideid = slideInfo[1];
    } else if (request.message === "store"){
      var trigger = {};
      trigger[request.key] = request.value;
      chrome.storage.sync.set(trigger, ()=>{
        console.log("Stored trigger " + request.value + " for " + request.key);
      })
    }
});