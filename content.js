//Created for HackTheNorth++ 2020

//Creators:
//Zachary Lau - The Algorithm God
//Robert Brown - The Website God
//Samson Hua - The Random Mechanical Kid
//Risat Haque - The UI God

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  let link = document.createElement("a");
  link.href = tabs[0].url;
  console.log(link.href);
});
