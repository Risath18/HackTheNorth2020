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
let Anchor1 = document.createElement("A")
Anchor1.outerHTML = '<a href="#" onMouseDown="return PlayButtonDown()" onMouseUp="return PlayButtonUp()"><img name="PlayButton" src="https://i.imgur.com/wgzcUv6.png"></a>';
overlayLayer.append(Anchor1);

//Create PlayButton
// let PlayButton = document.createElement("img");
// PlayButton.src = 'https://i.imgur.com/wgzcUv6.png';
// PlayButton.className = "UI-Button";
// PlayButton.innerHTML = '<a href="#" onMouseDown="return PlayButtonDown()" onMouseUp="PlayButtonUp()"></a>';
// Anchor1.append(PlayButton);

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



