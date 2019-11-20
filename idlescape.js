// ==UserScript==
// @name         Title Bar Update
// @namespace    http://github.com/1e4/idlescape
// @version      0.3
// @description  Updates title bar with your current status
// @author       Ian
// @match        http*://idlescape.com/game
// @grant        none
// ==/UserScript==

let defaultTitle = document.title,
    initialStatus = null,
    currentAction = null,
    currentSkill = null,
    chatWindow = null,
    ttlElement,
    ttlContainer,
    ttlInterval;

(function() {
    'use strict';

    ttlInterval = setInterval(findTTLContainer, 1000);

    setInterval(checkStatus, 1000);
    chatWindow = setInterval(checkChat, 1000);
})();

function findTTLContainer() {

    let container = document.querySelectorAll('.navbar3 .status-action');
    if(!container) {
        return;
    } else {
        ttlContainer = container[0];

        ttlElement = document.createElement('div');
        ttlElement.style.textAlign = 'center';
        ttlElement.innerText = 'TTL';

        ttlContainer.append(ttlElement);


        clearInterval(ttlInterval);
    }
}

function checkChat() {

   let chat = document.querySelectorAll('.chat-area.active-chat-container ul');

    if(!chat) return;

    let children = chat[0].children;

    for (let i = 0; i < children.length; i++) {
        if(children[i].getAttribute('data-tmp-bound') === "true") continue;
        children[i].setAttribute('data-tmp-bound', true);
        children[i].addEventListener('click', function() {
            let name = this.getElementsByTagName('b')[0].innerText.split('[')[0],
                chatBox = document.querySelector('.chat-container input');
            chatBox.value = '/w ' + name + ' ';
            chatBox.focus();
        });
    }

}

function updateTitle(title) {

    title = '[' + title + '] ';

    title = title + defaultTitle;

    document.title = title;
}

function checkStatus() {
    initialStatus = document.querySelector('.skill-levels-total-combat .status-action div').innerText.replace('Status: ', '');

    // First we split as the first item is the skill
    let tempStatus = initialStatus.split(' ');

    if(tempStatus[1] === 'fishing') {
        currentSkill = 'fishing';
        currentAction = tempStatus.join(' ');
    } else {

        currentSkill = tempStatus[0];
        // The rest is the action
        tempStatus = tempStatus.slice(1);

        currentAction = tempStatus.join(' ');
    }

    updateTTL();

    updateTitleBar();
}

function updateTitleBar() {
    let title;

    if(getAction() === 'Idling') {
        title = 'Idle';
    } else {
        title = getStatus() + ' ' + getAction();
    }

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
            return skill;
    }

    return skill;
}

function getSkill() {
    return currentSkill;
}

function getAction() {
    return currentAction;
}

