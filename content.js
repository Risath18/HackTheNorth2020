//Created for HackTheNorth++ 2020

//Creators:
//Zachary Lau - The Algorithm Person
//Robert Brown - The Website Person
//Samson Hua - The Random Mechanical Kid
//Risat Haque - The UI Person

//Rip DOM how does it work!?!?!

//Create stylesheet
let stylesheet = document.createElement("style")
stylesheet.innerHTML = ".extensionOverlayLayer {z-index: 10000000000; position: absolute; width: 100%; height: 100%; left: 0; top: 0;} .extensionContainer {background-color: white; opacity: 1; right: 0; bottom: 0;}";
document.body.append(stylesheet)

//Create ExtensionLayer
let overlayLayer = document.createElement("div");
overlayLayer.className = "extensionOverlayLayer";

//Create Green Scaffold
let ScaffoldImage = document.createElement("img");
ScaffoldImage.src = 'https://i.imgur.com/eYJ2Ds7.png';
ScaffoldImage.className = "UI-Image";
overlayLayer.append(ScaffoldImage);

//Create PlayButton
let PlayButton = document.createElement("img");
PlayButton.src = 'https://i.imgur.com/wgzcUv6.png';
PlayButton.className = "UI-Button";
overlayLayer.append(PlayButton);

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

// //Create stylesheet
// let stylesheet = document.createElement("style")
// stylesheet.innerHTML = ".extensionOverlayLayer {z-index: 1000; pointer-events: none; position: absolute; width: 100%; height: 100%; left: 82.5%; top: 15% ;} .extensionContainer {width: 50px; height: 200px; background-color: white; opacity: 0; right: 0; top: 0;}";
// document.body.append(stylesheet)

// //Create overlayContainer
// let overlayContainer = document.createElement("div");
// overlayContainer.className = "extensionOverlayLayer";

// //Create Green Scaffold
// let ScaffoldImage = document.createElement("img");
// ScaffoldImage.src = 'https://i.imgur.com/eYJ2Ds7.png';
// ScaffoldImage.className = "UI-Image";
// overlayContainer.append(ScaffoldImage);

// //Create PlayButton
// let PlayButton = document.createElement("img");
// PlayButton.src = 'https://i.imgur.com/wgzcUv6.png';
// PlayButton.className = "UI-Scaffold";
// overlayContainer.append(PlayButton);

// //Create Container
// let container = document.createElement("div");
// container.className = "extensionContainer";
// overlayContainer.appendChild(container);
// document.body.appendChild(overlayContainer);
