// ==UserScript==
// @name     GitLab CSS
// @version  1
// @grant    none
// @include  https://git.vg7.it/*
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle(`.js-task-list-container {
    padding: 5px;
    border: 2px #ccc solid;
    border-radius: 5px;
    background:    #ececec;
}`);
