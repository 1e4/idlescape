// ==UserScript==
// @name         Enhancement Suite
// @namespace    http://github.com/1e4/idlescape
// @version      0.10.0
// @description  Enhancement suite for Idlescape
// @author       Ian
// @match        http*://idlescape.com/game
// @grant        GM_xmlhttpRequest
// @grant GM_setValue
// @grant GM_getValue
// @connect      pbbg.io
// @connect      127.0.0.1
// ==/UserScript==
let result;
let md5 = function(d){result = M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
let defaultTitle = document.title,
    initialStatus = null,
    currentAction = null,
    currentSkill = null,
    chatWindow = null,
    ttlElement,
    ttlContainer,
    ttlInterval,
    craftingTableSetup = false,
    smithingTableSetup = false,
    miningTableSetup = false,
    currentTab = null,
    tabTimer = null,
    pages = {};

(function() {
    'use strict';
    init();
})();

function init() {

    ttlInterval = setInterval(findTTLContainer, 1000);

    setInterval(checkStatus, 1000);
    chatWindow = setInterval(checkChat, 1000);

    setInterval(crashCheck, 5000);

    let username = md5(document.getElementById("name").innerText);

    GM_xmlhttpRequest({
        url: 'https://pbbg.io/api/idlescape/' + username,
        method: 'POST'

    });

    //pages['crafting'];
    setInterval(setupCraftingPage, 1000, this)

    tabTimer = setInterval(bindTabs, 1000);
}

function loadPage(tabName) {
    let page = Page.new(tabName).draw();
}

function bindTabs() {
    let tabContainer = document.querySelectorAll('.nav-tab-play-area .nav-tabs-display-container ul')[0],
        bound = false;

    if(tabContainer.classList.contains('bound') || !tabContainer)
    {
        return;
    }

    currentTab = GM_getValue('current_tab_id');
    let currentTabName = GM_getValue('current_tab_name');
    let documentCurrentTab = document.getElementById(currentTab);

    if(documentCurrentTab) {
        documentCurrentTab.click();
        loadPage(currentTabName);
    }

    let tabs = tabContainer.querySelectorAll('li');

    for(let i = 0; i < tabs.length;i++) {
        let tab = tabs[i],
            tabTarget = tab.attributes['aria-controls'].nodeValue,
            tabId = tab.id,
            tabName = tab.children[1].innerText;


        tab.addEventListener('click', () => {
            GM_setValue('current_tab', tabTarget);
            GM_setValue('current_tab_name', tabName);
            GM_setValue('current_tab_id', tabId);
            loadPage(tabName);
        });

        clearInterval(tabTimer);
    }

    tabContainer.classList.add('bound');
}

let Page = {
    init: function() {

        this.resource = null;
        this.timeElement = null;
        this.timePerAction = null;
        this.calc = null;
        this.resourceList = null;
        this.setup = false;
        this.xpTable = null;

        this.setupPage();

        if(this.name === 'Mining')
        {
            this.xpTable = {
                Copper: 5,
                Tin: 5,
                Iron: 50,
                Gold: 50,
                Mithril: 100,
                Adamantite: 150,
                Runite: 500
            };
        } else if(this.name === 'Woodcutting') {
            this.xpTable = {
                Bush: 1,
                Tree: 10,
                Oak: 20,
                Willow: 50,
                Maple: 100,
                Yew: 250
            };
        } else if(this.name === 'Smithing') {
            this.xpTable = {
                Bronze: 10,
                Iron: 100,
                Gold: 100,
                Mithril: 200,
                Adamantite: 300,
                Runite: 1000
            }
        } else if(this.name === 'Cooking') {
            this.xpTable = {
                "Cooked shrimp": 25,
                "Cooked anchovy": 50,
                "Cooked trout": 120,
                "Cooked salmon": 180,
                "Cooked lobster": 200,
                "Cooked tuna": 250,
                "Cooked shark": 1000
            }
        }

        return this;

    },

    new: function(name) {
        this.name = name || null;
        this.init();
        return this;
    },

    setupPage: function() {
        let tab = GM_getValue('current_tab');
        let area = document.getElementById(`${tab}`);
        this.resourceList = document.querySelector(`#${tab} .play-area .resource-list`);
    },

    draw: function() {



        if(this.setup === true && this.resourceList !== null)
            this.setup = false;

        if(this.resourceList === null)
            return;

        let resources = this.resourceList.querySelectorAll('.resource-container');

        for(let i = 0; i<resources.length;i++) {
            let resource = resources[i];
            this.handleResource(resources[i]);
        }

        this.setup = true;

        return this;
    },

    handleResource: function(resource) {
        resource.name = resource.querySelector('h5.resource-container-title').innerHTML;
        this.handleTime(resource);
    },

    handleTime: function(resource) {
        let timeElement = resource.querySelector('.resource-time.resource-property:last-of-type');
        let time = timeElement.querySelector('span').innerHTML;
        let perHourElement = resource.querySelector('.per-hour');

        if(!perHourElement)
        {

            perHourElement = document.createElement('div');
            perHourElement.classList.add('per-hour');

            timeElement.append(perHourElement);
        }

        let calc = Math.floor(3600 / time.replace('s', ''));

        let output = `${calc} p/h`;

        if(this.xpTable !== null) {
            let resourceName = resource.name;

            // Edge case for cooking
            if(resourceName.split(' ')[0] !== 'Cooked')
                resourceName = resourceName.split(' ')[0];

            let perHourXP = calc * this.xpTable[resourceName];
            output = `${output}<br>${perHourXP} xp p/h`;
        }

        perHourElement.innerHTML = output
    },
    getInstance: function() {
        return this;
    }
}

function setupCraftingPage(self) {
    let table = document.querySelector('.crafting-table.crafting-table-mod');

    if(craftingTableSetup === true && !table)
        craftingTableSetup = false;

    if(!table)
        return;


    if(craftingTableSetup === true)
        return;

    let headerElement = document.createElement('th');
    headerElement.innerText = 'Craftable';

    table.children[0].children[0].append(headerElement);

    for(let i = 0;i<table.children[1].children.length;i++)
    {
        let item = table.children[1].children[i],
            cell = item.querySelector('td:nth-of-type(4)'),
            amountAbleToMake = null;

        for(let a = 0;a<cell.children.length;a++)
        {
            let p = cell.children[a];

            let explode = p.innerText.split(':'),
                itemName = explode[0],
                amountOfItems = parseInt(explode[1]);



            // Knarly replacement for inventory hack
            itemName = itemName.replace('log', 'tree')
                .replace('Branch', 'Bush')
                .replace('Log', 'Tree');

            let currentAmountIHave = getInventoryItem(itemName + 'inventory'),
                canMake = 0;

            canMake = Math.floor(currentAmountIHave / amountOfItems);

            if(canMake < amountAbleToMake || amountAbleToMake === null)
                amountAbleToMake = canMake;
        }

        let itemEle = document.createElement('td');

        itemEle.innerText = amountAbleToMake;
        cell.parentElement.append(itemEle);


    }

    craftingTableSetup = true;
}

function crashCheck() {
    let app = document.getElementById("root");

    if(app.children.length !== 1)
    {
        window.location.reload();
    }
}

function findTTLContainer() {

    let container = document.querySelectorAll('.navbar3 .status-action');
    if(!container) {
        return;
    } else {
        ttlContainer = container[0];

        ttlElement = document.createElement('div');
        ttlElement.style.textAlign = 'center';
        ttlElement.innerText = 'Next Level In: ';

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
    let h = document.getElementById('heat').innerText;

    if(h.toLowerCase().includes('k'))
       h = parseInt(h) * 1000;


    return parseInt(h);
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

    ttlContainer.querySelectorAll('div')[1].innerText = "Next Level In: " + totalTime;
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
        if(tinAmount < getBurnLeft() || copperAmount < getBurnLeft()) {
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
            burn = Math.floor(getBurnLeft() / 50),
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
            burn = Math.floor(getBurnLeft() / 100),
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
            burn = Math.floor(getBurnLeft() / 200),
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
    let count = document.querySelectorAll('[data-for="'+item+'"]')[0];

    if(!count)
    {
        return 0;
    }

    if(count.innerText.includes('k'))
       count.innerText = parseInt(count) * 1000;

    return parseInt(count.innerText) || 0;
}