function getBurnLeft() {
    return parseInt(document.getElementById('heat').innerText);
}
function fancyTimeFormat(time)
{
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

function getExperienceLeftForCurrentAction() {
    let header,
        skillLowerCase = getSkill().toLowerCase();

    if(skillLowerCase === 'idling' || skillLowerCase === 'fighting') return;

    if(skillLowerCase === 'smelting')
        skillLowerCase = 'smithing';
    else if(skillLowerCase === 'chopping')
        skillLowerCase = 'woodcutting';
    else if(['net', 'harpoon', 'cage', 'fly'].includes(skillLowerCase))
        skillLowerCase = 'fishing';

    let xp = document.getElementById(`${skillLowerCase}Header`).getElementsByTagName('span')[2].innerHTML.replace(',', '').replace('Left: ', '') || 0;

    return parseInt(xp);
}

function updateTTL() {
    let xpLeft = getExperienceLeftForCurrentAction(),
        resourceContainer = getResourceContainer(),
        timePerItem = getResourceContainerTimeLeft(),
        xpPerItem = getResourceContainerXp();

    let totalTime = (xpLeft / xpPerItem) * timePerItem;

    totalTime = fancyTimeFormat(Math.floor(totalTime));

    ttlContainer.querySelectorAll('div')[1].innerText = "TTL:" + totalTime;
}

function getResourceContainer(alt) {

    alt = alt || getCurrentResourceAction();

    if(!alt) return;

    return document.querySelectorAll('.resource-container .resource-container-image[alt="'+alt+'"]')[0].parentElement;
}

function getResourceContainerButton(alt) {
    alt = alt || getCurrentResourceAction();

    if(!alt) return;

    return getResourceContainer(alt).querySelectorAll('.resource-container-button .btn')[0];
}

function getResourceContainerTimeLeft(alt) {
    alt = alt || getCurrentResourceAction();

    let container;

    if(!alt) return;

    container = getResourceContainer(alt).querySelectorAll('.resource-time');

    if(container.length > 1)
        return parseFloat(container[1].innerText.replace('s', ''));
    else
        return parseFloat(container[0].innerText.replace('s', ''));
}

function getResourceContainerXp(alt) {
    alt = alt || getCurrentResourceAction();

    if(!alt) return;

    return parseInt(getResourceContainer(alt).querySelector('.scrolling-text').innerText.replace('xp', ''));
}

function getCurrentResourceAction() {

    let action = getAction();

    if(getSkill() === 'Cooking')
    {
        let s = action.slice(0, -1).toLowerCase();

        action = 'Cooked ' + s;
    }

    return action;
}

function getCookingStatus() {
    let cookCount = 0;

    if(getAction() === 'Shrimps') {
        let amount = getInventoryItem("Raw shrimpinventory"),
            burn = getBurnLeft(),
            resource = getResourceContainerButton("Cooked shrimp");

        if(amount < burn){
            cookCount = amount;
        } else {
            cookCount = burn;
        }
        resource.innerText = 'STOP (' + cookCount + ' fish)';
    } else if(getAction() === 'Anchovys') {
        let amount = getInventoryItem("Raw anchovyinventory"),
            burn = Math.floor(getBurnLeft() / 5),
            resource = document.querySelectorAll('.resource-container .resource-container-image[alt="Cooked anchovy"]')[0].parentElement.querySelectorAll('.resource-container-button .btn')[0];

        if(amount < burn) {
            cookCount = amount;
        } else {
            cookCount = burn;
        }
        resource.innerText = 'STOP (' + cookCount + ' fish)';
    } else if(getAction() === 'Trouts') {

        let amount = getInventoryItem("Raw troutinventory"),
            burn = Math.floor(getBurnLeft() / 15),
            resource = document.querySelectorAll('.resource-container .resource-container-image[alt="Cooked trout"]')[0].parentElement.querySelectorAll('.resource-container-button .btn')[0];

        if(amount < burn) {
            cookCount = amount;
        } else {
            cookCount = burn;
        }
        resource.innerText = 'STOP (' + cookCount + ' fish)';
    } else if(getAction() === 'Salmons') {

        let amount = getInventoryItem("Raw salmoninventory"),
            burn = Math.floor(getBurnLeft() / 25),
            resource = document.querySelectorAll('.resource-container .resource-container-image[alt="Cooked salmon"]')[0].parentElement.querySelectorAll('.resource-container-button .btn')[0];

        if(amount < burn) {
            cookCount = amount;
        } else {
            cookCount = burn;
        }
        resource.innerText = 'STOP (' + cookCount + ' fish)';
    } else if(getAction() === 'Lobsters') {

        let amount = getInventoryItem("Raw lobsterinventory"),
            burn = Math.floor(getBurnLeft() / 40),
            resource = document.querySelectorAll('.resource-container .resource-container-image[alt="Cooked lobster"]')[0].parentElement.querySelectorAll('.resource-container-button .btn')[0];

        if(amount < burn) {
            cookCount = amount;
        } else {
            cookCount = burn;
        }
        resource.innerText = 'STOP (' + cookCount + ' fish)';
    } else if(getAction() === 'Tunas') {

        let amount = getInventoryItem("Raw tunainventory"),
            burn = Math.floor(getBurnLeft() / 70),
            resource = document.querySelectorAll('.resource-container .resource-container-image[alt="Cooked tuna"]')[0].parentElement.querySelectorAll('.resource-container-button .btn')[0];

        if(amount < burn) {
            cookCount = amount;
        } else {
            cookCount = burn;
        }
        resource.innerText = 'STOP (' + cookCount + ' fish)';
    } else if(getAction() === 'Sharks') {

        let amount = getInventoryItem("Raw sharkinventory"),
            burn = Math.floor(getBurnLeft() / 150),
            resource = document.querySelectorAll('.resource-container .resource-container-image[alt="Cooked shark"]')[0].parentElement.querySelectorAll('.resource-container-button .btn')[0];

        if(amount < burn) {
            cookCount = amount;
        } else {
            cookCount = burn;
        }
        resource.innerText = 'STOP (' + cookCount + ' fish)';
    }

    return 'Fish: ' + cookCount;

}

function getSmithingStatus() {

    let barCount = 0;

    if(getAction() === 'Bronze bar') {
        let tinAmount = getInventoryItem("Tin oreinventory"),
            copperAmount = getInventoryItem("Copper oreinventory"),
            resource = document.querySelectorAll('.resource-container .resource-container-image[alt="Bronze bar"]')[0].parentElement.querySelectorAll('.resource-container-button .btn')[0];

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

        resource.innerText = 'STOP (' + barCount + ' bars)';

    } else if(getAction() === 'Iron bar') {
        let amount = getInventoryItem("Iron oreinventory"),
            bars = Math.floor(amount / 3),
            burn = Math.floor(getBurnLeft() / 5),
            resource = document.querySelectorAll('.resource-container .resource-container-image[alt="Iron bar"]')[0].parentElement.querySelectorAll('.resource-container-button .btn')[0];


        if(bars < burn)
        {
            barCount = bars;
        } else {
            barCount = burn;
        }

        resource.innerText = 'STOP (' + barCount + ' bars)';

    } else if(getAction() === 'Gold bar') {
        let amount = getInventoryItem("Gold oreinventory"),
            bars = Math.floor(amount / 10),
            burn = Math.floor(getBurnLeft() / 20),
            resource = document.querySelectorAll('.resource-container .resource-container-image[alt="Gold bar"]')[0].parentElement.querySelectorAll('.resource-container-button .btn')[0];

        if(bars < burn) {
            barCount = bars;
        } else {
            barCount = burn;
        }

    } else if(getAction() === 'Mithril bar') {
        let amount = getInventoryItem("Mithril oreinventory"),
            bars = Math.floor(amount / 5),
            burn = Math.floor(burn / 50),
            resource = document.querySelectorAll('.resource-container .resource-container-image[alt="Mithril bar"]')[0].parentElement.querySelectorAll('.resource-container-button .btn')[0];


        if(bars < burn) {
            barCount = bars;
        } else {
            barCount = burn;
        }

        resource.innerText = 'STOP (' + barCount + ' bars)';
    } else if(getAction() === 'Adamantite bar') {
        let amount = getInventoryItem("Adamantite oreinventory"),
            bars = Math.floor(amount / 10),
            burn = Math.floor(burn / 100),
            resource = document.querySelectorAll('.resource-container .resource-container-image[alt="Adamantite bar"]')[0].parentElement.querySelectorAll('.resource-container-button .btn')[0];


        if(bars < burn) {
            barCount = bars;
        } else {
            barCount = burn;
        }

        resource.innerText = 'STOP (' + barCount + ' bars)';
    } else if(getAction() === 'Runite bar') {
        let amount = getInventoryItem("Runite oreinventory"),
            bars = Math.floor(amount / 15),
            burn = Math.floor(burn / 200),
            resource = document.querySelectorAll('.resource-container .resource-container-image[alt="Runite bar"]')[0].parentElement.querySelectorAll('.resource-container-button .btn')[0];


        if(bars < burn) {
            barCount = bars;
        } else {
            barCount = burn;
        }

        resource.innerText = 'STOP (' + barCount + ' bars)';
    }

    return 'Bars: ' + barCount;
}

function getCombatStatus() {
    let inventoryCount = document.querySelectorAll('.combat-gear-inventory .cookedFish').length;

    return 'Food: ' + inventoryCount;
}

function getInventoryItem(item) {
    return parseInt(document.querySelectorAll('[data-for="'+item+'"]')[0].innerText) || 0;
}
