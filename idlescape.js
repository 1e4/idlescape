// ==UserScript==
// @name         Title Bar Update
// @namespace    http://github.com/1e4/idlescape
// @version      0.1
// @description  Updates title bar with your current status
// @author       Ian
// @match        https://idlescape.com/game
// @grant        none
// ==/UserScript==

let defaultTitle = document.title,
    initialStatus = null,
    currentStatus = null,
    currentAction = null,
    currentSkill = null;

(function() {
    'use strict';
    setInterval(checkStatus, 1000);
})();

function updateTitle(title) {

    title = '[' + title + '] ';

    title = title + defaultTitle;

    document.title = title;
}

function checkStatus() {
    initialStatus = document.querySelector('.skill-levels-total-combat .status-action div').innerText.replace('Status: ', '');

    // First we split as the first item is the skill
    let tempStatus = initialStatus.split(' ');


    currentSkill = tempStatus[0];
    // The rest is the action
    tempStatus = tempStatus.slice(1);

    currentAction = tempStatus.join(' ');

    updateTitleBar();
}

function updateTitleBar() {
    let title;

    title = getStatus() + ' ' + getAction();

    updateTitle(title);
}

function getStatus() {

    let status,
        skill = getSkill();


    switch(skill) {
        case 'Smelting':
            return getSmithingStatus();
        case 'Cooking':
            return getCookingStatus();
        case 'Fighting':
            return getCombatStatus();
        default:
            return status;
    }

    return status;
}

function getSkill() {
    return currentSkill;
}

function getAction() {
    return currentAction;
}

function getBurnLeft() {
    return document.getElementById('heat').innerText;
}

function getCookingStatus() {
    let cookCount = 0;

    if(getAction() === 'Shrimps') {
        let amount = getInventoryItem("Raw shrimpinventory"),
            burn = getBurnLeft();

        if(amount < burn){
            cookCount = amount;
        } else {
            cookCount = burn;
        }
    } else if(getAction() === 'Anchovys') {
        let amount = getInventoryItem("Raw anchovyinventory"),
            burn = Math.floor(getBurnLeft() / 5);

        if(amount < burn) {
            cookCount = amount;
        } else {
            cookCount = burn;
        }
    } else if(getAction() === 'Trouts') {

        let amount = getInventoryItem("Raw troutinventory"),
            burn = Math.floor(getBurnLeft() / 15);

        if(amount < burn) {
            cookCount = amount;
        } else {
            cookCount = burn;
        }
    } else if(getAction() === 'Salmons') {

        let amount = getInventoryItem("Raw salmoninventory"),
            burn = Math.floor(getBurnLeft() / 25);

        if(amount < burn) {
            cookCount = amount;
        } else {
            cookCount = burn;
        }
    } else if(getAction() === 'Lobsters') {

        let amount = getInventoryItem("Raw lobsterinventory"),
            burn = Math.floor(getBurnLeft() / 40);

        if(amount < burn) {
            cookCount = amount;
        } else {
            cookCount = burn;
        }
    } else if(getAction() === 'Tunas') {

        let amount = getInventoryItem("Raw tunainventory"),
            burn = Math.floor(getBurnLeft() / 70);

        if(amount < burn) {
            cookCount = amount;
        } else {
            cookCount = burn;
        }
    } else if(getAction() === 'Sharks') {

        let amount = getInventoryItem("Raw sharkinventory"),
            burn = Math.floor(getBurnLeft() / 150);

        if(amount < burn) {
            cookCount = amount;
        } else {
            cookCount = burn;
        }
    }

    return 'Fish: ' + cookCount;

}

function getSmithingStatus() {

    let barCount = 0;

    if(getAction() === 'Bronze bar') {
        let tinAmount = getInventoryItem("Tin oreinventory"),
            copperAmount = getInventoryItem("Copper oreinventory");

        console.log(tinAmount, copperAmount);

        // If resources are less than burn show resource count else show burn
        if(tinAmount > getBurnLeft() && copperAmount > getBurnLeft()) {
            if(tinAmount > copperAmount)
            {
                barCount = copperAmount;
            } else {
                barCount = tinAmount;
            }
        } else {
            barCount = getBurnLeft();
        }

    } else if(getAction() === 'Iron bar') {
        let amount = getInventoryItem("Iron oreinventory"),
            bars = Math.floor(amount / 3),
            burn = Math.floor(getBurnLeft() / 5);

        if(bars < burn)
        {
            barCount = bars;
        } else {
            barCount = burn;
        }

    } else if(getAction() === 'Gold bar') {
        let amount = getInventoryItem("Gold oreinventory"),
            bars = Math.floor(amount / 10),
            burn = Math.floor(getBurnLeft() / 20);

        if(bars < burn) {
            barCount = bars;
        } else {
            barCount = burn;
        }

    } else if(getAction() === 'Mithril bar') {
        let amount = getInventoryItem("Mithril oreinventory"),
            bars = Math.floor(amount / 5),
            burn = Math.floor(burn / 50);


        if(bars < burn) {
            barCount = bars;
        } else {
            barCount = burn;
        }
    } else if(getAction() === 'Adamantite bar') {
        let amount = getInventoryItem("Adamantite oreinventory"),
            bars = Math.floor(amount / 10),
            burn = Math.floor(burn / 100);


        if(bars < burn) {
            barCount = bars;
        } else {
            barCount = burn;
        }
    } else if(getAction() === 'Runite bar') {
        let amount = getInventoryItem("Runite oreinventory"),
            bars = Math.floor(amount / 15),
            burn = Math.floor(burn / 200);


        if(bars < burn) {
            barCount = bars;
        } else {
            barCount = burn;
        }
    }

    return 'Bars: ' + barCount;
}

function getCombatStatus() {
    let inventoryCount = document.querySelectorAll('.combat-gear-inventory .cookedFish').length;

    return 'Food: ' + inventoryCount;
}

function getInventoryItem(item) {
    return document.querySelectorAll('[data-for="'+item+'"]')[0].innerText || 0;
}
