// ==UserScript==
// @name         friendrequests
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Accept all FB friend requests. Works with TamperMonkey extension
// @author       Iain Emsley @iainemsley
// @match        https://www.facebook.com/
// @grant        none
// ==/UserScript==

'use strict';

var xPos = '';
var yPos = '';

/**
*  Find the relevant button and the click on it.
*/
var clickFlyOut = function() {
    //get the fb Requests Jewel id
    let fbJewel = document.getElementById('fbRequestsJewel');
    if (!fbJewel) { console.log('Error: The request cannot be found. Possibly the Id has changed.'); }
    //get the position 
      findPosition();
    fbJewel.firstChild.click();
    clickAcceptButtons();
}

/**
* Move the cursor to the position given.
*/  
var findPosition = function(el) {
      xPos = (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos = (el.offsetTop - el.scrollTop + el.clientTop);
      
      scrollXY(xPos, yPos);
}

/**
*  Move to an x,y position
*/
var scrollXY = function(xPosition, yPosition) {
    window.scrollTo(xPosition, yPosition);
}

/**
*  Get the accept buttons elements and accept each one.
*/
var clickAcceptButtons = function() {
    let flyoutButtons = document.getElementsByName('actions[accept]');
    for (let i in flyoutButtons) {
        scrollXY(xPos, (yPos + 2));
        flyoutButtons[i].click();
    }
}

clickFlyOut();
