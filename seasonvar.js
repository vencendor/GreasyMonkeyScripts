// ==UserScript==
// @name     SeasonVar CSS
// @version  1
// @grant    none
// @include  http://seasonvar.ru/*
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

addGlobalStyle(`body .wrapper{
    min-width: auto;
}
body .middle{
		padding: 10px 0;
}

body .content-wrap .pgs-player{
    margin:0px;
}

`);

   
