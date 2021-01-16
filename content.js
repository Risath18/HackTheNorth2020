//Created for HackTheNorth++ 2020

//Creators:
//Zachary Lau - The Algorithm God
//Robert Brown - The Website God
//Samson Hua - The Random Mechanical Kid
//Risat Haque - The UI God

// Add bubble to the top of the page.
document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';

var div = document.createElement( 'div' );
var play = document.createElement( 'div');
var person = document.createElement( 'div' )

//append all elements
document.body.appendChild( div );
//document.body.appendChild( person );

//div.appendChild( play );

//set attributes for div
/*
div.id = 'outter';
div.style.position = 'fixed';
div.style.top = '70%';
div.style.left = '90%';
div.style.width = '5%';   
div.style.height = '20%';
div.style.backgroundColor = '#C4C4C4';
div.style.borderRadius = '168.5px 168.5px 0px 0px';
*/

document.body.innerHTML += '<div class="v35_21">  <div class="v35_22" id="testimg"></div>  <div class="v35_23"></div>  <div class="v35_24"></div>  <div class="v35_25"></div></div>';
var img = document.getElementById('testimg');
var loho = chrome.extension.getURL('logo128.png');
img.style.backgroundImage = loho;
console.log("test");
/*
person.id = 'person';
person.style.position = 'fixed';
person.style.left = '90%';
person.style.width = '5%';
person.style.height = '5%';
person.borderRadius = '50%';
person.style.top = '85%';

person.style.backgroundColor = '#C4C4C4';


play.id = 'play';
play.borderRadius = '50%';
play.backgroundColor = '#444444';
*/