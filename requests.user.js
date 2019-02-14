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

/**
*  Find the relevant button and the click on it.
*/
var clickFlyOut = function() {
      //get the fb Requests Jewel id

    let fbJewel = document.getElementById('fbRequestsJewel');
    if (!fbJewel) { console.log('Error: The request cannot be found. Possibly the Id has changed.'); }
    fbJewel.firstChild.click();
    clickAcceptButtons();
}

/**
*  Get the accept buttons elements and accept each one.
*/
var clickAcceptButtons = function() {
    let flyoutButtons = document.getElementsByName('actions[accept]');
    for (let i in flyoutButtons) {
        flyoutButtons[i].click();
    }
}

clickFlyOut();
