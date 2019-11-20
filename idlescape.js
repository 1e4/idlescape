// ==UserScript==
// @name         Title Bar Update
// @namespace    http://github.com/1e4/idlescape
// @version      0.1
// @description  Updates title bar with your current status
// @author       Ian
// @match        https://idlescape.com/game
// @grant        none
// ==/UserScript==

let defaultTitle = document.title;

(function() {
    'use strict';
    setInterval(getStatus, 1000);
})();

function updateTitle(title) {
    document.title = title;
}

function getStatus() {
    let title = document.querySelector('.skill-levels-total-combat .status-action div').innerText;

    title = title.replace('Status: ', '');

    title = '[' + title + '] ';

    title = title + defaultTitle;

    updateTitle(title);

}
