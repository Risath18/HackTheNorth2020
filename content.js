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
var btnForm = document.createElement( 'form' );
var btn = document.createElement( 'input' );

//append all elements
document.body.appendChild( div );
div.appendChild( btnForm );
btnForm.appendChild( btn );
//set attributes for div
div.id = 'myDivId';
div.style.position = 'fixed';
div.style.top = '50%';
div.style.left = '50%';
div.style.width = '100%';   
div.style.height = '100%';
div.style.backgroundColor = 'red';

//set attributes for btnForm
btnForm.action = '';

//set attributes for btn
//"btn.removeAttribute( 'style' );
btn.type = 'button';
btn.value = 'hello';
btn.style.position = 'absolute';
btn.style.top = '50%';
btn.style.left = '50%';